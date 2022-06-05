import React from 'react'
import GroomAndBrideSection from './sections/GroomAndBrideSection'
import MainSection from './sections/MainSection'

type Props = {}

function MainPage({}: Props) {
  return (
    <div className='justify-center overflow-x-hidden w-screen h-screen overflow-auto'>
        <div className='my-8'>
          <MainSection />
        </div>
        <div className='my-8'>
          <GroomAndBrideSection />
        </div>
    </div>
  )
}

export default MainPage