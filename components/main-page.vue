<script setup lang="ts">
import banner1 from '~/assets/imagem/cadeira-1.png';
import banner2 from '~/assets/imagem/poltrona-cama.png';
import banner3 from '~/assets/imagem/poltrona.png';

const chairList = [
  { title: 'Seja bem-vindo.', subTitle: 'Melhores móveis, Coleção para seu interior.', path: banner1, name: 'cadeira retro' },
  { title: 'Seu conforto.', subTitle: 'Nossa prioridade é deixar seu lar confortavel.', path: banner2, name: 'poltrona retro1' },
  { title: 'Design  rústico.', subTitle: 'Além de cadeiras modernas, temos versão rústica.', path: banner3, name: 'poltrona retro2' },
];

const image = ref<number>(0);

function decrement(): void {
if(image.value === 0) {
    image.value = 3
  }

  image.value --
}

function increment(): void {
  image.value ++;

  if(image.value > 2) {
    image.value = 0
  }
}
</script>

<template>
  <main
    class="w-[90%] mx-auto p-4 py-8 bg-[url('assets/imagem/banner.png')] bg-no-repeat bg-center bg-cover lg:w-[60%]"
  >
    <div class="flex justify-between items-center px-2 py-8">
      <div 
        class="hidden md:block bg-white w-[48px] h-[48px] rounded-full text-white m-2 hover:bg-primary" 
        @click="decrement "
      >
        <IconArrowLeft class="my-3.5 mx-3" />
      </div>

      <div class="pl-4 flex md:gap-10 md:mt-8">
        <div class="md:w-[370px]">
          <div class="my-8 text-center md:text-left">
            <p class="font-medium mb-2">{{chairList[image].title}}</p>
            
            <h3 class="text-xl font-bold tracking-tight leading-10 md:text-xl lg:text-2xl">
              {{chairList[image].subTitle}}
            </h3>
          </div>

          <div
            class="flex justify-center md:justify-start"
          >
            <nuxt-link 
              to="/product" 
              class="flex text-white gap-2 bg-primary mt-4 rounded-md p-2 px-4 shadow md:mx-0 hover:bg-green"
            >
              <span>Veja mais</span>
              <IconArrowNext />
            </nuxt-link>
          </div>
        </div>

        <div>
          <img 
            class="hidden md:block" 
            :src="chairList[image].path" 
            :alt="chairList[image].name" 
          />
        </div>
      </div>

      <span 
        class="hidden md:block bg-white w-[48px] h-[48px] rounded-full text-white m-2 shadow hover:bg-primary"
        @click="increment " 
      >
        <IconArrowRight class="my-3.5 mx-3" />
      </span>
    </div>

    <div class="hidden md:flex md:justify-center md:gap-2">
      <canvas :class="['bg-gray-dark w-[8px] h-[8px] rounded-full', { 'bg-primary' : image === 0 }]" />
      <canvas :class="['bg-gray-dark w-[8px] h-[8px] rounded-full', { 'bg-primary' : image === 1 }]" />
      <canvas :class="['bg-gray-dark w-[8px] h-[8px] rounded-full', { 'bg-primary' : image === 2 }]" />
    </div>
  </main>
</template>