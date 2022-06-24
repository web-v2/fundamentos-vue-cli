import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter Componente', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });
    test('Debe de hacer match con el snapshot', () => {        
        expect( wrapper.html() ).toMatchSnapshot();
    });
    test('H2 debe tener valor por defecto "Counter"', () => {        
        expect( wrapper.find('h2').exists() ).toBe(true);
        const h2Value = wrapper.find('h2').text();
        //console.log(h2.text());
        expect( h2Value ).toBe('Counter');
    });
    test('El valor por defecto debe ser 100 en p', () => {        
        const pTag = wrapper.find('[data-test-id="counter"]').text();
        expect( pTag ).toBe('100');
    });
    test('Debe de incrementar y decrementar el contador ', async() => {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');                
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const pTag = wrapper.find('[data-test-id="counter"]').text();
        expect( pTag ).toBe('101');
    });    
    test('Debe de establecer el valor por defecto ', () => {
        const {start} = wrapper.props();
        const valor = wrapper.find('[data-test-id="counter"]').text();
        expect( Number(valor) ).toBe(start);
    });
    test('Debe de mostrar la prop title', () => {
        const title = 'Hello World';
        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        });
        expect( wrapper.find('h2').text() ).toBe(title);
    });
});