import Products from '~/components/products.vue'
import { expect, describe, test } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'

describe('Component Products', () => {
  const mockProducts = [
    {
      id: 1,
      name: 'Chair Plastic',
      price: 99.99,
      beforePrice: null,
      categorie: 'novo',
      image: 'chairImage',
      type: 'Plastic',
      unid: 1.127,
    },
    {
      id: 2,
      name: 'Table Wood',
      price: 199.99,
      beforePrice: 249.99,
      categorie: 'novo',
      image: 'tableImage',
      type: 'Wood',
      unid: 2.5,
    },
  ];

  test('should test the component products', () => {
    const wrapper = mount(Products);
      
    expect(wrapper).toBeDefined();
  })

  test('should test the component products list props', () => {
    const wrapper = mount(Products, {
      props: {
        listProduct: mockProducts,
      },
    });

    expect(wrapper.text()).toContain('Chair Plastic');
    expect(wrapper.text()).toContain('Table Wood');
  })    

  test('should test the component products list', () => {
    const wrapper = mount(Products, {
      props: {
        listProduct: mockProducts,
      },
    });

    const list = wrapper.find('[data-test="products-list-categories"]');
    
    expect(list.text()).toContain('novo');
    expect(list.classes()).toBeTruthy(); 
  })
})

