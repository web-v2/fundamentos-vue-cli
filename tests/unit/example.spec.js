
describe('Example Component', ()=>{
  test('Debe ser mayor a 10', () =>{
    //Arreglar
    let value = 9;
    //Estimulo
    value = value + 2;
    //Verificar el resultado
    expect(value).toBeGreaterThan(10);
  });
});