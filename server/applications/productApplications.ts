import { H3Event } from 'h3';
import type { IProduct } from '~/types/types';

export const getProduct = (event: H3Event) => {
  setResponseStatus(event, 200);

  const products: IProduct[] = [
    {
      id: 1,
      name: 'chair plastic',
      price: 99.99,
      beforePrice: null,
      categorie: 'novo',
      image: 'chairImage',
      type: 'plastic',
      unid: 1.127,
    },
    {
      id: 2,
      name: 'chair plastic orange',
      price: 299.99,
      beforePrice: 350.99,
      categorie: 'lançamento',
      image: 'chairPlastic',
      type: 'plastic',
      unid: 3.584,
    },
    {
      id: 3,
      name: 'chair plastic white',
      price: 2.99,
      beforePrice: 320.99,
      categorie: 'padrão',
      image: 'chairPlasticWhite',
      type: 'plastic',
      unid: 1.574,
    },
    {
      id: 4,
      name: 'chair wooder',
      price: 250.99,
      beforePrice: null,
      categorie: 'padrão',
      image: 'chairLibrary',
      type: 'plastic',
      unid: 3.512,
    },
    {
      id: 5,
      name: 'Chair Plastic White',
      price: 200.99,
      beforePrice: 320.99,
      categorie: 'comforto',
      image: 'chairPlasticWhite',
      type: 'plastic',
      unid: 1.574,
    },
    {
      id: 6,
      name: 'Chair Conforty',
      price: 299.99,
      beforePrice: null,
      categorie: 'novo',
      image: 'chairImage4',
      type: 'tissue',
      unid: 1.330,
    },
    {
      id: 7,
      name: 'Desk Chair',
      price: 299.99,
      beforePrice: null,
      categorie: 'comforto',
      image: 'chairImage3', 
      type: 'tissue',
      unid: 1.330,
    },
    {
      id: 8,
      name: 'Wing Chair',
      price: 299.99,
      beforePrice: null,
      categorie: 'novo',
      image: 'chairImage1',
      type: 'tissue',
      unid: 1.330,
    },
    {
      id: 9,
      name: 'Wooden Chair',
      price: 299.99,
      beforePrice: null,
      categorie: 'mais vendidos',
      image: 'chairImage2',
      type: 'old',
      unid: 1.330,
    },
    {
      id: 10,
      name: 'Chair Plastic',
      price: 99.99,
      beforePrice: null,
      categorie: 'novo',
      image: 'chairImage',
      type: 'old',
      unid: 1.330,
    },
  ];

  return {
    products
  }
}