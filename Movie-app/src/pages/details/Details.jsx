import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom'
import Detailsbanner from './detailsBanner/Detailsbanner'

const Details = () => {
  const {mediaType,id} = useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}`)
  console.log(data,loading);
  return (
    <div className='details'>
      <Detailsbanner/>
    </div>
  )
}

export default Details