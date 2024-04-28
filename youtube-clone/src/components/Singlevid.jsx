import React, { useContext , useEffect, useRef, useState} from 'react'
import './Singlevid.css'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa6";
import { IoSave } from "react-icons/io5";
import { Appcontext } from '../context/Vidcontext';
import { Datacontext } from '../context/Chanelcontext';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, getDoc, setDoc } from 'firebase/firestore';


const Singlevid = () => {
    const {singledata,convertnumbers,calculateTimeGap,setsingledata}=useContext(Appcontext)
    const {chaneldata,comments,relatedvid,imgarr,setimgarr,ischanelerror}=useContext(Datacontext)
    const [issubscribed, setissubscribed] = useState(false)
    // console.log(comments);
    // console.log(chaneldata);
    // console.log(singledata.chanel);
    const imgvalue=chaneldata.items[0].snippet.thumbnails.default.url
    const getdata=async()=>{
      try {
        let data=await getDoc(doc(db,"data",singledata.chanel))
        setissubscribed(data.data().subscribed)
      } catch (error) {
          console.log("suberror"+error);
      }
    }
    useEffect(()=>{
      getdata()
    },[singledata])
  return (
    <> 
      <div className="gohome">
        <Link to="/"><MdHome size="2rem"/>go to homepage</Link>
      </div>
      {ischanelerror?<b>an error occured while loading data</b>:<div className='vidpage'>
        <section className="videosection">
           <div className="mainvid">
           <iframe
                src={`https://www.youtube.com/embed/${singledata.id}`}
                title={singledata.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
        <b>{singledata.title}</b>
        <div className="vidviews">
            <div className="views">
                <p>{convertnumbers(singledata.views)} views . {calculateTimeGap(singledata.uploadtime)} ago</p>
            </div>
            <div className="vidoptions">
                <div className="like">
                    <BiSolidLike/>
                    <p>{convertnumbers(singledata.likes)}</p>
                </div>
                <div className="like">
                    <BiSolidDislike/>
                    <p></p>
                </div>
                <div className="like">
                    <FaShare/>
                    <p>share</p>
                </div>
                <div className="like">
                    <IoSave/>
                    <p>save</p>
                </div>
            </div>
        </div>
           <hr />
           </div>
           
           <div className="subscribe">
             <div className="subchanel">
                <img src={chaneldata?.items[0].snippet.thumbnails.default.url} alt="chanel" />
                <div className="subcontent">
                    <b>{singledata.chanel}</b>
                    <p>{convertnumbers(chaneldata.items[0].statistics.subscriberCount)} subscribers</p>
                </div>
             </div>
             {issubscribed ? <button className='unsub'>Unsubscribe</button>:<button onClick={async () => {
               if(imgarr.length>1){
                setimgarr((pre)=> [...pre,{image:chaneldata.items[0].snippet.thumbnails.default.url,name:singledata.chanel}])
                localStorage.setItem('imgarr',JSON.stringify(imgarr))
               }else{
                setimgarr((pre)=> [...pre,{image:chaneldata.items[0].snippet.thumbnails.default.url,name:singledata.chanel}])
                localStorage.setItem('imgarr',JSON.stringify([...imgarr,{image:chaneldata.items[0].snippet.thumbnails.default.url,name:singledata.chanel}]))
               }
               const subdata = {
                chanelName: singledata.chanel,
                subscribed: true
              };
              await setDoc(doc(db, "data", singledata.chanel), subdata);
              console.log(subdata);
              setissubscribed(true)
}}>subscribe</button>
}
           </div>
           <p className='desc'>{singledata.desc}</p>
           <hr />
           
           <div className="commentsec">
             <p>{convertnumbers(singledata.comments)} comments</p>
             {comments?.map((item)=>{
                return <div className="comment" key={item.id}>
                <div className="commenttitle">
                 <div className="ct1">
                 <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl
} alt="chanel" />
                <b>{item.snippet.topLevelComment.snippet.authorDisplayName}</b>
                 </div>
                <p>{calculateTimeGap(item.snippet.topLevelComment.snippet.publishedAt)} ago</p>
                </div>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comlike">
                   <div className="like">
                   <BiSolidLike/>
                    <p>{convertnumbers(item.snippet.topLevelComment.snippet.likeCount)}</p>
                   </div>
                   <div className="like">
                    <BiSolidDislike/>
                    <p></p>
                </div>
                </div>
             </div>
             })}
             
           </div>
        </section>

        <section className="rightbar">
            {relatedvid?.map((video)=>{
                return <div className="suggestion" key={video.id} onClick={()=>{
                    setsingledata({
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
                }}>
                <img src={video.snippet.thumbnails.high.url} alt="suggested" />
                <div className="sugg-content">
                <b>{video.snippet.localized.title}</b>
                <span>{video.snippet.channelTitle}</span>
                <p>{convertnumbers(video.statistics.viewCount)} views</p>
                </div>
            </div>
            })}

        </section>
    </div>}
    </>
  )
}

export default Singlevid