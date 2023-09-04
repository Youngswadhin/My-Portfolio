import React from 'react'
import '../StyleSheet/GoToTop.css'

import {FaArrowUp } from 'react-icons/fa'

const GoToTop = () => {
    const goToBtn = () =>{
        window.scrollTo({top:0, left:0, behavior:'smooth'})
    }

  return (
    <div className='top-btn' onClick={goToBtn}>
        <FaArrowUp className='top-btn--icon' />
    </div>
  )
}

export default GoToTop