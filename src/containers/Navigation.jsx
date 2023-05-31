import React from 'react'

// Componentes
import NavigationOptions from '../components/NavigationOptions.jsx'
import NavigationItems from '../components/NavigationItems.jsx'
import NavigationMobile from '../components/NavigationMobile.jsx'

// Estilos
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <>
      <header className='navigation-container'>
        <NavigationItems/>
        <NavigationOptions/>
        <NavigationMobile/>
      </header>
      <hr />
    </>
  )
}

export default Navigation