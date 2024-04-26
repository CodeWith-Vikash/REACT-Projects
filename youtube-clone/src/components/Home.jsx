import React, { useContext,useEffect,useState} from 'react'
import './Home.css'
import Video from './Video'
import { IoMdHome } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { LiaBlogSolid } from "react-icons/lia";
import { FaRegNewspaper } from "react-icons/fa6";
import { Appcontext } from '../context/Vidcontext';
import { MdOutlinePets } from "react-icons/md";
import { MdTheaterComedy } from "react-icons/md";
import { MdVolunteerActivism } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Datacontext } from '../context/Chanelcontext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { SearchContext } from '../context/SearchContext';



const Home = () => {
  const {videos,setcategoryId,setsingledata,convertnumbers,calculateTimeGap}=useContext(Appcontext)
  const {fetchChaneldata,chaneldata,imgarr}= useContext(Datacontext)
  const {searchdata,isloading,issearch,iserror} = useContext(SearchContext)
  const [subdata, setsubdata] = useState([])
  let subimages=JSON.parse(localStorage.getItem("imgarr"))
  // console.log(subimages);
  // console.log(subdata);
  const getfirestore=async()=>{
     try {
       const collectionref=collection(db,"data")
       const querry=await getDocs(collectionref)
       const data=querry.docs.map((doc)=>({...doc.data(),id:doc.id}))
      //  console.log(data);
      //  setsubdata(data)
     } catch (error) {
        console.log(error);
     }
  }

  useEffect(()=>{
    
    getfirestore()
  },[])
  return (
    <>
    <Navbar/>
    <div className='home'>
      {!issearch && <aside>
        <div className="area">
        <div className="option" onClick={()=>setcategoryId(0)}>
           <IoMdHome size="1.5rem"/>
           <p>Home</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(20)}>
           <SiYoutubegaming size="1.5rem"/>
           <p>Gaming</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(2)}>
           <FaCarAlt size="1.5rem"/>
           <p>Automobiles</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(17)}>
           <MdOutlineSportsSoccer size="1.5rem"/>
           <p>Sports</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(24)}>
           <MdOutlineScreenSearchDesktop size="1.5rem"/>
           <p>Entertainment</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(28)}>
           <GrTechnology size="1.5rem"/>
           <p>Technology</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(10)}>
           <MdLibraryMusic size="1.5rem"/>
           <p>Music</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(22)}>
           <LiaBlogSolid size="1.5rem"/>
           <p>Blog</p>
         </div>
         {/* '''''''' */}         
         <div className="option" onClick={()=>setcategoryId(15)}>
           <MdOutlinePets size="1.5rem"/>
           <p>Animals</p>
         </div>
         {/* '''''''' */}         
         <div className="option" onClick={()=>setcategoryId(23)}>
           <MdTheaterComedy size="1.5rem"/>
           <p>Comedy</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(25)}>
           <FaRegNewspaper size="1.5rem"/>
           <p>News</p>
         </div>
         {/* '''''''' */}
         <div className="option" onClick={()=>setcategoryId(29)}>
           <MdVolunteerActivism size="1.5rem"/>
           <p>Activism</p>
         </div>
         {/* '''''''' */}
        </div>
        
        <div className="subscritpt">
          <b>Subscription</b>
          {subdata.map((item,index)=>{
             return <div className="chanel" key={index}>
             <img src={subimages.filter((img)=>{
                 return img.name==item.id
             }).map((ele)=> ele.image)} alt="chanel" />
             <p>{item.chanelName}</p>
           </div>
          })}

        </div>
       </aside>}
        <div className="videos" style={issearch?{width:"100%"}:null}>
        {iserror?<b>An Error Occured</b>:issearch?searchdata.map(search => (
          <Link to="/video" key={search.id}>
            <li onClick={()=>{ setsingledata({
               id:search.id,
               desc:search.snippet.description,
               title:search.snippet.title,
              //  views:search.statistics.viewCount,
              //  likes:search.statistics.likeCount,
               chanel:search.snippet.channelTitle,
              //  comments:search.statistics.commentCount,
               chanelid:search.snippet.channelId,
               uploadtime:search.snippet.publishedAt
            })
            localStorage.setItem("chanelid",JSON.stringify({
               id:search.snippet.channelId,
               category:search.snippet.categoryId
            }))
            // fetchChaneldata()
            }}>
             <img src={search.snippet.thumbnails.medium.url} alt="thumbnail" width="240"/>
              <div className="thumbcontent">
              <h4>{search.snippet.title}</h4>
              <p className='chanelname'>{search.snippet.channelTitle}</p>
              <div className="chanel">
              {/* <p>{convertnumbers(search.statistics.viewCount)} views</p> */}
              <p>{calculateTimeGap(search.snippet.publishedAt)} ago</p>
              </div>
              </div>
          </li>
          </Link>
        ))
        :videos.map(video => (
          <Link to="/video" key={video.id}>
            <li onClick={()=>{ setsingledata({
               id:video.id,
               desc:video.snippet.description,
               title:video.snippet.title,
               views:video.statistics.viewCount,
               likes:video.statistics.likeCount,
               chanel:video.snippet.channelTitle,
               comments:video.statistics.commentCount,
               chanelid:video.snippet.channelId,
               uploadtime:video.snippet.publishedAt
            })
            localStorage.setItem("chanelid",JSON.stringify({
               id:video.snippet.channelId,
               category:video.snippet.categoryId
            }))
            // fetchChaneldata()
            }}>
             <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" width="240"/>
              <div className="thumbcontent">
              <h4>{video.snippet.title}</h4>
              <p className='chanelname'>{video.snippet.channelTitle}</p>
              <div className="chanel">
              <p>{convertnumbers(video.statistics.viewCount)} views</p>
              <p>{calculateTimeGap(video.snippet.publishedAt)} ago</p>
              </div>
              </div>
          </li>
          </Link>
        ))}
        </div>
    </div>
    </>
  )
}

export default Home