import React from 'react'
import useGroomAndBrideData from '../../../hooks/useGroomAndBrideData'
import GroomAndBrideInfo from '../../GroomAndBrideInfo'
import SectionTitle from '../../SectionTitle'
import WeddingEventInfo from '../../WeddingEventInfo'

type Props = {}

function GroomAndBrideSection({ }: Props) {
    const [groomAndBrideData, _] = useGroomAndBrideData()

    const { groom, bride } = groomAndBrideData

    return (
        <div className='flex space-y-8 flex-col'>
            {/* Title */}
            <div>
                <SectionTitle text='Groom and Bride' />
            </div>
            <div>
                <div className='flex-1 flex justify-center items-center'>
                    <p className='text-center text-sm sm:text-xl leading-tight sm:w-1/2 mx-5'>Dengan mengucap rasa syukur, kami hendak menyampaikan kabar bahagia dan mengundang Anda untuk hadir ke pernikahan kami:</p>
                </div>
            </div>

            {/* Groom and Bride Info */}
            <GroomAndBrideInfo groomData={groom} brideData={bride} />

            {/* Divider */}
            <div className='self-center sm:block hidden'>
                <img src='/flower-1.svg' className='sm:w-52 sm:h-52 w-36 h-36' />
            </div>

            {/* WeddingEventInfo */}
            <div className='mx-4'>
                <WeddingEventInfo />
            </div>
        </div>
    )
}

export default GroomAndBrideSection