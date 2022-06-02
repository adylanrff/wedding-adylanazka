import React, { ReactElement } from 'react'
import CoupleGeneralInfo from '../CoupleGeneralInfo'

interface Props {
    
}

export default function MainSection({}: Props): ReactElement {
    return (
        <div className="mt-10">
            <CoupleGeneralInfo imageSrc="https://picsum.photos/356/356" />
        </div>
    )
}
