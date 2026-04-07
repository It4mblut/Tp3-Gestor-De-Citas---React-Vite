import { useState } from 'react'
import './Formulario.css'

function Formulario({ agregarCita }){
    const [mascota, setMascota] = useState("")
    const [propietario, setPropietario] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const cita = {
            mascota,
            propietario,
            fecha,
            hora,
            sintomas
        }
        agregarCita(cita)
        setMascota("")
        setPropietario("")
        setFecha("")
        setHora("")
        setSintomas("")
    }

    return(
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit={handleSubmit}>
                <label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={(e) => setMascota(e.target.value)} />

                <label>Nombre Dueño</label>
                <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={propietario} onChange={(e) => setPropietario(e.target.value)} />

                <label>Fecha</label>
                <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={(e) => setFecha(e.target.value)} />

                <label>Hora</label>
                <input type="time" name="hora" className="u-full-width" value={hora} onChange={(e) => setHora(e.target.value)} />

                <label>Sintomas</label>
                <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />

                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )
}

export default Formulario
