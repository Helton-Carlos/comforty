import Modal from '~/components/modal.vue'
import { expect, describe, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component Modal', () => {
  test('should test the component modal',  () => {
    const wrapper = mount(Modal);
      
    expect(wrapper).toBeDefined();
  })

  test('should test the component modal props',  () => {
    const wrapper = mount(Modal, {
      props: {
        openModal: true
      }
    })
  
    expect(wrapper).toBeDefined();
  })
  
  test('should test the component modal slot', () => {
    const wrapper = mount(Modal, {
      props: {
        openModal: true
      },
      slots: {
        default: [
          '<div id="slot">Slot Info</div>',
        ]
      }
    })
  
    expect(wrapper.find('#slot').exists()).toBe(true);
    expect(wrapper.text()).toBe('Slot Info');
  })

  test('should test the component modal emit', async () => {
    const wrapper = mount(Modal, {
      props: {
        openModal: true,
        closed: true
      },
      slots: {
        default: [
          '<div id="slot">Slot Info</div>',
        ]
      }
    })

    const button = wrapper.find('[data-test="modal-close"]');

    await button.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('closedModal')
  })
})

