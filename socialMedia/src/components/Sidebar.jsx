import React from 'react'
import styles from './Sidebar.module.css'
import { MdRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside>
        <div className={styles.options}>
            <div className={styles.option}>
                <MdRssFeed />
                <b>Feed</b>
            </div>
            <div className={styles.option}>
               <BsChatSquareTextFill  size="1.1rem"/>
                <b>Chats</b>
            </div>
            <div className={styles.option}>
                <BiSolidVideos size="1.1rem"/>
                <b>Videos</b>
            </div>
            <div className={styles.option}>
                <MdGroups size="1.1rem"/>
                <b>Groups</b>
            </div>
            <div className={styles.option}>
                <FaBookmark size="1.1rem"/>
                <b>Bookmarks</b>
            </div>
            <div className={styles.option}>
                <FaRegQuestionCircle size="1.1rem"/>
                <b>Questions</b>
            </div>
            <div className={styles.option}>
                <IoBagSharp size="1.1rem"/>
                <b>Jobs</b>
            </div>
            <div className={styles.option}>
                <MdEventAvailable size="1.1rem"/>
                <b>Events</b>
            </div>
            <div className={styles.option}>
                <FaGraduationCap size="1.1rem"/>
                <b>Courses</b>
            </div>
            <button>Show More</button>
            <div className={styles.friends}>
                <div className={styles.friend}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                    <span>Jone doe</span>
                </div>
                <div className={styles.friend}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                    <span>Jone doe</span>
                </div>
                <div className={styles.friend}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                    <span>Jone doe</span>
                </div>
                <div className={styles.friend}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                    <span>Jone doe</span>
                </div>
                <div className={styles.friend}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                    <span>Jone doe</span>
                </div>
                <div className={styles.friend}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                    <span>Jone doe</span>
                </div>
                <div className={styles.friend}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.L9TDz5qgN6cJxSnqK8XDGQHaHa&pid=Api&P=0&h=220"/>
                    <span>Jone doe</span>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar