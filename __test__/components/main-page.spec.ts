import MainPage from '~/components/main-page.vue'
import { expect, describe, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component Header Page', () => {
  test('should test the component header page',  () => {
    const wrapper = mount(MainPage);
      
    expect(wrapper).toBeDefined();
  })
  
  test('should test the button decrement', () => {
    const wrapper = shallowMount(MainPage);

    const decrement = wrapper.find('[data-test="main-button-decrement"]');

    expect(decrement).toBeDefined();
  })

  test('should test the button increment', () => {
    const wrapper = shallowMount(MainPage);

    const decrement = wrapper.find('[data-test="main-button-increment"]');

    expect(decrement).toBeDefined();
  })
})

