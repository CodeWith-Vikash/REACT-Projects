import React, { useContext } from 'react'
import './Singlevid.css'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa6";
import { IoSave } from "react-icons/io5";
import { Appcontext } from '../context/Vidcontext';
import { Datacontext } from '../context/Chanelcontext';


const Singlevid = () => {
    const {singledata,convertnumbers,calculateTimeGap}=useContext(Appcontext)
    const {chaneldata,comments}=useContext(Datacontext)
    console.log(comments);
    // console.log(chaneldata);
  return (
    <div className='vidpage'>
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
           {/* ....... */}
           <div className="subscribe">
             <div className="subchanel">
                <img src={chaneldata.items[0].snippet.thumbnails.default.url} alt="chanel" />
                <div className="subcontent">
                    <b>{singledata.chanel}</b>
                    <p>{convertnumbers(chaneldata.items[0].statistics.subscriberCount)} subscribers</p>
                </div>
             </div>
             <button>subscribe</button>
           </div>
           <p className='desc'>{singledata.desc}</p>
           <hr />
           {/* comment section */}
           <div className="commentsec">
             <p>{convertnumbers(singledata.comments)} comments</p>
             {comments.map((item)=>{
                return <div className="comment">
                <div className="commenttitle">
                <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl
} alt="chanel" />
                <b>{item.snippet.topLevelComment.snippet.authorDisplayName}</b>
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
        <section className="rightbar"></section>
    </div>
  )
}

export default Singlevid