import { H3Event } from 'h3';
import type { IProduct } from '~/types/types';

export const getProduct = (event: H3Event) => {
  setResponseStatus(event, 200);

  const products: IProduct[] = [
    {
      name: 'chair plastic',
      price: 99.99,
      beforePrice: null,
      categorie: 'novo',
      image: 'chairImage',
      unid: 1.127,
    },
    {
      name: 'chair plastic orange',
      price: 299.99,
      beforePrice: 350.99,
      categorie: 'lançamento',
      image: 'chairPlastic',
      unid: 3.584,
    },
    {
      name: 'chair plastic white',
      price: 200.99,
      beforePrice: 320.99,
      categorie: 'padrao',
      image: 'chairPlasticWhite',
      unid: 1.574,
    },
    {
      name: 'chair wooder',
      price: 250.99,
      beforePrice: null,
      categorie: 'padrao',
      image: 'chairLibrary',
      unid: 3.512,
    },
  ];

  return {
    products
  }
}