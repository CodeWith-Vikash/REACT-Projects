import React from 'react'

const Tag = ({text}) => {
  return (
    <button className='bg-black text-white font-semibold px-8 py-1 mr-4'>{text}</button>
  )
}

export default Tag