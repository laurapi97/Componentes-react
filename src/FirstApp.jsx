import {Fragment} from 'react';


// export const FirstApp = () => {
//     return (
//         // EL Fragment es un contenedor que no se renderiza en el DOM
//         // Se utiliza para agrupar varios elementos sin añadir un nodo extra al DOM
//         // En este caso, se utiliza para agrupar el h1 y el p
//         // El Fragment se puede usar de dos maneras: <Fragment> o <></>
//         // En vez del div, se puede usar un Fragment para evitar añadir un nodo extra al DOM
//         // Se ve como <div id="root"></div> en el DOM, pero no se ve en el HTML
//        <Fragment>
//         <h1>Fiona</h1>
//         <p>Soy una gatita gris</p>
//         </Fragment>
//     );
// }



//  Fragment es un componente de React que permite agrupar varios elementos sin añadir un nodo extra al DOM
// <> es una forma abreviada de usar Fragment, y se utiliza para agrupar varios elementos sin añadir un nodo extra al DOM
// En este caso, se utiliza para agrupar el h1 y el p
export const FirstApp = () => {
    return (
        <>
            <h1>Fiona</h1>   
            <p>Soy una gatita gris</p>
        </>
    );
}