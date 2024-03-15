import React from 'react'
import styles from './Content.module.css'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Feed from './Feed'

const Content = () => {
  return (
    <div className={styles.content}>
        <div className={styles.left}>
            <Sidebar/>
        </div>

        <div className={styles.feed}>
             <Feed/>
        </div>
        
        <div className={styles.right}>
          <Rightbar/>
        </div>
    </div>
  )
}

export default Content