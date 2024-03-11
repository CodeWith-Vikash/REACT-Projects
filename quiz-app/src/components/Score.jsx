import React from 'react'


const custumstyle={
    display: 'flex',
     alignItems: 'center',
     fontSize:'1.3rem'
  }
const Score = ({score,length}) => {
  return (
    <div  style={custumstyle}>
        <b>you got {score} out of {length}</b>
    </div>
  )
}

export default Score