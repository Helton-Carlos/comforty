<script setup lang="ts">
import type { IProduct } from '~/types/types';

const chairList = ref<IProduct[]>([]);
</script>

<template>
  <div>
    <div class="w-[85%] mx-auto pb-10 lg:w-[70%]">
      <h3 class="text-xl font-bold pt-8">Top 5 categorias</h3>
    </div>

    <div class="flex overflow-x-auto gap-2 md:gap-4">
      <div
        class="w-full mx-auto hover:cursor-pointer"
        v-for="list in chairList"
        :key="list.name"
      >
        <div class="mx-2">
          <img
            data-test-id="categories-list"
            class="min-w-[200px] md:w-full "
            :src="list.image"
            :alt="list.name"
          />

          <div
            class="bg-dark relative bottom-14 rounded-bl-2xl rounded-br-2xl opacity-100 text-white py-2 px-4"
          >
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
  border: 4px solid #9a9caa;
}
::-webkit-scrollbar-thumb {
  background-color: #9a9caa;
  border: 2px solid #029fae;
  border-radius: 8px;
}
</style>
