import React, { ReactElement } from 'react'
import CoupleGeneralInfo from '../CoupleGeneralInfo'
import QuranVerse from '../QuranVerse'

interface Props {

}

export default function MainSection({ }: Props): ReactElement {
    return (
        <div className='flex flex-col'>
            <div className="mt-10">
                <CoupleGeneralInfo imageSrc="https://picsum.photos/356/356" />
            </div>
            <div className=''>
                <QuranVerse />
            </div>

        </div>

    )
}
