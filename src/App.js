import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Turno from './components/Turno';


function App() {

// Turnos en local storage
    let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));
    if (!turnosIniciales) {
        turnosIniciales = [];
    }

// Array de turnos
    const [turnos, guardarTurnos] = useState(turnosIniciales);

// Usamos useEffect para activar cuando cambia el state de turnos
    useEffect(() => {
        let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));
        if (turnosIniciales) {
            localStorage.setItem('turnos', JSON.stringify(turnos))
        } else {
            localStorage.setItem('turnos', JSON.stringify([]));
        }
    }, [turnos]);

// Función que toma las turnos actuales y agrega los nuevos
// recordar los ... del ejercicio anterior.


    const crearTurno = turno => {
        guardarTurnos([...turnos, turno]);
    }

// Función que elimina las turnos según el id
// también es parecido al carrito de compras.

    const eliminarTurno = id => {
        const nuevasTurnos = turnos.filter(turno => turno.id !== id);
        guardarTurnos(nuevasTurnos);
    }

// Mensaje condicional
// recordar el ternario que reemplaza al "if"

    const titulo = turnos.length === 0 ? 'No hay turnos' : 'Listado de turnos';

    return (
        <Fragment>
            <h1 className={"font-bold text-xl"}>Veterinaria 420 Pa los Perros - Administrador de turnos</h1>
            <div className={"flex flex-shrink-0"}>
                <div className={"h-1/3 w-1/3 mx-auto px-4 my-4 bg-white rounded-lg shadow-lg"}>
                    <Formulario
                        crearTurno={crearTurno}
                    />
                </div>
                <div className={"w-1/3 mx-auto px-4 my-4 bg-white rounded-lg shadow-lg"}>
                    <h2 className={"font-bold text-black"}>{titulo}</h2><br/>
                    {turnos.map(turno => (
                        <Turno
                            key={turno.id}
                            turno={turno}
                            eliminarTurno={eliminarTurno}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    );
}

export default App;
