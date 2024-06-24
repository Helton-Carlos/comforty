<script setup lang="ts">
import banner1 from '~/assets/imagem/cadeira-1.png';

const chairList = [
  { path: banner1, name: 'cadeira retro' },
  { path: banner1, name: 'cadeira retro2' },
];
</script>

<template>
  <main
    class="w-[90%] mx-auto p-4 py-8 bg-[url('assets/imagem/banner.png')] bg-no-repeat bg-center bg-cover"
  >
    <div class="flex justify-between items-center p-8">
      <div class="bg-white w-[48px] h-[48px] rounded-full text-white m-2">
        <IconArrowLeft class="my-3.5 mx-3.5" />
      </div>

      <div class="mt-8 flex gap-10">
        <div class="w-[370px]">
          <div class="my-8">
            <p class="text-left font-medium mb-2">Seja bem-vindo.</p>
            <h3 class="text-2xl font-bold tracking-tight leading-10">
              Melhores móveis, Coleção para seu interior.
            </h3>
          </div>
          <button
            class="bg-primary flex gap-2 mt-4 text-white rounded-md p-2 px-4 hover:bg-green"
          >
            <span>Veja mais</span>
            <IconArrowNext />
          </button>
        </div>

        <div>
          <img :src="chairList[0].path" :alt="chairList[0].name" />
        </div>
      </div>

      <span class="bg-white w-[48px] h-[48px] rounded-full text-white m-2">
        <IconArrowRight class="my-3.5 mx-3.5" />
      </span>
    </div>

    <div class="flex justify-center gap-2">
      <div class="bg-primary w-[8px] h-[8px] rounded-full"></div>
      <div class="bg-gray-dark w-[8px] h-[8px] rounded-full"></div>
      <div class="bg-gray-dark w-[8px] h-[8px] rounded-full"></div>
    </div>
  </main>
</template>
