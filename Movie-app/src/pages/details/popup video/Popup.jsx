import React, { useRef, useState } from 'react'
import './Style.scss'
import ReactPlayer from 'react-player'
const Popup = ({show,toggle,vidid}) => {
  return (
    <>
      {show && <div className='popup'>
         <p onClick={toggle}>close</p>
        <div className="video">
        <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${vidid}`}
                    controls
                    width="100%"
                    height="100%"
                    playing={true}
                />
        </div>
    </div>}
    </>
  )
}

export default Popup