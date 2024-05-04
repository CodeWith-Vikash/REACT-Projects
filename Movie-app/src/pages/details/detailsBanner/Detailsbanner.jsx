import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../../Hooks/useFetch'
import Img from '../../../components/lazyload/img'
import { useSelector } from 'react-redux'
import './Style.scss'
import ContentWrapper from '../../../components/contentWrapper/Wrapper'
import Genres from '../../../components/genres/Genres'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import { FiPlayCircle } from "react-icons/fi";
import noposter from '../../../assets/no-poster.png'
import dayjs from 'dayjs'

const Detailsbanner = ({credits}) => {
    const {mediaType,id} = useParams()
  const {data,loading}=useFetch(`/${mediaType}/${id}`)
//   console.log(data,loading);
   const genres=data?.genres.map((item)=> item.id)
  const {url} = useSelector((state)=> state.home)
  const convertminute=(min)=>{
    return `${(min/60).toFixed(0)}h ${min%60}min`
  }
  let creaters=credits?.filter((maker)=> maker.job=="Director" || maker.job=="Writer")
  console.log(creaters);
  return (
        <>
          {loading? <ContentWrapper>
            <div className='loading'>
              <div className="poster skeleton"></div>
               <div className="skerows">
               <div className="row skeleton"></div>
               <div className="row skeleton"></div>
               <div className="row skeleton"></div>
               <div className="row skeleton"></div>
               <div className="row skeleton"></div>
               <div className="row skeleton"></div>
               <div className="row skeleton"></div>
               <div className="row skeleton"></div>
               </div>
          </div>
          </ContentWrapper>:
            <div className='detailbanner'>
            <Img src={url.backdrop+data?.backdrop_path}/>
            <div className="detailsContent">
               <ContentWrapper>
                  <div className="main-content">
                      <Img src={data?.poster_path?url.poster+data.poster_path:noposter}/>
                      <div className="content">
                          <p className="title">{data?.name ||data?.title}</p>
                          <div className="subcontent">
                          <p className="subtitle">{data?.tagline}</p>
                          <div className="genressec">
                              <Genres gens={genres}/>
                          </div>
      
                          <div className="options">
                              <div className="rating">
                              <CircularProgressbar
                                              value={data?.vote_average.toFixed(1)}
                                              maxValue={10}
                                              text={data?.vote_average.toFixed(1)}
                                              styles={buildStyles({
                                                  pathColor:
                                                      data?.vote_average.toFixed(1) < 5 ? "red" : data?.vote_average.toFixed(1) < 7 ? "orange" : "green",
                                                  textColor: "white",
                                                  textSize: "30"
                                              })}
                                          />
                              </div>
                              <div className="trailer">
                                  <FiPlayCircle className='icon'/>
                                  <p>Watch Trailer</p>
                              </div>
                          </div>
      
                          <h4>Overview</h4>
                          <p className='overview'>{data?.overview}</p>
                          <div className="status">
                              <div className="statusopt">
                                  <b>Status:</b>
                                  <span>{data?.status}</span>
                              </div>
                              <div className="statusopt">
                                  <b>Release Date:</b>
                                  <span>{dayjs(data?.release_date).format('MMM d YYYY')}</span>
                              </div>
                              {data?.runtime && <div className="statusopt">
                                  <b>Runtime:</b>
                                  <span>{convertminute(data?.runtime)}</span>
                              </div>}
                          </div>
                          <hr />
                          <div className="makers">
                              {
                                  creaters?.map((person)=>{
                                      return <div className='maker'>
                                          <b>{person.job}:</b>
                                          <span>{person.name}</span>
                                      </div>
                                  })
                              }
                          </div>
                          </div>
                      </div>
                  </div>
               </ContentWrapper>
            </div>
          </div>
          }
          <div className="blur"></div>
        </>
  )
}

export default Detailsbanner