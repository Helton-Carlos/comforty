<script setup lang="ts">
const menuList = ref<string[]>([
  'Home',
  'Shop',
  'Produtos',
  'Páginas',
  'Sobre',
]);
</script>

<template>
  <div class="w-full bg-white border-2 border-gray text-purple text-sm py-4">
    <div class="w-[80%] flex justify-between items-center mx-auto">
      <div class="flex gap-2 md:gap-8">
        <button
          class="bg-white flex items-center gap-2 p-2.5 rounded-md font-bold border-2 border-gray"
        >
          <IconMenu />
          <span class="hidden md:block">Categorias</span>
        </button>

        <ul class="flex items-center" v-for="list in menuList" :key="list">
          <li class="font-bold cursor-pointer hover:text-primary">
            {{ list }}
          </li>
        </ul>
      </div>

      <div class="hidden text-sm gap-2 md:flex">
        <p class="text-gray-dark">Contato:</p>
        <p class="text-purple font-bold">(82) 3355-0111</p>
      </div>
    </div>
  </div>
</template>
