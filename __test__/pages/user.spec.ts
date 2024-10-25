import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'
import User from '~/pages/user.vue'

describe('Component User', () => {
  test('should test the component User',  () => {
    const wrapper = mount(User);
      
    expect(wrapper).toBeDefined()
  })
})

