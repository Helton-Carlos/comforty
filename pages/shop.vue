<script setup lang="ts">
import chairImage from '~/assets/product/Chair_image.png';
import chairPlastic from '~/assets/product/Chair_Plastic_orange.png';
import chairPlasticWhite from '~/assets/product/Chair_Plastic_white.png';
import chairLibrary from '~/assets/product/Library_Stool_ Chair.png';
import type { IProduct } from '~/types/types';

const chairList = ref<IProduct[]>([
  {
    name: 'Chair Plastic Orange',
    price: 299.99,
    beforePrice: 350.99,
    categorie: 'lançamento',
    image: chairPlastic,
  },
  {
    name: 'Chair Plastic White',
    price: 200.99,
    beforePrice: 320.99,
    image: chairPlasticWhite,
  },
  {
    name: 'Chair Wooder',
    price: 250.99,
    image: chairLibrary,
  },
  {
    name: 'Chair Plastic',
    price: 99.99,
    categorie: 'novo',
    image: chairImage,
  },
]);

function buyProduct(product: IProduct) {
  console.log(product);
}
</script>
<template>
  <div class="w-[85%] mx-auto py-8 lg:w-[70%]">
    <h3 class="font-bold text-xl">Novos Produtos</h3>

    <products :list-product="chairList" @buyProduct="buyProduct" />
  </div>
</template>
