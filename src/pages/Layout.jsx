import React from 'react'

// Contenedores
import Navigation from '../containers/Navigation'

// Estilos
import '../styles/Global.css'
import '../styles/Mobile.css'

const Layout = ({ children }) => {
  return (
    <>
    <Navigation/>
    { children }
    </>
  )
}

export default Layout