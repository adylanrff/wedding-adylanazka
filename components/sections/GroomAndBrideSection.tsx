import React, { useState } from 'react'
import useGroomAndBrideData from '../../hooks/useGroomAndBrideData'
import CouplePhotoInfo from '../CouplePhotoInfo'
import GroomAndBrideInfo from '../GroomAndBrideInfo'
import SectionTitle from '../SectionTitle'

type Props = {}

function GroomAndBrideSection({ }: Props) {
    const [groomAndBrideData, _] = useGroomAndBrideData()

    const { groom, bride } = groomAndBrideData

    return (
        <div className='flex flex-col'>
            {/* Title */}
            <div className='my-4'>
                <SectionTitle text='Groom and Bride' />
            </div>
            <div className='my-4'>
                <div className='flex-1 flex justify-center items-center'>
                    <p className='text-center text-md sm:text-xl leading-tight sm:w-1/2 mx-5'>Dengan mengucap rasa syukur, kami hendak menyampaikan kabar bahagia dan mengundang Anda untuk hadir ke pernikahan kami:</p>
                </div>
            </div>

            {/* Groom and Bride Info */}
            <GroomAndBrideInfo groomData={groom} brideData={bride} />

            {/* Divider */}
            <div className='self-center'>
                <img src='/flower-1.svg' className='sm:w-52 sm:h-52 w-36 h-36' />
            </div>

            
        </div>
    )
}

export default GroomAndBrideSection