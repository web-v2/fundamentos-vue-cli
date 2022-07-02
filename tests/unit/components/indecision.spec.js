import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision.vue';

describe('Indecision Component', () => {
    let wrapper;
    let clgSpy;
    beforeEach(() => {
        wrapper = shallowMount(Indecision);
        clgSpy = jest.spyOn(console, 'log')
    });
    test('Debe de hacer match con el snapshot', () => {        
        expect( wrapper.html() ).toMatchSnapshot();
    });
    test('Escribir en el input no debe disparar nada clg ', async() => {
        const input = wrapper.find('input');
        await input.setValue('Hello World');

        expect( clgSpy ).toHaveBeenCalledTimes(1);
        
    });
    test('Escribir el simbolo de "?" debe disparar el fetch ', () => {
        
    });
    test('Prueba el getAnswer ', () => {
        
    });
    test('Prueba en getAnswer - Fallo en el API', () => {
        
    });
});
