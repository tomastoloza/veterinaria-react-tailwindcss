import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import uuid from 'uuid/dist/v4';

const Formulario = ({crearTurno}) => {

// Crear state turnos

const [turno, actualizarTurno] = useState ({
    mascota: '',
    propietario: '',
    fecha:'',
    hora:'',
    sintomas:''
});

const [error, actualizarError] = useState (false);

// Leer los datos a medida que el usuario escribe

const handleChange = e => {
    actualizarTurno({
        ...turno,
        [e.target.name] : e.target.value
    }
    )
}

// Extraer los valores

const {mascota, propietario, fecha, hora, sintomas} = turno;

// Cuando se envía el formulario

const submitTurno = e => {
    e.preventDefault();

    // Validar

    if (mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === ""){
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
        fecha:'',
        hora:'',
        sintomas:'' 
    })
}


    return (
        <Fragment>
            <h2>Crear turno</h2>

            { error ? <p className="alerta-error"> Tenés que completar todos los campos </p> : null }

            <form
                onSubmit={submitTurno}
            >
                <label>Nombre mascota</label>
                <input 
                type="text"
                name="mascota"
                value={mascota}
                placeholder="Nombre de la mascota"
                className="form-control"
                onChange={handleChange}
                />
                <label>Nombre dueño</label>
                <input 
                type="text"
                name="propietario"
                value={propietario}
                placeholder="Nombre del dueño"
                className="form-control"
                onChange={handleChange}
                />
                <label>Fecha de alta</label>
                <input 
                type="date"
                name="fecha"
                value={fecha}
                className="form-control"
                onChange={handleChange}
                />
                <label>Hora de alta</label>
                <input 
                type="time"
                name="hora"
                value={hora}
                className="form-control"
                onChange={handleChange}
                />
                <label>Síntoma</label>
                <textarea 
                class="form-control" 
                aria-label="With textarea"
                name="sintomas"
                value={sintomas}
                onChange={handleChange}
                ></textarea>
                <br/>
                <button 
                type="submit" 
                className="btn btn-info btn-block">
                AGREGAR TURNO
                </button>
            </form>
        </Fragment> 
     );
}
 
export default Formulario;