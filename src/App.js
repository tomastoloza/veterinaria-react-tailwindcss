import React, {Fragment, useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Formulario from './components/Formulario';
import Cita from './components/Cita';


function App() {

// Citas en local storage
let citasIniciales = JSON.parse(localStorage.getItem("citas"));
if (!citasIniciales) {
  citasIniciales = [];
}

// Array de citas
const [citas, guardarCitas] = useState(citasIniciales);

// Usar useEffect para activar cuando cambia el state de citas
useEffect ( () => {
let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (citasIniciales) {
    localStorage.setItem('citas', JSON.stringify(citas))
  }else{
    localStorage.setItem('citas', JSON.stringify([]));
  }
}, [citas]);

// Función que toma las citas actuales y agrega la nueva
const crearCita = cita => {
  guardarCitas([...citas, cita]);
}

// Función que elimina las citas según id
const eliminarCita = id => {
  const nuevasCitas = citas.filter(cita => cita.id !== id);
  guardarCitas (nuevasCitas);
}

// Mensaje condicional
const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
        <h1>Administrador de Pacientes</h1>
        <Container>
          <Row>
            <Col>
              <Formulario
              crearCita = {crearCita}
              />
            </Col>
            <Col>
            <h2>{titulo}</h2><br />
            {citas.map(cita => (
              <Cita 
                key = {cita.id}
                cita = {cita}
                eliminarCita = {eliminarCita}
              />
            ))}
            </Col>
          </Row>
        </Container>
    </Fragment>
  );
}

export default App;
