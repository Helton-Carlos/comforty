<script setup lang="ts">
import banner1 from '~/assets/imagem/cadeira-1.png';

const chairList = [
  { path: banner1, name: 'cadeira retro' },
  { path: banner1, name: 'cadeira retro2' },
];
</script>

<template>
  <main
    class="w-[90%] mx-auto p-4 py-8 bg-[url('assets/imagem/banner.png')] bg-no-repeat bg-center bg-cover lg:w-[60%]"
  >
    <div class="flex justify-between items-center px-2 py-8">
      <div class="bg-white w-[48px] h-[48px] rounded-full text-white m-2">
        <IconArrowLeft class="my-3.5 mx-3.5" />
      </div>

      <div class="pl-4 flex md:gap-10 md:mt-8">
        <div class="md:w-[370px]">
          <div class="my-8 text-center md:text-left">
            <p class="font-medium mb-2">Seja bem-vindo.</p>
            
            <h3 class="text-xl font-bold tracking-tight leading-10 md:text-2xl">
              Melhores móveis, Coleção para seu interior.
            </h3>
          </div>

          <button
            class="bg-primary mt-4 rounded-md p-2 px-4 md:mx-0 hover:bg-green"
          >
            <nuxt-link 
              to="/product" 
              class=" mx-auto flex text-white gap-2"
            >
              <span>Veja mais</span>
              <IconArrowNext />
            </nuxt-link>
          </button>
        </div>

        <div>
          <img 
            class="hidden md:block" 
            :src="chairList[0].path" 
            :alt="chairList[0].name" 
          />
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
