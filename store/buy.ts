import { defineStore } from 'pinia';
import { userAuth } from './auth';
import type { ICart } from '~/types/types';

export const buyStore = defineStore('store-buy', {
  state: () => {
    return {
      cart: [],
      favorite: [],
      localCart: 'CM_CART',
      localFavorite: 'CM_FAVORITE',
      modalBuy: false,
      modalAuth: false,
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

    async addCart(productID: number) {
      const products = await this.getProducts(); 
      const { getLocalUser } = userAuth();

      if(getLocalUser()) {
        if(products) { 
          this.buyProduct(productID);
          
          this.modalBuy = false;
        };
      } else {
        this.modalBuy = false;
        this.modalAuth = true;  
      }
    },

    async buyProduct(productID: number) {
      const { getLocalUser } = userAuth();

      if(getLocalUser()) {
        if(productID) {
          console.log(productID);
        };
      } else { 
        this.modalAuth = true;   
      }
    },

    async favoriteProduct(productID: number) {
      const products = await this.getProducts(); 
      const { getLocalUser } = userAuth();

      if(getLocalUser()) {
        if(products) {
          console.log(products);
          console.log(productID);
        };
      } else { 
        this.modalAuth = true;   
      }
    }
  }
})