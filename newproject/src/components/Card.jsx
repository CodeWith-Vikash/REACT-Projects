import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,refrence}) => {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative h-[230px] w-[190px] bg-zinc-900 rounded-xl text-white px-5 pt-10  overflow-hidden'>
      <IoDocumentText/>
      <p className='mt-5 leading-none'>{data.desc}</p>
      <div className="footer absolute bottom-0 left-0">
        <div className='flex justify-between items-center px-5 py-4'>
          <span>{data.filesize}</span>
          <span>{data.close ? <IoCloseSharp/> : <MdDownloadForOffline/>}</span>
        </div>

        {data.tagDetails.isopen ?(
           <div className={`tag ${data.tagDetails.color=="blue" ?'bg-blue-600' : 'bg-green-600'} h-[40px] w-[200px] flex justify-center items-center`}>{data.tagDetails.tagtitle}</div>
        ):null}
      </div>
    </motion.div>
  )
}

export default Card