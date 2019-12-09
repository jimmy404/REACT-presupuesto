import React, { Fragment, useState } from 'react';

function Pregunta(props) {
        const {guardarPresupuesto, guardarPreguntaPresupuesto} = props;
        //definir state
        const [ cantidad, guardarCantidad] = useState(0);
        const [ error, guardarError] = useState(false);

        //validar presupuesto
        const agregarPresupuesto = e => {
            e.preventDefault();

            //validar
            if(cantidad < 1 || isNaN( cantidad)){
                guardarError(true);
                return;
            }

            //Si se pasa la validacion
            guardarError(false);
            guardarPresupuesto(cantidad);
            guardarPreguntaPresupuesto(false);
        }
    return(
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>

            {error ? <p className="alert alert-danger error">El presupuesto es Incorrecto</p> : null}

            <form
            onSubmit={agregarPresupuesto}
            >
                <input type="number"
                    className="u-full-with"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => guardarCantidad( parseInt(e.target.value) )}
                />
                <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
            </form>
        </Fragment>
    );
}

export default Pregunta;