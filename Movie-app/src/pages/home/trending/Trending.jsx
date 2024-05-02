import React, { useState } from 'react'
import useFetch from '../../../Hooks/useFetch'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'
import '../Style.scss'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import Slider from '../../../components/imgslider/Slider'

const Trending = () => {
    const [trendingquery, settrendingquery] = useState("day")
    const {data,loading}=useFetch(`/trending/all/${trendingquery}`)
    console.log(data);
    const onTabChange=(qurey)=>{
       if(qurey==1){
         settrendingquery("week")
       }else{
         settrendingquery("day")
       }
    }
  return (
     <div className="trending">
      <ContentWrapper>
        <div className="title">
           <h3>
            Trending
           </h3>
           <SwitchTabs tabs={['Day','Week']} onTabChange={onTabChange}/>
        </div>
        <Slider data={data?.results} loading={loading}/>
     </ContentWrapper>
     </div>
  )
}

export default Trending