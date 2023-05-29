import React from 'react'

// Componentes
import NavigationOptions from '../components/NavigationOptions.jsx'
import NavigationItems from '../components/NavigationItems.jsx'

// Estilos
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    <>
      <header className='navigation-container'>
        <NavigationItems/>
        <NavigationOptions/>
      </header>
      <hr />
    </>
  )
}

export default Navigation