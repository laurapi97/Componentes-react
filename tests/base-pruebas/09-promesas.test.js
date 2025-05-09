import {getHeroeByIdAsync} from '../../src/base-pruebas/09-promesas'


describe('Pruebas en 09-promesas',()=>{

    test('getHeroeByIdAsync debe de retornar un héroe', (done)=>{ // el done es una función que se ejecuta cuando la promesa se resuelve
        

       const id =1;

       getHeroeByIdAsync(id)
       .then(hero=>{

            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC Comics'
            }) // se espera que el héroe sea igual al objeto que se pasa como argumento
           
        done(); // se ejecuta cuando la promesa se resuelve

        

       });



    });



    test('getHeroeByIdAsync debe obteer un error si heroe no existe', (done)=>{ // el done es una función que se ejecuta cuando la promesa se resuelve
        

        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero=>{ // en caso de que la promesa se resuelva, se ejecuta el then (si el id fuera correcto)

            expect(hero).toBeFalsy();// se espera que el héroe sea igual al objeto que se pasa como argumento
            done();

        })
            .catch(error=>{

                expect(error).toBe('No se pudo encontrar el héroe con el id:' + id) // se espera que el error sea igual al objeto que se pasa como argumento
                
                done();
        });

    });
 
 

});