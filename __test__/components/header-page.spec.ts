import HeaderPage from '~/components/header-page.vue'
import { expect, describe, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component Header Page', () => {
  test('should test the component header page',  () => {
    const wrapper = mount(HeaderPage);
      
    expect(wrapper).toBeDefined();
  })
  
  test('should test router main', () => {
    const wrapper = shallowMount(HeaderPage);

    const link = wrapper.find('[data-test="header-link-main"]');

    expect(link.attributes('to')).toBe('/');
  })

  test('should test router user', () => {
    const wrapper = shallowMount(HeaderPage);

    const link = wrapper.find('[data-test="header-link-user"]');

    expect(link.attributes('to')).toBe('/user');
  })

  test('should test the list', async () => {
    const wrapper = shallowMount(HeaderPage);

    const list = wrapper.find('[data-test="header-list"]');

    expect(list).toBeDefined();
  })

  test('should test the input', async () => {
    const wrapper = mount(HeaderPage);

    const search = 'cadeira de madeira'

    const input = wrapper.find('input');
    
    await input.setValue(search);
    
    expect(input.element.value).toBe(search);
  })

  test('should test the open cart', async () => {
    const wrapper = mount(HeaderPage);
    
    const button = wrapper.find('[data-test="header-button-cart"]');

    await button.trigger('click')

    const cart = wrapper.find('[data-test="header-list-cart"]');

    expect(cart).toBeDefined();
  })
})

