import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({ value  }) => {


    const [counter, setCounter]= useState( value ); // useState es un hook que nos permite manejar el estado de un componente, en este caso el valor inicial es 0, pero podemos cambiarlo con el setCounter
    // el useState llama al value que le pasamos como prop, en este caso 20 (desde el padre), y lo asigna a la variable counter, y setCounter es una funcion que se ejecuta cuando se hace click en el boton, en este caso le estamos sumando 1 al valor actual del counter
    const handleAdd= ()=>{// handleAdd es una funcion que se ejecuta cuando se hace click en el boton, en este caso le estamos sumando 1 al valor actual del counter
        setCounter((c)=>c+1 )  // setCounter es una funcion callback que se ejecuta cuando se hace click en el boton, en este caso le estamos sumando 1 al valor actual del counter, c es el valor actual del counter
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button className="hoverButton" onClick={ handleAdd}>
            +1      
            </button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired, // value es una propiedad que le pasamos al componente CounterApp
}

export const value = 0; // valor por defecto de la propiedad value, si no le pasamos un valor, se le asignara este valor por defecto