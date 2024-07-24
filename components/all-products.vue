<script setup lang="ts">
import type { IProduct } from '~/types/types';
import { convertMoney } from '~/utils/convertMoney';
import { chairList } from '~/utils/product';

const categories = ref<string[]>(['novo','lançamento','comforto','mais vendidos']);
const selectedCategory = ref<string>('');
const product = ref<IProduct[]>();

function filterCategories(categorie: string) {
  selectedCategory.value = categorie;
  product.value = chairList.filter((item) => item.categorie === categorie)
}

const listProduct = computed(() => {
  return product.value ? product.value : chairList
})
</script>

<template>
  <div>
    <h3 class="text-xl font-bold text-center mt-10">Todos Produtos</h3>

    <div class="mx-auto flex justify-center mt-4">
      <button v-for="categorie in categories" :key="categorie">

      <span 
        :class="['font-medium mx-4 capitalize pb-1', { 'border-b-2 border-b-primary': selectedCategory === categorie }]"
        @click="filterCategories(categorie)"
      >
        {{ categorie }}
      </span>
      </button>
    </div>

    <div class="block md:flex md:justify-center md:flex-wrap md:flex-shrink md:gap-7">
      <div 
        class="w-full md:w-[280px] lg:[300px]" 
        v-for="list in listProduct" :key="list.name"
      >
        <div>
          <div class="relative top-14 pt-4 px-4 flex justify-between items-start">
            <span 
              v-if="list.categorie"
              :class="[
                'text-white px-3 py-1 rounded-full text-sm',
                {'bg-green' : list.categorie === 'novo' },
                {'bg-primary' : list.categorie === 'lançamento' },
                {'bg-orange' : list.categorie === 'comforto' },
                {'bg-dark' : list.categorie === 'mais vendidos' },
              ]"
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