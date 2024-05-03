import React, { useState } from 'react'
import useFetch from '../../../Hooks/useFetch'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'
import '../Style.scss'
import SwitchTabs from '../../../components/switchtabs/SwitchTabs'
import Slider from '../../../components/imgslider/Slider'

const Toprated = () => {
    const [endpoint, setendpoint] = useState("tv")
    const {data,loading}=useFetch(`/${endpoint}/top_rated`)
    // console.log(data);
    const onTabChange=(qurey)=>{
       if(qurey==1){
         setendpoint("movie")
       }else{
         setendpoint("tv")
       }
    }
  return (
     <div className="Popular">
      <ContentWrapper>
        <div className="title">
           <h3>
            Top Rated
           </h3>
           <SwitchTabs tabs={['Tv','Movie']} onTabChange={onTabChange}/>
        </div>
        <Slider data={data?.results} loading={loading} endpoint={endpoint}/>
     </ContentWrapper>
     </div>
  )
}

export default Toprated