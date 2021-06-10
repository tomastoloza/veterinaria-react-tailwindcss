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
            <div className={"flex flex-wrap"}>
                <div className={"h-1/3 w-1/3 mx-auto px-4 my-4 bg-gray-100 rounded-lg shadow-lg min-w-min"}>
                    <Formulario
                        crearTurno={crearTurno}
                    />
                </div>
                <div className={"w-1/2 mx-auto px-4 my-4 bg-gray-100 rounded-lg shadow-lg min-w-min"}>
                    <h2 className={"font-bold text-black"}>{titulo}</h2><br/>
                    {turnos.length > 0 ? <table className={"table-auto text-left rounded-lg mx-auto"}>
                        <thead>
                            <tr className={"text-purple-500"}>
                                <th className={"px-2"}>Mascota</th>
                                <th className={"px-2"}>Propietario</th>
                                <th className={"px-2 w-1/6"}>Fecha</th>
                                <th className={"px-2"}>Hora</th>
                                <th className={"px-2"}>Sintomas</th>
                            </tr>
                        </thead>
                        <tbody className={""}>
                        {turnos.map(turno => (
                            <Turno
                                key={turno.id}
                                turno={turno}
                                eliminarTurno={eliminarTurno}
                            />
                        ))}
                        </tbody>
                    </table> : null}
                </div>
            </div>
        </Fragment>
    );
}

export default App;
