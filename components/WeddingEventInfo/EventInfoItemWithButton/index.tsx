import React from 'react'
import Button from '../../common/Button'
import EventInfoItem from '../EventInfoItem'

type Props = {
    imgSrc?: string
    title?: string
    content?: string

    buttonText?: string
    onClick?: () => void
}

export default function EventInfoItemWithButton({ imgSrc, title, content, onClick, buttonText }: Props) {
    return (
        <EventInfoItem content={content} imgSrc={imgSrc} title={title}>
            <div className='mt-2'>
                <Button onClick={onClick} text={buttonText} small/>
            </div>
        </EventInfoItem>
    )
}