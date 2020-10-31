import React from 'react'

const Cita = ({cita, eliminarCita}) => (
        <div className="alert alert-light">
            <p>Mascota: <span>{cita.mascota}</span> </p>
            <p>Propietario: <span>{cita.propietario}</span> </p>
            <p>Fecha: <span>{cita.fecha}</span> </p>
            <p>Hora: <span>{cita.hora}</span> </p>
            <p>Síntoma: <span>{cita.sintomas}</span> </p>
            <button 
            type="button" 
            className="btn btn-info"
            onClick = { () => eliminarCita(cita.id)}
            >Eliminar &times;</button>
        </div>
     );
export default Cita;