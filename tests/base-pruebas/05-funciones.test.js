
import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => {


    test('getUser debe retornar un objeto', () => {


        // el testUser es el objeto que se espera que retorne la funcion getUser
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };


        // se llama a la funcion getUser y se guarda en user
        const user = getUser();
        // console.log(user);
        expect(testUser).toEqual(user); // se compara el objeto esperado con el objeto retornado por la funcion getUser

        
    });


    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Laura'; // se define el nombre que se le pasara a la funcion getUsuarioActivo

        const user = getUsuarioActivo(name); // se llama a la funcion getUsuarioActivo y se guarda en user


        expect(user).toEqual({ // se define el objeto que se espera que retorne la funcion getUsuarioActivo
            uid: 'ABC567',
            username: name
        }); // se compara el objeto esperado con el objeto retornado por la funcion getUsuarioActivo
    })
     
           
});


