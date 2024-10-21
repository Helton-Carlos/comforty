import MenuPage from '~/components/menu-page.vue'
import { expect, describe, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component Menu Page', () => {
  test('should test the component menu page',  () => {
    const wrapper = mount(MenuPage);
      
    expect(wrapper).toBeDefined();
  })

  test('should test the list menu', () => {
    const wrapper = mount(MenuPage);

    const list = wrapper.find('[data-test="menu-list"]');
    
    expect(list).toBeDefined();
  })

  test('should test the list menu', () => {
    const wrapper = shallowMount(MenuPage);

    const list = wrapper.find('[data-test="menu-list"]');

    expect(list.exists()).toBe(true);
    expect(list.attributes('to')).toBe('/');
  })
})

