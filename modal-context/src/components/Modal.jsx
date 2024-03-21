import React,{useContext} from 'react'
import {AppContext} from '../Context'

const Modal = () => {
  const {ismodal,openModal,closeModal}=useContext(AppContext)
  return (
    <div className='modalcomp'>
       
       {ismodal?  <div className="modal">
             <span onClick={closeModal}>❌</span>
       </div>:<button onClick={openModal}>open modal</button>}
    </div>
  )
}

export default Modal