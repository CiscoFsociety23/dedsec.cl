import React from 'react'

// Contenedores
import Navigation from '../containers/Navigation'

// Estilos
import '../styles/Global.css'

const Layout = ({ children }) => {
  return (
    <>
    <Navigation/>
    { children }
    </>
  )
}

export default Layout