import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const CoverPage = dynamic(() => import('../components/contents/CoverPage'))
const MainPage = dynamic(() => import('../components/contents/MainPage'))

const Home: NextPage = () => {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false)
  
  const coverPageVariants = {
    hidden: {  y: '-120vh' },
    visible: { y: '0' },
  }

  const onInvitationOpen = (): void => {
    setIsInvitationOpened(true)
  }

  return (
    <div className="min-h-screen relative items-center justify-center">
      <Head>
        <title>Adylan & Azka Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cover page */}
      <AnimatePresence>
        {!isInvitationOpened && (
          <motion.div
            exit="hidden"
            transition={{ duration: 0.75 }}
            animate={isInvitationOpened ? 'hidden' : 'visible'}
            variants={coverPageVariants}
            className="absolute inset-0 z-10"
          >
            <CoverPage onInvitationOpen={onInvitationOpen} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page */}
      <MainPage />

    </div>
  )
}

export default Home
