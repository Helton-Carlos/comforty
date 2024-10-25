import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import User from '~/pages/user.vue'

describe('Component User', () => {
  test('should test the component User',  () => {
    const wrapper = mount(User);
      
    expect(wrapper).toBeDefined()
  })

  test('should test the input', async () => {
    const wrapper = mount(User);

    const textEmail = 'joe_john@gmail.com';
    const textPassword = '123123';

    const inputEmail = wrapper.find('input[type="email"]');
    await inputEmail.setValue(textEmail);

    const inputPassword = wrapper.find('input[type="password"]'); 
    await inputPassword.setValue(textPassword);

    const button = wrapper.find('user-submit')
    await button.trigger('click');

    const message = await wrapper.get('[data-test="user-message"]');
    expect(message).toBeDefined()
    
    // expect(inputEmail.element.value).toBe(textEmail);
    // expect(inputPassword.element.value).toBe(textPassword);
  })

  // test('should test components products', () => {
  //   const wrapper = mount(User);

  //   const product = wrapper.get('[data-test="User-products"]');

  //   expect(product).toBeDefined();
  // })

  // test('should test buton select categories', async () => {
  //   const wrapper = mount(User);

  //   const btn = wrapper.get('[data-test="User-button-categories"]');
  //   const categories = wrapper.get('[data-test="User-categories"]');

  //   await btn.trigger('click')

  //   expect(categories.text()).toBe('novo');
  // })
})

