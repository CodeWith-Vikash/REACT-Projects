import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'
import Slider from '../../../components/imgslider/Slider'

const Recomendation = () => {
    const {mediaType,id} = useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/recommendations`)
  console.log(data,loading);
  return (
    data?.results?.lenght>0 && <div className='.recomend'>
        <div className="title" style={{paddingLeft:"7vw",fontSize:"1.5rem"}}>Recommendations</div>
        <ContentWrapper>
            <Slider data={data?.results} loading={loading} endpoint={mediaType}/>
        </ContentWrapper>
    </div>
  )
}

export default Recomendation