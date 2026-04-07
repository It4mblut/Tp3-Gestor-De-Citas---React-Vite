import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './Formulario.jsx'
import Listado from './Listado.jsx'

function App() {

  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {setCitas([...citas, cita])};

  const eliminarCita = (index) => {
    setCitas(citas.filter((_, i) => i !== index));
  };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">

          <Formulario agregarCita={agregarCita} />
          <Listado citas={citas} eliminarCita={eliminarCita} />

        </div>
      </div>
    </>
  )
}

export default App