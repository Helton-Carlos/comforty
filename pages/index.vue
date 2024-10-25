<script setup lang="ts">
import { selectedCategory, listProduct, filterCategories, getProduct } from '~/types/products'

const categories = ref<string[]>([
  'novo',
  'lançamento',
  'comforto',
  'mais vendidos',
]);
</script>

<template>
  <div>
    <mainPage />
    <sectionPage />

    <div>
      <div class="w-[85%] mx-auto py-8 lg:w-[70%]">
        <h3 class="text-xl font-bold text-center mt-10">Nossos Produtos</h3>
     
        <products 
          data-test="index-products"
          :listProduct="getProduct" 
        />
      </div>

      <categoriesPage />

      <div class="w-[85%] mx-auto py-8 lg:w-[70%]">
        <h3 class="text-xl font-bold text-center mt-10">Todos Produtos</h3>

        <div class="mx-auto flex justify-center mt-4">
          <button data-test="index-button-categories" v-for="categorie in categories" :key="categorie">
            <span
              data-test="index-categories"
              :class="[
                'font-medium mx-4 capitalize pb-1',
                {
                  'border-b-2 border-b-primary': selectedCategory === categorie,
                },
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

      <depositions />

      <div class="w-[85%] mx-auto py-8 lg:w-[70%]">
        <h3 class="font-bold text-xl">Novidades da loja</h3>

        <products 
          :listProduct="getProduct" 
        />
      </div>
    </div>
  </div>
</template>
