import React from 'react'   
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
// import App from './HelloWorldApp.jsx' // Importamos el componente App'
// Importamos el componente HelloWorldApp

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <HelloWorldApp />  
//     </React.StrictMode>
// )


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp />  
    </React.StrictMode>
)