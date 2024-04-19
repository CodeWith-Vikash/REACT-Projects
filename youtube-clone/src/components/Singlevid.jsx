import React from 'react'
import './Singlevid.css'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShare } from "react-icons/fa6";
import { IoSave } from "react-icons/io5";


const Singlevid = () => {
  return (
    <div className='vidpage'>
        <section className="videosection">
           <div className="mainvid">
           <video autoplay muted loop controls>
           <source src="src/components/EMIWAY_-_GRIND_(PROD._FLAMBOY)_(OFFICIAL_MUSIC_VIDEO)(1080p).mp4" type="video/mp4"/>
       </video>
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia repellat fugit, explicabo odio repudiandae dolore blanditiis eligendi providen</b>
        <div className="vidviews">
            <div className="views">
                <p>6m views . 7 hours ago</p>
            </div>
            <div className="vidoptions">
                <div className="like">
                    <BiSolidLike/>
                    <p>498k</p>
                </div>
                <div className="like">
                    <BiSolidDislike/>
                    <p>8k</p>
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
                <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
                <div className="subcontent">
                    <b>peter paot</b>
                    <p>3m subscribers</p>
                </div>
             </div>
             <button>subscribe</button>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aliquid qui, odio harum animi explicabo, rem ipsa, sint mollitia aperiam rerum assumenda maxime libero sequi ipsam ex fuga. Quibusdam, at.</p>
           <hr />
           <div className="commentsec">
             <p>5k comments</p>
             <div className="comment">
                <div className="commenttitle">
                <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
                <b>peter pageo</b>
                <p>14 hours ago</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur.</p>
                <div className="comlike">
                   <div className="like">
                   <BiSolidLike/>
                    <p>498k</p>
                   </div>
                   <div className="like">
                    <BiSolidDislike/>
                    <p>8k</p>
                </div>
                </div>
             </div>
             {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
             <div className="comment">
                <div className="commenttitle">
                <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
                <b>peter pageo</b>
                <p>14 hours ago</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur.</p>
                <div className="comlike">
                   <div className="like">
                   <BiSolidLike/>
                    <p>498k</p>
                   </div>
                   <div className="like">
                    <BiSolidDislike/>
                    <p>8k</p>
                </div>
                </div>
             </div>
             {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
             <div className="comment">
                <div className="commenttitle">
                <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
                <b>peter pageo</b>
                <p>14 hours ago</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur.</p>
                <div className="comlike">
                   <div className="like">
                   <BiSolidLike/>
                    <p>498k</p>
                   </div>
                   <div className="like">
                    <BiSolidDislike/>
                    <p>8k</p>
                </div>
                </div>
             </div>
             {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
             <div className="comment">
                <div className="commenttitle">
                <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
                <b>peter pageo</b>
                <p>14 hours ago</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur.</p>
                <div className="comlike">
                   <div className="like">
                   <BiSolidLike/>
                    <p>498k</p>
                   </div>
                   <div className="like">
                    <BiSolidDislike/>
                    <p>8k</p>
                </div>
                </div>
             </div>
             {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
             <div className="comment">
                <div className="commenttitle">
                <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
                <b>peter pageo</b>
                <p>14 hours ago</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur.</p>
                <div className="comlike">
                   <div className="like">
                   <BiSolidLike/>
                    <p>498k</p>
                   </div>
                   <div className="like">
                    <BiSolidDislike/>
                    <p>8k</p>
                </div>
                </div>
             </div>
             {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
             <div className="comment">
                <div className="commenttitle">
                <img src="https://up.yimg.com/ib/th?id=OIP.hLTThhxHPeGqFQVjpD1-hwHaE8&pid=Api&rs=1&c=1&qlt=95&w=167&h=111" alt="chanel" />
                <b>peter pageo</b>
                <p>14 hours ago</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, tenetur.</p>
                <div className="comlike">
                   <div className="like">
                   <BiSolidLike/>
                    <p>498k</p>
                   </div>
                   <div className="like">
                    <BiSolidDislike/>
                    <p>8k</p>
                </div>
                </div>
             </div>
             {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}
           </div>
        </section>
        <section className="rightbar"></section>
    </div>
  )
}

export default Singlevid