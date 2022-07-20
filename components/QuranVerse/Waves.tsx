import React from 'react'

type Props = {}

function Waves({ }: Props) {
    return (
        <div className='relative w-screen'>
            <img src='/wave-2.svg' className='absolute w-screen' />
            <img src='/wave-1.svg' className='absolute w-screen top-12 sm:top-24 md:top-32 lg:top-40' />
            <img src='/wave-2.svg' className='invisible w-screen' /> 
        </div>
    )
}

export default Waves