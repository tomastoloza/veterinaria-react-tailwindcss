import React from 'react'

const Turno = ({turno, eliminarTurno}) => (
    <tr className="bg-purple-100 border border-purple-500">
        <td className={"border border-purple-500 px-4"}><span>{turno.mascota}</span></td>
        <td className={"border border-purple-500 px-4"}><span>{turno.propietario}</span></td>
        <td className={"border border-purple-500 px-4"}><span>{turno.fecha}</span></td>
        <td className={"border border-purple-500 px-4"}><span>{turno.hora}</span></td>
        <td className={"border border-purple-500 px-4"}><span>{turno.sintomas}</span></td>
        <button
            type="button"
            className={"m-4 border border-red-500 hover:bg-red-200 text-red-500 font-bold px-2 rounded-full focus:outline-none focus:shadow-outline"}
            onClick={() => eliminarTurno(turno.id)}>&times;</button>
    </tr>
);
export default Turno;