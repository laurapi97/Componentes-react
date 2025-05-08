
describe ('Pruebas en 06-deses-obj', () => { // se define el bloque de pruebas
    
        test('debemos de retornar un objeto', () => { // se define la prueba
            const persona = { // se define el objeto que se espera que retorne la funcion getUsuarioActivo
                nombre: 'Fernando',
                edad: 35,
                clave: 'Fernando123'
            };
            const { nombre, edad, clave } = persona; // se desestructura el objeto persona y se guarda en las variables nombre, edad y clave
            expect(nombre).toBe('Fernando'); // se compara el valor de la variable nombre con el valor esperado
            expect(edad).toBe(35); // se compara el valor de la variable edad con el valor esperado
            expect(clave).toBe('Fernando123'); // se compara el valor de la variable clave con el valor esperado
        });
    });
