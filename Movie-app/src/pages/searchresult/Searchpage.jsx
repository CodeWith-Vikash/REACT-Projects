import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import { fetchdatafromapi } from '../../utils/api'
import './Style.scss'
import Img from '../../components/lazyload/img'
import { useSelector } from 'react-redux'
import posteralt from '../../assets/no-poster.png'
import ContentWrpper from '../../components/contentWrapper/Wrapper'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import InfiniteScroll from 'react-infinite-scroll-component'
import noresults from '../../assets/no-results.png'

const Searchpage = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const {url}=useSelector((state)=>state.home)
  const navigate=useNavigate()

  const fetchInitialData =async () => {
      setLoading(true)
      try {
        const response=await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=12844e6b6a4e0708b276c8b200fd44ca&page=${pageNum}`
      )
      const res=await response.json()
      console.log(res);
      setData(res)
      setLoading(false)
      setPageNum((pre)=>pre+1)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
  };

  const fetchnextpge=async ()=>{
    try {
      const response=await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&api_key=12844e6b6a4e0708b276c8b200fd44ca&page=${pageNum}`
    )
    const res=await response.json()
     if(data?.results){
         setData({...data, results:[...data?.results,...res.results]})
     }else{
       setData(res)
     }
    setPageNum((pre)=>pre+1)
    } catch (error) {
      console.log(error);
    }
  }
  console.log(query);
  useEffect(()=>{
    setPageNum(1)
    fetchInitialData()
  },[query])
  return (
    <div className='search'>
      {loading && <Loader initial={true}/>}
      <ContentWrpper>
      {data?.results?.length >0 ?
         <>  
             <div className="title">
               {`search ${data.results.length>1? 'results':'result'} for ' ${query} '`}
             </div>
             <InfiniteScroll
               className='content'
               dataLength={data?.results?.length}
               next={fetchnextpge}
               hasMore={pageNum<=data?.results?.length}
               loader={<Loader/>}
             >
             <div className="wrapper">
             {data?.results?.map((item) => {
                           if(item.media_type=='person') return;
                           return <div className="card" key={item.id} onClick={()=> {
                                navigate(`/${item.media_type}/${item.id}`)
                            }}>
                                <Img src={item.poster_path ? url.poster + item.poster_path : posteralt} alt="" />
                                <p>{item.title || item.name}</p>
                                <span>{item.release_date || item.first_air_date}</span>
                            </div>
})}
             </div>
             </InfiniteScroll>
         </>
      : <div className='notfound'>
                  <img src={noresults} alt="data not found" />
                          </div>}
      </ContentWrpper>
    </div>
  )
}

export default Searchpage