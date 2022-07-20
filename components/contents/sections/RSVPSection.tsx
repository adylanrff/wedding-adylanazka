import React from 'react'
import AttendanceConfirmation from '../../AttendanceConfirmation'

type Props = {}

export default function RSVPSection({ }: Props) {
    return (
        <div className="flex flex-col items-center">
            <AttendanceConfirmation />
        </div>
    )
}