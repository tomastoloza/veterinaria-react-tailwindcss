import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';


const Formulario = ({crearTurno}) => {

// Creamos el state turnos
// Recordar que es [nombre, función que lo modifica]
// Inicializamos con un objeto vacío pero definido

    const [turno, actualizarTurno] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

// Creamos el state error
// para validar las entradas del formulario

    const [error, actualizarError] = useState(false);

// Esta handleChange (se acostumbra a poner así, handleLoquevenga) es para
// leer los datos a medida que el usuario escribe
// en lo campos del form. Así vamos validando en tiempo real

    const handleChange = e => {
        actualizarTurno({
                ...turno,
                [e.target.name]: e.target.value
            }
        )
    }

// Extraer los valores

    const {mascota, propietario, fecha, hora, sintomas} = turno;

// Cuando se envía el formulario se juega todo esto.

    const submitTurno = e => {
        e.preventDefault();
        // Esta prevent es para que no tire error porque al pcipio. están los campos vacíos.

        // Validar

        if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
            console.log("Tenés que completar todos los campos");
            actualizarError(true);
            return;
        }

        // Eliminar mensaje error
        actualizarError(false);

        // Asignar ID
        turno.id = uuid();

        // Crear Turno
        crearTurno(turno);

        // Reiniciar el form
        actualizarTurno({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }


    return (
        <Fragment>
            <h2 className={"font-bold text-black"}>Crear turno</h2>

            {error ? <p className="text-red-700 px-4 py-3"> Tenés que completar todos los campos </p> : null}

            <div className={"container rounded px-2"}>
                <form onSubmit={submitTurno} className={""}>
                    <div className={"mb-4 px-2"}>
                        <label>Nombre mascota</label>
                        <input
                            type="text"
                            name="mascota"
                            value={mascota}
                            placeholder="Nombre de la mascota"
                            className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={"mb-4 px-2"}>
                        <label>Nombre dueño</label>
                        <input
                            type="text"
                            name="propietario"
                            value={propietario}
                            placeholder="Nombre del dueño"
                            className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={"mb-4 px-2"}>
                        <label>Fecha de la consulta</label>
                        <input
                            type="date"
                            name="fecha"
                            value={fecha}
                            className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={"mb-4 px-2"}>
                        <label>Hora de la consulta</label>
                        <input
                            type="time"
                            name="hora"
                            value={hora}
                            className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={"mb-4 px-2"}>
                        <label>Síntoma</label>
                        <textarea
                            className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"}
                            aria-label="With textarea"
                            name="sintomas"
                            value={sintomas}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={"mb-4 px-2"}>
                        <button
                            type="submit"
                            className={"bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}>
                            AGREGAR TURNO
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}

export default Formulario;