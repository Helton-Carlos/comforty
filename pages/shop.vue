<script setup lang="ts"> 
import { getProduct } from '~/types/products'
</script>

<template>
  <div class="w-[85%] mx-auto py-8 lg:w-[70%]">
    <h3 class="font-bold text-xl">Novos Produtos</h3>

    <products 
      :list-product="getProduct" 
    />
  </div>
</template>
