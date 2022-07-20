import React from 'react'

type Props = {
    text?: string
}

function SectionTitle({ text }: Props) {
    return (
        <div className='flex flex-1'>
            <div className='flex-1 flex items-center'>
                <div className='flex-1 h-0.5 sm:h-1 mx-3 sm:mx-5 bg-title' />
            </div>
            <div>
                <p className='text-center font-title text-title text-4xl sm:text-5xl sm:mx-5'>{text}</p>
            </div>
            <div className='flex-1 flex items-center'>
                <div className='flex-1 h-0.5 sm:h-1 mx-3 sm:mx-5 bg-title' />
            </div>
        </div>
    )
}

export default SectionTitle