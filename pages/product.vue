<script setup lang="ts">
import { selectedCategory, listProduct, filterCategories } from '~/types/products'

const categories = ref<string[]>([
  'novo',
  'lançamento',
  'comforto',
  'mais vendidos',
]);
</script>

<template>
  <div class="w-[85%] mx-auto py-8 lg:w-[70%]">
    <h3 class="text-xl font-bold text-center mt-10">Todos Produtos</h3>

    <div class="mx-auto flex justify-center mt-4">
      <button v-for="categorie in categories" :key="categorie">
        <span
          :class="[
            'font-medium mx-4 capitalize pb-1',
            { 'border-b-2 border-b-primary': selectedCategory === categorie },
          ]"
          @click="filterCategories(categorie)"
        >
          {{ categorie }}
        </span>
      </button>
    </div>

    <products 
      :listProduct="listProduct" 
    />
  </div>
</template>
