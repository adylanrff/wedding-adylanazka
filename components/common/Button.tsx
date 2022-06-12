import React from 'react'

type Props = {
    text?: string
    small?: boolean
    onClick?: () => void
}

export default function Button({ text, small, onClick }: Props) {
    const btnSizeClassName = small ? 'btn-sm sm:btn-md' : 'btn-md sm:btn-lg'

    return (
        <button
            onClick={onClick}
            className={`btn btn-primary ${btnSizeClassName} sm:p-0 px-6 sm:btn-wide text-white`}>
            {text}
        </button>
    )
}