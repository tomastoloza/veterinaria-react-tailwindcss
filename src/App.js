import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
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

// Usar useEffect para activar cuando cambia el state de turnos
useEffect ( () => {
let turnosIniciales = JSON.parse(localStorage.getItem("turnos"));
  if (turnosIniciales) {
    localStorage.setItem('turnos', JSON.stringify(turnos))
  }else{
    localStorage.setItem('turnos', JSON.stringify([]));
  }
}, [turnos]);

// Función que toma las turnos actuales y agrega los nuevos
const crearTurno = turno => {
  guardarTurnos([...turnos, turno]);
}

// Función que elimina las turnos según id
const eliminarTurno = id => {
  const nuevasTurnos = turnos.filter(turno => turno.id !== id);
  guardarTurnos (nuevasTurnos);
}

// Mensaje condicional
const titulo = turnos.length === 0 ? 'No hay turnos' : 'Listado de turnos';

  return (
    <Fragment>
        <h1>Veterinaria Pet Shop Boys - Administrador de turnos</h1>
        <Container>
          <Row>
            <Col>
              <Formulario
              crearTurno = {crearTurno}
              />
            </Col>
            <Col>
            <h2>{titulo}</h2><br />
            {turnos.map(turno => (
              <Turno 
                key = {turno.id}
                turno = {turno}
                eliminarTurno = {eliminarTurno}
              />
            ))}
            </Col>
          </Row>
        </Container>
    </Fragment>
  );
}

export default App;
