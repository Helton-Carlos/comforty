import { defineStore } from 'pinia';
import type { IUser, ILogin } from '~/types/types'

export const userAuth = defineStore('store-user', {
  state: () => {
    return {
      userList: [] as IUser[],
      user: null as IUser | null,
      localUser: 'CM_USER'
    }
  },

  actions: {
    setLocalUser(data: ILogin | any): void { 
      const {name, email} = data

      if(name && email && !this.getLocalUser()) {
        const client = JSON.stringify({name, email});
        localStorage.setItem(this.localUser, client);
      }
    },

    getLocalUser() {
      const local = localStorage?.getItem(this.localUser);
      if(local) return JSON.parse(local);
    }
  }
})