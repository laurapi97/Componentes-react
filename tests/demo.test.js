


// Agrupador de pruebas
describe ('Pruebas en <DemoComponent />', () => { 
    // Agrupador de pruebas
    test('Esta primera prueba no debe de fallar', () => {
     
    //1. Inicialización
    const message1 = 'Hola Mundo';
    //2. Estímulo
    const message2 = message1.trim();
    //3. Observar el comportamiento... el esperado
    expect(message1).toBe(message2); // expect es una función de Jest que permite hacer aserciones sobre el resultado de una función o expresión. toBe es un matcher que compara el valor esperado con el valor real.
    

    //4. Observar el comportamiento... el real 
    
    }); 

});