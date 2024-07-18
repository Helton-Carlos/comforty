import type { IProduct } from '~/types/types';

export default defineEventHandler (() => {
  const products: IProduct[] = [
    {
      name: 'chair plastic',
      price: 99.99,
      beforePrice: null,
      categorie: 'novo',
      image: '../../assets/product/Chair_image.png',
      unid: 1.127,
    },
    {
      name: 'chair plastic orange',
      price: 299.99,
      beforePrice: 350.99,
      categorie: 'lançamento',
      image: '../../assets/product/Chair_Plastic_orange.png',
      unid: 3.584,
    },
    {
      name: 'chair plastic white',
      price: 200.99,
      beforePrice: 320.99,
      categorie: 'padrao',
      image: '../../assets/product/Chair_Plastic_white.png',
      unid: 1.574,
    },
    {
      name: 'chair wooder',
      price: 250.99,
      beforePrice: null,
      categorie: 'padrao',
      image: '../../assets/product/Library_Stool_ Chair.png',
      unid: 3.512,
    },
  ];

  return {
    products
  }
})