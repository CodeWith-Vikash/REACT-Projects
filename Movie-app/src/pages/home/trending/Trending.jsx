import React from 'react'
import useFetch from '../../../Hooks/useFetch'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'
import '../Style.scss'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import Slider from '../../../components/imgslider/Slider'

const Trending = () => {
    const {data,loading}=useFetch('/trending/all/day')
    console.log(data);
  return (
     <div className="trending">
      <ContentWrapper>
        <div className="title">
           <h3>
            Trending
           </h3>
           <SwitchTabs tabs={['Day','Week']}/>
        </div>
        <Slider data={data?.results}/>
     </ContentWrapper>
     </div>
  )
}

export default Trending