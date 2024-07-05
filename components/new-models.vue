<script setup lang="ts">
import chairImage from '~/assets/product/Chair_image.png';
import chairPlastic from '~/assets/product/Chair_Plastic_orange.png';
import chairPlasticWhite from '~/assets/product/Chair_Plastic_white.png';
import chairLibrary from '~/assets/product/Library_Stool_ Chair.png';
import { convertMoney } from '~/utils/convertMoney';
import type { IProduct } from '~/types/types';

const chairList = ref<IProduct[]>([
  {
    name: 'Chair Plastic Orange',
    price: 299.99,
    beforePrice: 350.99,
    categorie: 'Lançamento',
    image: chairPlastic
  },
  {
    name: 'Chair Plastic White',
    price: 200.99,
    beforePrice: 320.99,
    image: chairPlasticWhite
  },
  {
    name: 'Chair Wooder',
    price: 250.99,
    image: chairLibrary
  },
  {
    name: 'Chair Plastic',
    price: 99.99,
    categorie: 'Novo',
    image: chairImage
  },
]);
</script>

<template>
  <div>
    <h3 class="font-bold text-xl">Novos Produtos</h3>

    <div class="block md:flex md:justify-between md:flex-wrap md:flex-shrink md:gap-4">
      <div class="w-full md:w-[280px] lg:[300px]" v-for="list in chairList" :key="list.name">
        <div >
          <div class="relative top-14 pt-4 px-4 flex justify-between items-start">
            <span 
              v-if="list.categorie"
              class="text-white px-3 py-1 rounded-full text-sm"
              :class="list.categorie === 'Novo' ? 'bg-primary' : 'bg-orange'"
            >
              {{ list.categorie }}
            </span>

            <button class="p-1 rounded-md bg-white"><IconHeart /></button>
          </div>

          <img class="w-full" :src="list.image" :alt="list.name" />
        </div>

        <div class="flex justify-between pt-2">
          <div>
            <p class="text-primary font-medium">{{ list.name }}</p>
            <p class="text-black font-bold">{{ convertMoney(list.price) }}</p>
          </div>

          <button class="p-1 px-3 rounded-md bg-gray hover:bg-primary">
            <IconCart />
          </button>
        </div>
      </div>  
    </div>
  </div>
</template>