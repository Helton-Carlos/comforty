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
  ];

  return {
    products
  }
}