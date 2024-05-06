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

const Explore = () => {
  const navigate=useNavigate()
  let filters={}
  const {url}=useSelector((state)=>state.home)
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(false)
  const [pageNum, setpageNum] = useState(1)
  const {mediaType} = useParams()
  const fetchInitialData=()=>{
    setloading(true)
     fetchdatafromapi(`/discover/${mediaType}`,filters).then((res)=>{
       console.log(res);
       setdata(res)
       setpageNum((pre)=>pre+1)
       setloading(false)
     })
  }
  const fetchNextPageData = () => {
    fetchdatafromapi(
        `/discover/${mediaType}?page=${pageNum}`,
        filters
    ).then((res) => {
        if (data?.results) {
            setdata({
                ...data,
                results: [...data?.results, ...res.results],
            });
        } else {
            setdata(res);
        }
        setpageNum((prev) => prev + 1);
    });
};
  useEffect(()=>{
    setpageNum(1)
    filters={}
    setdata(null)
     fetchInitialData()
  },[mediaType])
  return (
    <div className='explore'>
      <ContentWrapper>
          <InfiniteScroll
            className="content"
            dataLength={data?.results?.length || []}
            next={fetchNextPageData}
            hasMore={pageNum <= data?.total_pages}
            loader={<Loader/>}
          >

         <div className="container">
           {data?.results?.map((item) => {
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
                                    <Genres data={item?.genre_ids}/>
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