import React from 'react'
import MainSection from '../sections/MainSection'

type Props = {}

function MainPage({}: Props) {
  return (
    <div className='flex justify-center align-center w-screen h-screen'>
        <div className='my-8'>
          <MainSection />
        </div>
    </div>
  )
}

export default MainPage