import React from 'react'

// Estilos
import '../styles/NavigationOptions.css'

const NavigationItems = () => {
  return (
    <nav className='nav-items-container'>
        <ul>
            <li><a href="/"><i className="fa-solid fa-house"></i> Home</a></li>
            <li><a href="/"><i className="fa-solid fa-globe"></i> Admin Panel</a></li>
        </ul>
    </nav>
  )
}

export default NavigationItems