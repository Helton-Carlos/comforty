import { defineStore } from 'pinia';
import type { ICart } from '~/types/types';

export const buyStore = defineStore('store-buy', {
  state: () => {
    return {
      cart: [],
      favorite: [],
      localCart: 'CM_CART',
      localFavorite: 'CM_FAVORITE'
    }
  },

  actions: {
    setLocalCart(cart: ICart ): void { 
      if(cart && !this.getLocalCart()) {
        const product = JSON.stringify(cart);

        localStorage.setItem(this.localCart, product);
      }
    },

    getLocalCart() {
      const local = localStorage?.getItem(this.localCart);

      if(local) return this.cart = JSON.parse(local);
    },

    async getProducts() {
      const { products } = await fetch('http://localhost:3000/api/v1/product').then((resp)=>{
        return resp.json();
      }).catch((err)=>{
        console.error(err);
      });

      return products;
    },

    async buyProduct(productID: number) {
      const products = await this.getProducts(); 
      
      if(products) {
        console.log(products);
        console.log(productID);
      };    
    },

    async favoriteProduct(productID: number) {
      const products = await this.getProducts(); 
      
      if(products) {
        console.log(products);
        console.log(productID);
      };
    }
  }
})