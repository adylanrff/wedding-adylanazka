import React from 'react'

type Props = {
  text?: string
  number?: number
}

export default function CountdownItem({ number, text }: Props) {
  return (
    <div className="flex sm:h-32 sm:w-28 w-20 h-24 flex-col drop-shadow-sm justify-center rounded-3xl border-8 border-accent bg-background-light text-center font-bold">
      <p className='sm:text-2xl text-lg'>{number}</p>
      <p className='sm:text-xl text-xs'>{text}</p>
    </div>
  )
}
