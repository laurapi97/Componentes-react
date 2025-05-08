import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';


describe ('Pruebas en el archivo 08-imp-exp.js', () => {


    test ('getHeroeById debe retornar un héroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        // const heroeData = heroes.find( (heroe) => heroe.id === id ); // Buscamos el héroe por ID en el array de héroes
        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC Comics'}); // Comparamos el héroe obtenido con el héroe esperado
        // expect(heroe).toEqual(heroeData); // Comparamos el héroe obtenido con el héroe esperado
    });

    test ('getHeroeById debe retornar undefined si no existe el ID', ()=>{
        const id =100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();
    });


    test('getHeroeById debe retornar un arreglo con los heroes de DC',()=>{

        const owner = 'DC Comics';
        const heroes = getHeroesByOwner(owner);
       
        expect (heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter((heroe)=> heroe.owner ===owner))

    });



    test('getHeroeById debe retornar un arreglo con los heroes de Marvel',()=>{

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
       
        expect (heroes.length).toBe(2);
        // expect(heroes).toEqual([
            // {
            //     id: 2,
            //     name: 'Spiderman',
            //     owner: 'Marvel'
            // },
            // {
            //     id: 5,
            //     name: 'Wolverine',
            //     owner: 'Marvel'
            // },
    
        // ])

        expect(heroes).toEqual(heroes.filter((heroe)=> heroe.owner ===owner)) // forma de hacerlo mas corto y eficiente en caso de que se añadiera un nuevo heroe
    });

    // test('getHeroeById debe retornar un arreglo con los heroes de Marvel',()=>{

        // const heroes = [
        //     { id: 1, name: 'Batman', owner: 'DC Comics' },
        //     { id: 2, name: 'Superman', owner: 'DC Comics' },
        //     { id: 3, name: 'Flash', owner: 'DC Comics' },
        //     { id: 4, name: 'Spider-Man', owner: 'Marvel' },
        //     { id: 5, name: 'Wolverine', owner: 'Marvel' },
        // ];

        // const marvelHeroes = heroes.filter(hero => hero.owner === 'Marvel');

        // expect(marvelHeroes.length).toBe(2);
        
        // expect(marvelHeroes).toEqual([
        //     { id: 4, name: 'Spider-Man', owner: 'Marvel' },
        //     { id: 5, name: 'Wolverine', owner: 'Marvel' }
        // ])

    // });

    //tarea
    //getHeroesByOwner
    // Debe retornar un arreglo con los heroes de DC
    // Length ===3
    //toEqual al arreglo filtrado

    // otro con los heroes de marvel

});