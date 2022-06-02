import React from 'react'
import Waves from './Waves'

type Props = {}

function QuranVerse({ }: Props) {
    return (
        <div className='flex flex-col'>
            <div className='-z-50'>
                <Waves />
            </div>
            <div className='flex flex-col justify-center items-center text-center text-white bg-secondary'>
                <div className='sm:w-1/2 w-3/4'>
                    <p className='text-sm sm:text-2xl'>
                        “And one of his signs is that He created mates for you from yourselves that you may find rest in them, and He put between you love and compassion; most surely there are signs in this for people who reflect”
                    </p>
                    <p className='mt-3 sm:mt-6 text-sm sm:text-2xl font-bold'>
                        Q.S. Ar-Rum : 21
                    </p>
                </div>
            </div>
            <div className='rotate-180 -z-50'>
                <Waves />
            </div>
        </div>
    )
}

export default QuranVerse