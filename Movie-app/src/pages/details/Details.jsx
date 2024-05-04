import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom'
import Detailsbanner from './detailsBanner/Detailsbanner'
import Topcast from './Top cast/Topcast'
import Videos from './official videos/Videos'
import Similler from './Similler movies/Similler'
import Recomendation from './Recomendation/Recomendation'
import './Style.scss'

const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/credits`)
  const {data:viddata,loading:vidloading}=useFetch(`/${mediaType}/${id}/videos`)
  console.log(viddata,vidloading);
  // console.log(data,loading);
  return (
    <div className='details'>
      <Detailsbanner credits={data?.crew} viddata={viddata}/>
      <Topcast data={data?.cast}/>
      <Videos data={viddata} loading={vidloading}/>
      <Similler/>
      <Recomendation/>
    </div>
  )
}

export default Details