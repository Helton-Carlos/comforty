<script setup lang="ts">
import { convertMoney } from '~/utils/convertMoney';
import type { IProduct } from '~/types/types';

defineProps<{
  listProduct: IProduct[];
}>();

const emit = defineEmits<{
  (e: 'buyProduct'): IProduct[];
}>();

function buyProduct(product: IProduct) {
  emit('buyProduct', product);
}
</script>

<template>
  <div>
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
            <p class="text-black font-bold" v-if="list.price">{{ convertMoney(list.price) }}</p>
          </div>

          <button class="p-1 px-3 rounded-md bg-gray hover:bg-primary" @click="buyProduct(list)">
            <IconCart />
          </button>
        </div>
      </div>  
    </div>
  </div>
</template>