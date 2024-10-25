import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Index from '~/pages/index.vue'

describe('Component Index', () => {
  test('should test the component index',  () => {
    const wrapper = mount(Index);
      
    expect(wrapper).toBeDefined()
  })

  test('should test the text', () => {
    const wrapper = mount(Index);

    expect(wrapper.text()).toContain('Nossos Produtos');
    expect(wrapper.text()).toContain('Todos Produtos');
    expect(wrapper.text()).toContain('Novidades da loja');
  })

  test('should test components products', () => {
    const wrapper = mount(Index);

    const product = wrapper.get('[data-test="index-products"]');

    expect(product).toBeDefined();
  })

  test('should test buton select categories', async () => {
    const wrapper = mount(Index);

    const btn = wrapper.get('[data-test="index-button-categories"]');
    const categories = wrapper.get('[data-test="index-categories"]');

    await btn.trigger('click')

    expect(categories.text()).toBe('novo');
  })
})

