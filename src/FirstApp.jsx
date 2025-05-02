
import PropTypes from 'prop-types'; // proptypes es una libreria que nos permite validar los tipos de las propiedades que le pasamos a un componente


// alternativa al defaultProps, ya que defaultProps sera descontinuado en el futuro
export const FirstApp = ({ title ='No hay título', subTitle = 'No hay subtítulo', nombre ='No hay nombre'}) => {

    //    console.log(props);
    // <> es un fragmento de codigo que nos permite agrupar varios elementos sin necesidad de crear un div
        return (
            <>
                <h1>{title}</h1>   
                {/* <h1>{getResult()}</h1>  */}
                {/* <code>{ JSON.stringify(newMessage) }</code>  */}
                <p>{subTitle}</p>
                <p>{nombre}</p>
            </>
        )
    }


// proptypes es una libreria que nos permite validar los tipos de las propiedades que le pasamos a un componente
// PropTypes es un objeto que contiene los tipos de las propiedades que le pasamos a un componente
FirstApp.propTypes = {
   title: PropTypes.string,
   subTitle: PropTypes.string,
   nombre: PropTypes.string, // nombre es una propiedad que le pasamos al componente FirstApp
}  

// defaultProps sera descontinuado en el futuro, por lo que se recomienda usar proptypes para definir los tipos de las propiedades que le pasamos a un componente
// FirstApp.defaultProps = {
//     title: 'No hay titulo', // si no le pasamos un titulo, se le asignara este valor por defecto
//     subTitle: 'No hay subtitulo', // si no le pasamos un subtitulo, se le asignara este valor por defecto
// }


