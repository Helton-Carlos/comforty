<script setup lang="ts">
import type { IMenu } from '~/types/types';

const menuList = ref<IMenu[]>([
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Produtos', path: '/product' },
  { name: 'Sobre', path: '/about' },
]);

const menu = ref<boolean>(false)

function openMenu() {
  menu.value = !menu.value
}
</script>

<template>
<div>
  <div class="w-full bg-white border-2 border-gray text-dark text-sm py-4">
    <div class="w-[80%] flex justify-between items-center mx-auto lg:w-[55%]">
      <div class="flex gap-2 md:gap-8">
        <button
          class="bg-white flex items-center gap-2 p-2.5 rounded-md font-bold border-2 border-gray"
          @click="openMenu()"
        >
          <IconMenu />
          <span class="hidden md:block">Categorias</span>
        </button>

        <ul class="flex items-center" v-for="list in menuList" :key="list.name">
          <li class="font-bold cursor-pointer hover:text-primary hover:underline">
            <nuxt-link :to="list.path">
              {{ list.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="hidden text-sm gap-2 md:flex">
        <p class="text-gray-dark">Contato:</p>
        <p class="text-dark font-bold">(82) 3355-0111</p>
      </div>
    </div>
  </div>

  <div v-if="menu" class="w-[350px] h-screen z-50 bg-white border-2 border-gray text-dark shadow-md text-sm py-4 absolute top-0">
    <div class="w-[90%] flex justify-end">
      <button 
        class="font-medium text-xl text-dark cursor-pointer hover:text-primary"
        @click="openMenu()"  
      >
        x
      </button>
    </div>
    
    <nuxt-link to="/" class="flex items-center justify-center gap-1 my-7">
      <IconLogo />
      <h1 class="font-medium text-xl text-dark">Comforty</h1>
    </nuxt-link>

    <ul class="flex flex-col items-center" v-for="list in menuList" :key="list.name">
      <li class="font-bold text-base cursor-pointer my-4 hover:text-primary hover:underline">
        <nuxt-link 
          :to="list.path" 
          @click="openMenu()"
        >
          {{ list.name }}
        </nuxt-link>
      </li>
      <hr class="w-[50%] mx-auto text-gray"/>
    </ul>
  </div>
</div>
</template>
