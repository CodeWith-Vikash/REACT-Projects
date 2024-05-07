import React, { useEffect, useState } from 'react'
import './Style.scss'
import { useParams,useNavigate } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import ContentWrapper from '../../components/contentWrapper/Wrapper'
import { fetchdatafromapi } from '../../utils/api'
import Img from '../../components/lazyload/img'
import { useSelector } from 'react-redux'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar'
import Genres from '../../components/genres/Genres'
import posteralt from '../../assets/no-poster.png'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../../components/Loader/Loader'
import axios from 'axios'

const Explore = () => {
  const navigate=useNavigate()
  let filters={}
  const {url}=useSelector((state)=>state.home)
  const [alldata, setalldata] = useState([])
  const [loading, setloading] = useState(false)
  const [pageNum, setpageNum] = useState(1)
  const {mediaType} = useParams()
  const fetchInitialData=()=>{
    setloading(true)
     fetchdatafromapi(`/discover/${mediaType}`,filters).then((res)=>{
       console.log(res);
       setalldata(res)
       setpageNum((pre)=>pre+1)
       setloading(false)
     })
  }

const TMDB_TOKEN=import.meta.env.VITE_APP_TMDB_TOKEN

const headers= {
    Authorization:"bearer "+TMDB_TOKEN,
}

const fetchNextPageData = async () => {
  try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/discover/${mediaType}?page=${pageNum}&api_key=12844e6b6a4e0708b276c8b200fd44ca`, {
          headers: headers,
          params: filters // Pass filters as query parameters
      });
        if(alldata?.results){
           setalldata({...alldata,results:[...alldata?.results,...data.results]})
        }else{
          setalldata(data)
        }
        setpageNum((prev)=>prev+1)
      console.log('nextpage',data);
  } catch (error) {
      console.log('nextpage', error);
  }
}


  useEffect(()=>{
    setpageNum(1)
    filters={}
    setalldata(null)
     fetchInitialData()
  },[mediaType])
  return (
loading?<Loader initial={true}/>:<div className='explore'>
      <ContentWrapper>
          <div className="title">
            Explore {mediaType=="tv"?'Tv Shows':'Movies'}
          </div>
          <InfiniteScroll
            className="content"
            dataLength={alldata?.results?.length || []}
            next={fetchNextPageData}
            hasMore={pageNum <= alldata?.total_pages}
            loader={<Loader/>}
          >

         <div className="container">
           {alldata?.results?.map((item) => {
                           if (item?.media_type === "person") return;
                            return <div className="card" key={item?.id} onClick={()=> {
                                navigate(`/${item.media_type || mediaType}/${item.id}`)
                            }}>
                                <Img src={item?.poster_path ? url.poster + item?.poster_path : posteralt} alt="" />
                                <div className="circle">
                                    <CircularProgressbar
                                        value={item?.vote_average.toFixed(1)}
                                        maxValue={10}
                                        text={item?.vote_average.toFixed(1)}
                                        styles={buildStyles({
                                            pathColor:
                                                item?.vote_average.toFixed(1) < 5 ? "red" : item?.vote_average.toFixed(1) < 7 ? "orange" : "green",
                                            textColor: "black",
                                            textSize: "30"
                                        })}
                                    />
                                </div>
                                <div className="genres">
                                    <Genres alldata={item?.genre_ids}/>
                                </div>
                                <p>{item?.title || item?.name}</p>
                                <span>{item?.release_date || item?.first_air_date}</span>
                            </div>
})}
         </div>
          </InfiniteScroll>
      </ContentWrapper>
    </div>
  )
}

export default Explore