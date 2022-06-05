import React, { ReactElement } from 'react'
import CoupleGeneralInfo from '../../CoupleGeneralInfo'
import QuranVerse from '../../QuranVerse'

interface Props {
}

export default function MainSection({ }: Props): ReactElement {
    return (
        <div className='flex flex-col'>
            <div className="mt-10">
                <CoupleGeneralInfo imageSrc="https://via.placeholder.com/356x356?text=Photo+Adylan+Azka" />
            </div>
            <QuranVerse />
        </div>

    )
}
