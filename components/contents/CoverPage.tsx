import React, { ReactElement } from 'react'
import Button from '../common/Button'

interface Props {
    visible?: boolean
    onInvitationOpen: () => void
}

export default function CoverPage({onInvitationOpen}: Props): ReactElement {
    return (
        <div className="flex flex-col bg-background h-screen w-screen justify-center items-center shadow-xl">
            <div>
                <p className="text-center sm:text-4xl text-lg">The wedding of</p>
                <h1 className="font-title text-center sm:text-8xl text-4xl text-title">Adylan & Azka</h1>
            </div>
            
            <div className="mt-16 sm:mt-24">
                <p className="text-center sm:text-3xl">Kepada Yth:</p>
                <p className="text-center sm:text-3xl font-bold">Boediarto Dwijoatmodjo</p>
            </div>
            
            <div className="mt-20 sm:mt-28">
                <Button text='Buka Undangan' onClick={onInvitationOpen}/>
            </div>
        </div>
    )
}
