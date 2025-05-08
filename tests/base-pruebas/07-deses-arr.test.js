import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'; // se importa la funcion a probar

describe('Pruebas en 07-deses-arr.js', () => {

    test('debe de retornar un arreglo', () => { // se define la prueba
        
        const [letters, numbers] = retornaArreglo();
        

        // expect(letters).toBe('ABC'); // se compara el valor esperado con el valor retornado por la funcion
        // expect(numbers).toBe(123); // se compara el valor esperado con el valor retornado por la funcion


        expect (typeof letters).toBe('string'); // se compara el tipo de dato esperado con el tipo de dato retornado por la funcion
        expect (typeof numbers).toBe('number'); // se compara el tipo de dato esperado con el tipo de dato retornado por la funcion
    
        expect (letters).toEqual(expect.any(String)); // se compara el valor esperado con el valor retornado por la funcion
        expect (numbers).toEqual(expect.any(Number)); // se compara el valor esperado con el valor retornado por la funcion
        // el expect.any() es un matcher de jest que permite comparar el tipo de dato esperado con el tipo de dato retornado por la funcion
    
    });


});