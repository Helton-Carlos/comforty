import { defineStore } from 'pinia';
import type { IUser, ILogin } from '~/types/types'

export const userAuth = defineStore('store-user', {
  state: () => {
    return {
      user: null as IUser | null,
      localUser: 'CM_USER'
    }
  },

  actions: {
    setLocalUser(data: ILogin | any): void { 
      if(data && !this.getLocalUser()) {
        const client = JSON.stringify(data);

        localStorage.setItem(this.localUser, client);
      }
    },

    getLocalUser() {
      const local = localStorage?.getItem(this.localUser);

      if(local) return this.user = JSON.parse(local);
    }
  }
})