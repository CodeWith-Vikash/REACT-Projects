import React from 'react'
import styles from './Textbox.module.css'

const Textbox = ({text,type}) => {
  return (
    <div>
        <div className={styles.inputBox}>
            <input type="text" className='border-2 border-black outline-none px-4 py-1 mb-4 w-[300px]' required/>
            <b className={styles.text}>Name</b>
        </div>
        <div className={styles.inputBox}>
            <input type="email" className='border-2 border-black outline-none px-4 py-1 mb-4 w-[300px]' required/>
            <b className={styles.text}>Email</b>
        </div>
        <div className={styles.inputBox}>
            <textarea className='border-2 border-black outline-none px-4 py-1 mb-4' rows={3} cols={34}/>
            <b className={styles.text}>Message</b>
        </div>
    </div>
  )
}

export default Textbox