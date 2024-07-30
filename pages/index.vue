<script setup lang="ts">
import chairImage from '~/assets/product/Chair_image.png';
import chairPlastic from '~/assets/product/Chair_Plastic_orange.png';
import chairPlasticWhite from '~/assets/product/Chair_Plastic_white.png';
import chairLibrary from '~/assets/product/Library_Stool_ Chair.png';
import type { IProduct } from '~/types/types';
import { chairList } from '~/utils/product';

const newChairList = ref<IProduct[]>([
  {
    name: 'Chair Plastic',
    price: 99.99,
    categorie: 'novo',
    image: chairImage
  },
  {
    name: 'Chair Plastic Orange',
    price: 299.99,
    beforePrice: 350.99,
    categorie: 'lançamento',
    image: chairPlastic
  },
  {
    name: 'Chair Plastic White',
    price: 200.99,
    beforePrice: 320.99,
    categorie: 'comforto',
    image: chairPlasticWhite
  },
  {
    name: 'Chair Wooder',
    price: 250.99,
    categorie: 'lançamento',
    image: chairLibrary
  },
]);

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

function buyProduct(product: IProduct) {
  console.log(product);
}
</script>

<template>
  <div>
    <mainPage />
    <sectionPage />
    
    <div>
      <div class="w-[85%] mx-auto py-8 lg:w-[57%]">
        <h3 class="text-xl font-bold text-center mt-10">Nossos Produtos</h3>

        <products 
          :listProduct="newChairList"
          @buyProduct="buyProduct"
        />
      </div>
      
      <categoriesPage />

      <div class="w-[85%] mx-auto py-8 lg:w-[57%]">
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

        <products 
          :listProduct="listProduct" 
          @buyProduct="buyProduct"
        />
      </div>

      <depositions />

      <div class="w-[85%] mx-auto py-8 lg:w-[57%]">
        <h3 class="font-bold text-xl">Novidades da loja</h3>

        <products 
          :listProduct="newChairList"
          @buyProduct="buyProduct"
         />  
      </div>
    </div>
  </div>
</template>
