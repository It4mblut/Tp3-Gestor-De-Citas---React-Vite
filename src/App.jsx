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
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      </div>
      <div class="container"></div>


    <div class="row">
      
        <div class="one-half column">
          <Formulario/>
        </div>

        <div class="one-half column">
         <Listado/>
        </div>
        
    </div>
    </>
  )
}

export default App