import moment from 'moment'
import React, { useEffect } from 'react'
import { ScheduleData, WeddingInfoData } from '../../types/WeddingInfoData'
import { openInNewTab } from '../../utils/urls'
import EventInfoItem from './EventInfoItem'
import EventInfoItemWithButton from './EventInfoItemWithButton'

type Props = {
  weddingInfo: WeddingInfoData
}

function WeddingEventInfo({ weddingInfo }: Props) {
  const { akadSchedule, resepsiSchedule, location } = weddingInfo

  const akadContentText = getScheduleText(akadSchedule)
  const resepsiContentText = getScheduleText(resepsiSchedule)
  const locationContentText = `${location.name} \n ${location.address} \n`

  const mapsButtonOnClick = () => {
    openInNewTab("https://goo.gl/maps/KFJ16fqe96iWHBZR9")
  }

  return (
    <div className='flex card card-normal bg-card shadow-sm shadow-gray-500 p-4 sm:p-12 gap-5'>
      <div className='flex sm:flex-row flex-col sm:gap-0 gap-7 flex-1 justify-around'>
        <EventInfoItem imgSrc='/ring.svg' title='Akad Nikah' content={akadContentText} />
        <EventInfoItem imgSrc='/champagne.svg' title='Resepsi' content={resepsiContentText} />
      </div>

      <div className='h-1 bg-title rounded-full w-3/4 self-center'/>

      <EventInfoItemWithButton
        imgSrc='/map.svg'
        title='Lokasi'
        buttonText='Buka maps'
        content={locationContentText}
        onClick={mapsButtonOnClick}
      />
    </div>
  )
}

function getScheduleText(schedule: ScheduleData) {
  const dateText = moment.unix(schedule.startDatetime).format('dddd, DD MMMM YYYY')
  const startTimeText = moment.unix(schedule.startDatetime).format('HH:mm')
  const endTimeText = moment.unix(schedule.endDatetime).format('HH:mm')

  return `${dateText} \n ${startTimeText} - ${endTimeText}`
}

export default WeddingEventInfo
