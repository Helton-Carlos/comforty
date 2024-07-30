<script setup lang="ts">
import chairImage1 from '~/assets/categories/chair_categories_1.png';
import chairImage2 from '~/assets/categories/chair_categories_2.png';
import chairImage3 from '~/assets/categories/chair_categories_3.png';
import chairImage4 from '~/assets/categories/chair_categories_4.png';
import chairImage5 from '~/assets/categories/chair_categories_5.png';
import type { IProduct } from '~/types/types';

const chairList = ref<IProduct[]>([
  {
    name: 'Chair Conforty',
    unid: 3.584,
    image: chairImage4
  },
  {
    name: 'Wooden Chair',
    unid: 1.574,
    image: chairImage2
  },
  {
    name: 'Desk Chair',
    unid: 3.512,
    image: chairImage3
  },
  {
    name: 'Wing Chair',
    unid: 1.122,
    image: chairImage1
  },
  {
    name: 'Park Chair',
    unid: 1.127,
    image: chairImage5
  },
]);
</script>

<template>
  <div>
    <div class="w-[85%] mx-auto pb-10 lg:w-[57%]">
      <h3 class="text-xl font-bold pt-8">Top 5 categorias</h3>
    </div>

    <div class="flex overflow-x-auto gap-2 md:gap-4">
      <div class="w-full mx-auto hover:cursor-pointer" v-for="list in chairList" :key="list.name">
        <div class="mx-2">
          <img
            class="min-w-[200px] md:w-full" 
            :src="list.image" 
            :alt="list.name" 
          />

          <div class="bg-dark relative bottom-14 rounded-bl-2xl rounded-br-2xl opacity-100 text-white py-2 px-4">
            <p>{{ list.name }}</p>
            <p class="text-gray-dark">{{ list.unid }} produtos</p>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<style scoped>
 ::-webkit-scrollbar {
      height: 4px;
      width: 4px;
  }
  ::-webkit-scrollbar-track {
      background: #ffffff; 
      border: 4px solid #9A9CAA;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #9A9CAA;
      border: 2px solid #029FAE;
      border-radius: 8px;
  }
</style>