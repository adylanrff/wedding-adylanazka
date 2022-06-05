import React from 'react'
import { CoupleData } from "../../types/CoupleData";

type Props = {
    coupleData?: CoupleData
}

function CouplePhotoInfo({
    coupleData
}: Props) {
    const childOfText = coupleData?.isMale ? "Putra dari" : "Putri dari"
    const fatherSalutation = "Bapak"
    const motherSalutation = "Ibu"

    return (
        <div className='flex flex-col sm:space-y-8 space-y-3 items-center justify-center'>
            <div className='flex flex-col space-y-5 items-center'>
                <img src={coupleData?.photoSrc} className="w-[210px] sm:w-[310px] h-[305px] sm:h-[464px] rounded-t-full shadow-lg shadow-title" />
                <p className='font-title text-title text-2xl sm:text-5xl text-center font-bold'>{coupleData?.name}</p>
            </div>
            <div className='text-center text-sm sm:text-xl'>
                <p className='font-bold'>{childOfText}</p>
                <p>{fatherSalutation} {coupleData?.fatherName}</p>
                <p>&</p>
                <p>{motherSalutation} {coupleData?.motherName}</p>
            </div>
        </div>
    )
}

export default CouplePhotoInfo