import React from 'react'

const Turno = ({turno, eliminarTurno}) => (
    <div className="w-1/3 px-4 py-4 border rounded-lg shadow-lg mx-4 my-4 flex flex-wrap min-w-min">
        <p className={"py-2"}>Mascota: <span>{turno.mascota}</span></p>
        <p className={"py-2"}>Propietario: <span>{turno.propietario}</span></p>
        <p className={"py-2"}>Fecha: <span>{turno.fecha}</span></p>
        <p className={"py-2"}>Hora: <span>{turno.hora}</span></p>
        <p className={"py-2"}>Síntoma: <span>{turno.sintomas}</span></p>
        <button
            type="button"
            className={"place-self-center border border-red-500 hover:bg-red-200 text-red-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
            onClick={() => eliminarTurno(turno.id)}>Eliminar &times;</button>
    </div>
);
export default Turno;