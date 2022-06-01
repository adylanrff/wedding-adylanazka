import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Cover from '../components/Cover'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen bg-background flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cover component */}
      <Cover />

      {/* Content component */}
    </div>
  )
}

export default Home
