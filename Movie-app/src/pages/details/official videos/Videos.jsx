import React, { useState } from 'react'
import './Style.scss'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'
import ReactPlayer from 'react-player';
import Popup from '../popup video/Popup'

const Videos = ({data,loading}) => {
    console.log(data);
    const [show, setshow] = useState(false)
    const toggle=()=>{
      setshow(!show)
    }
  return (
    data?.results?.length>0 && <div className='officialvid'>
         <div className="title">Official Videos</div>
      <ContentWrapper>
         <div className="videos">
            {data?.results.map((vid)=>{
              return <React.Fragment key={vid.id}>
                <div className="video-container">
              <div className="video" onClick={toggle}>
              <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${vid.key}`}
                    width="100%"
                    height="100%"
                />
                <div className="icon"></div>
              </div>
              <p>{vid.name}</p>
            </div>
              <Popup show={show} toggle={toggle} vidid={vid.key}/>
              </React.Fragment>
            })}
         </div>
      </ContentWrapper>
    </div>
  )
}

export default Videos