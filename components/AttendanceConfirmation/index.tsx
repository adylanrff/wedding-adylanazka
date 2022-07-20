import React from 'react'
import SectionTitle from '../SectionTitle'
import RSVPForm from './RSVPForm'

type Props = {}

export default function AttendanceConfirmation({ }: Props) {
  const titleText = "Attendance Confirmation"

  return (
    <div className='flex card card-normal bg-background-light shadow-sm shadow-gray-500 py-4 sm:py-12 gap-10 w-5/6'>
      <SectionTitle text={titleText} />
      <div className='flex gap-5 sm:gap-10 mx-10'>
        <div className='flex-1'>
          <RSVPForm />
        </div>
        <div className='w-[2px] bg-title rounded-full' />
        <div className='flex-1'>
          <RSVPForm />
        </div>
      </div>
    </div>
  )
}