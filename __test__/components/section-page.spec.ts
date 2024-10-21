import SectionPage from '~/components/section-page.vue'
import { expect, describe, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component Section Page', () => {
  test('should test the component section page', () => {
    const wrapper = mount(SectionPage);
      
    expect(wrapper).toBeDefined();
  })

  test('should test the component section page list', () => {
    const wrapper = mount(SectionPage);

    const list = wrapper.find('[data-test="service-list"]');
    
    expect(list.classes()).toBeTruthy(); 
  })

  test('should test the component section page list image dinamics', () => {
    const wrapper = mount(SectionPage);

    const image = wrapper.find('[data-test="section-company-image"]');
    
    expect(image).toBeTruthy(); 
  })
})

