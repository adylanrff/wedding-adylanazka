import React from 'react'

type Props = {
    text?: string
    onClick?: () => void
}

export default function Button({text, onClick}: Props) {
  return (
    <button 
        onClick={onClick} 
        className="btn btn-primary btn-md sm:btn-lg sm:btn-wide text-white">
            {text}
    </button>
)
}