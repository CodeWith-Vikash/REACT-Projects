import React from 'react'
import './Style.scss'
import { useParams } from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'
import Slider from '../../../components/imgslider/Slider'

const Similler = () => {
    const {mediaType,id} = useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/similar`)
  console.log(data,loading);
  return (
    data?.results?.length>0 && <div className='similler'>
        <div className="title">
            Similler Movies
        </div>
        <ContentWrapper>
            <Slider data={data?.results} loading={loading} endpoint={mediaType}/>
        </ContentWrapper>
    </div>
  )
}

export default Similler