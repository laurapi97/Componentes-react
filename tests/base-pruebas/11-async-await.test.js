import { string } from 'prop-types';
import { getImagen } from '../../src/base-pruebas/11-async-await'; // se importa la función getImagen

describe ('Pruebas en 11-async-await', () => {

    test('getImagen debe de retornar un url de imagen', async() => { // se espera que la función retorne un url de imagen
            const url = await getImagen(); // se espera que la función retorne un url de imagen
           
            expect(typeof url).toBe('string'); // se espera que el tipo de dato sea un string
    });



    // para evaluar el catch de la función getImagen, se puede hacer de la siguiente manera:
    // test('getImagen debe de retornar un error si no se encuentra la imagen', async() => { // se espera que la función retorne un url de imagen
    //     const resp = await getImagen(); // se espera que la función retorne un url de imagen
    //     expect(resp).toBe('No se encontro la imagen'); // se espera que el tipo de dato sea un string
    // });
})      