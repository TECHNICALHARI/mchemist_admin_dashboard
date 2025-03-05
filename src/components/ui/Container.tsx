import React, { FC, ReactNode } from 'react'
interface Props{
    children: ReactNode
}
const Container:FC<Props> = ({children}) => {
  return (
    <div className='w-[90%] max-w-7xl mx-auto px-4 md:px-8 lg:px-12"'>{children}</div>
  )
}

export default Container