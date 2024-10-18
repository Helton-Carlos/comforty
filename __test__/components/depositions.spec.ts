import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Depositions from '~/components/depositions.vue'

describe('Component Depositions', () => {
  test('should test the component depositions',  () => {
    const wrapper = mount(Depositions);
      
    expect(wrapper).toBeDefined()
  })
  
  test('should test the text', () => {
    const wrapper = mount(Depositions);
    
    expect(wrapper.text()).toContain('Depoimentos dos nossos clientes')
  })

  test('should test the list', () => {
    const wrapper = mount(Depositions);

    const list = wrapper.get('[data-test="list-depositions"]');

    expect(list).toBeDefined();
  })

  test('should test the list depositions', () => {
    const wrapper = mount(Depositions);

    const list = wrapper.get('[data-test="list-depositions"]');

    expect(list).toBeDefined();
  })

  test('should test the list image', () => {
    const wrapper = mount(Depositions);

    const image = wrapper.get('[data-test="list-image"]');

    expect(image).toBeDefined()
  })
})

