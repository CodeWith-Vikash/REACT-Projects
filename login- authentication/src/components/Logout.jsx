import React from 'react'

const Logout = ({handlesubmit}) => {
  return (
    <div className='logout'>
      <button onClick={handlesubmit}>logout</button>
    </div>
  )
}

export default Logout