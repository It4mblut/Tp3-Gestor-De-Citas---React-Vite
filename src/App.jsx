import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <title>Administración de Pacientes</title>
    <Formulario/>
    <Listado/>
    </>
  )
}

export default App