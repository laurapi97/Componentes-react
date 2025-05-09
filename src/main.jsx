import React from 'react'   
import ReactDOM from 'react-dom/client'
// import { HelloWorldApp } from './HelloWorldApp'
// import { FirstApp } from './FirstApp'
import './styles.css'
import { CounterApp } from './CounterApp'
// import App from './HelloWorldApp.jsx' // Importamos el componente App'
// Importamos el componente HelloWorldApp

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp />  
//     </React.StrictMode>
// )

// el root es el id del div que se encuentra en el index.html
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* Padre */}
        {/* <FirstApp title ="Hola soy Fiona" nombre ="Fionita la mas hermosa"/>    */}
        {/* <FirstApp /> */}
        <CounterApp value ={10} />
        
    </React.StrictMode>
)