import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom'
import Detailsbanner from './detailsBanner/Detailsbanner'
import Topcast from './Top cast/Topcast'

const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}/credits`)
  // console.log(data,loading);
  return (
    <div className='details'>
      <Detailsbanner credits={data?.crew}/>
      <Topcast data={data?.cast}/>
    </div>
  )
}

export default Details