import moment from 'moment'
import React, { useEffect } from 'react'
import CountdownItem from './CountdownItem'

type Props = {
  datetimeUnix?: number
}

export default function DateCountdown({ datetimeUnix }: Props) {
  const [days, setDays] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!!datetimeUnix) {
        const now = moment()
        const dateTime = moment.unix(datetimeUnix)

        const diff = dateTime.diff(now)
        const duration = moment.duration(diff)

        const days = Math.floor(duration.asDays())
        const hours = duration.hours()
        const minutes = duration.minutes()
        const seconds = duration.seconds()

        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [days, hours, minutes, seconds])

  return (
    <div className="relative w-screen">
      <div className="absolute h-10 w-screen bg-accent -z-10 my-auto top-0 bottom-0" />
      <div className='flex w-screen'>
        <div className="self-center flex sm:gap-20 gap-2 mx-auto left-0 right-0 bottom-0">
          <CountdownItem text="Days" number={days} />
          <CountdownItem text="Hours" number={hours} />
          <CountdownItem text="Minutes" number={minutes} />
          <CountdownItem text="Seconds" number={seconds} />
        </div>
      </div>
    </div>
  )
}
