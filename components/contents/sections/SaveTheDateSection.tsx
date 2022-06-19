import React from 'react'
import useWeddingInfoData from '../../../hooks/useWeddingInfoData'
import Button from '../../common/Button'
import DateCountdown from '../../DateCountdown'
import SectionTitle from '../../SectionTitle'

type Props = {}

export default function SaveTheDateSection({}: Props) {
  const [weddingInfoData] = useWeddingInfoData()

  const onAddToCalendarClick = () => {
    window.open(weddingInfoData.addToCalendarUrl, '_blank')
  }
  return (
    <div className="flex flex-col sm:gap-12 gap-6">
      <div>
        <SectionTitle text="Save The Date" />
      </div>
      <div className="self-center">
        <DateCountdown datetimeUnix={weddingInfoData.akadSchedule.startDatetime} />
      </div>
      <div className='self-center'>
        <Button text='Add to calendar' small onClick={onAddToCalendarClick}/>
      </div>
    </div>
  )
}
