import './Listado.css'
import './Cita.css'

function Listado({ citas, eliminarCita }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <div className="cita" key={index}>
          <p>Mascota: <span>{cita.mascota}</span></p>
          <p>Dueño: <span>{cita.propietario}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Sintomas: <span>{cita.sintomas}</span></p>
          <button
            className="button eliminar u-full-width"
            onClick={() => {
              if (confirm('¿Estás seguro que quieres eliminar esta cita?')) {
                eliminarCita(index)
              }
            }}
          >
            Eliminar ×
          </button>
        </div>
      ))}

    </div>
  )
}

export default Listado;