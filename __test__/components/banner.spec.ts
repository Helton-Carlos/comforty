import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Banner from '~/components/banner.vue'

describe('Component Banner', () => {
  test('should test the component banner',  () => {
    const wrapper = mount(Banner);
      
    expect(wrapper).toBeDefined()
  })

  test('should test the text',  () => {
    const wrapper = mount(Banner);

    expect(wrapper.text()).toContain('FRETE GRÁTIS PARA TODO O BRASIL')
  })
})

