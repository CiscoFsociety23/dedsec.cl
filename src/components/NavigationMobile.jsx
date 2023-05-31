import React from 'react'
import '../styles/NavigationMobile.css'

const NavigationMobile = () => {

  const showNav = () => {
    return document.querySelector('.nav-items-container').classList.toggle('show')
  }

  return (
    <>
    <p className='nav-mob-icon' onClick={showNav}><i className="fa-solid fa-ellipsis-vertical"></i></p>
    </>
  )
}

export default NavigationMobile