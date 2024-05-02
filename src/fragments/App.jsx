import { useContext, useEffect, useState } from 'react'
//import './App.css'
import { MainContext } from '../main'

import Navegacion from './Navegacion'
import { Outlet } from 'react-router-dom'

function App() {

  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null)
  const [recarga, setRecarga] = useState(false)

  return (
    <>
      <Navegacion usuario={usuario} />
      <Outlet context={[usuario, setUsuario, error, setError,recarga, setRecarga]} />
    </>
  )
}

export default App
