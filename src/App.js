import React, { useState } from 'react';
import Pregunta from './components/Pregunta'

function App() {
  //state
  const [ presupuesto, guardarPresupuesto] = useState(0);
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto] = useState(true);


  return (
    <div className="App container">
      <header>
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido">
       { (preguntaPresupuesto)
        ?
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
          />
        : (
          <div className="row">
            <div className="one-half colum">
              <p>Formulario aqui</p>
            </div>
            <div className="one-half colum"></div>
          </div>
        )
        }
      </div>
      </header>
    </div>
  );
}

export default App;
