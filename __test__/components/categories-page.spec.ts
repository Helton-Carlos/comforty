import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import CategoriesPage from '~/components/categories-page.vue'

describe('Component Categories Page', () => {

  test('should test the component categories page',  () => {
    const wrapper = mount(CategoriesPage);
      
    expect(wrapper).toBeDefined()
  })
  
  test('should test the text', () => {
    const wrapper = mount(CategoriesPage);

    expect(wrapper.text()).toContain('Top 5 categorias')
  })
})

