import Image from 'next/image'
import React, { ReactElement } from 'react'

interface Props {
    imageSrc?: string
}

function CoupleGeneralInfo({imageSrc}: Props): ReactElement {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-center text-xl sm:text-4xl font-thin">The wedding of</p>
            <img src={imageSrc} className="w-52 h-52 sm:w-96 sm:h-96 my-4 rounded-full" />
            <h1 className="font-title text-center font-bold text-title text-4xl sm:text-7xl">Adylan & Azka</h1>
            <p className="text-center text-sm sm:text-2xl mt-3">Minggu, 18 Desember 2022</p>
        </div>
    )
}

export default CoupleGeneralInfo
