import FooterPage from '~/components/footer-page.vue'
import { expect, describe, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component Footer Page', () => {
  test('should test the component footer page',  () => {
    const wrapper = mount(FooterPage);
      
    expect(wrapper).toBeDefined();
  })
  
  test('should test router main', () => {
    const wrapper = shallowMount(FooterPage);

    const link = wrapper.find('[data-test="footer-link-main"]');

    expect(link.exists()).toBe(true);
    expect(link.attributes('to')).toBe('/');
  })

  test('should test the list', async () => {
    const wrapper = shallowMount(FooterPage);

    const list = wrapper.find('[data-test="footer-list"]');

    expect(list).toBeDefined();
  })

  test('should test the input', async () => {
    const wrapper = mount(FooterPage);

    const email = 'joe_john@gmail.com'

    const input = wrapper.find('input');
    
    await input.setValue(email);
    await wrapper.find('button').trigger('click')
    
    expect(input.element.value).toBe(email);
  })
})

