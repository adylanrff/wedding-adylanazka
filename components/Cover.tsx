import Image from 'next/image'
import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Cover({}: Props): ReactElement {
    return (
        <div className="justify-center align-middle">
            <div>
                <p className="font-body text-center sm:text-3xl text-lg text-body">The wedding of</p>
                <h1 className="font-title text-center sm:text-8xl text-4xl text-title">Adylan & Azka</h1>
            </div>
        </div>
    )
}
