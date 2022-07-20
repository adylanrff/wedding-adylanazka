import React from 'react'
import GroomAndBrideSection from './sections/GroomAndBrideSection'
import MainSection from './sections/MainSection'
import RSVPSection from './sections/RSVPSection'
import SaveTheDateSection from './sections/SaveTheDateSection'

type Props = {}

function MainPage({}: Props) {
  return (
    <div className="h-screen w-screen justify-center overflow-auto overflow-x-hidden">
      <div className='flex flex-col gap-24 pb-12'>
          <MainSection />
          <GroomAndBrideSection />
          <SaveTheDateSection />
          <RSVPSection />
      </div>
    </div>
  )
}

export default MainPage
