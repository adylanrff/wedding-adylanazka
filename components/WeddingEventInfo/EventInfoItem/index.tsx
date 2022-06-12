import React, { useEffect } from 'react'

type Props = {
  imgSrc?: string
  title?: string
  content?: string
  children?: React.ReactNode
}

function EventInfoItem({ imgSrc, title, content, children }: Props) {
  const splittedContent = content?.split('\n')

  useEffect(() => {
    console.log(content)
  })

  return (
    <div className='flex flex-col items-center gap-2 sm:gap-4'>
      <img className='my-1 w-15 h-15 sm:w-20 sm:h-20' src={imgSrc}></img>
      <p className='font-title font-bold text-xl sm:text-4xl'>{title}</p>
      <div className='flex flex-col items-center'>
        {splittedContent?.map((line) => (
          <p className='text-xs sm:text-base leading-tight'>{line}</p>
        ))}
      </div>

      {children}
    </div>
  )
}

export default EventInfoItem