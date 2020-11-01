import React from 'react'

const Turno = ({turno, eliminarTurno}) => (
        <div className="alert alert-light">
            <p>Mascota: <span>{turno.mascota}</span> </p>
            <p>Propietario: <span>{turno.propietario}</span> </p>
            <p>Fecha: <span>{turno.fecha}</span> </p>
            <p>Hora: <span>{turno.hora}</span> </p>
            <p>Síntoma: <span>{turno.sintomas}</span> </p>
            <button 
            type="button" 
            className="btn btn-info"
            onClick = { () => eliminarTurno(turno.id)}
            >Eliminar &times;</button>
        </div>
     );
export default Turno;