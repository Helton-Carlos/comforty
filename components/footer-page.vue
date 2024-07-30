<script setup lang="ts">
import master from '~/assets/imagem/master.png';
import visa from '~/assets/imagem/visa.png';
import paypal from '~/assets/imagem/paypal.png';
import americanExpress from '~/assets/imagem/american-express.png';

const email = ref<string>("");

const cards = ref<string[]>([
  master,
  visa,
  paypal,
  americanExpress
]);

const menuList = ref<string[]>([
  'Home',
  'Shop',
  'Produtos',
  'Páginas',
  'Sobre'
]);

const helpList = ref<string[]>([
  'Suporte',
  'Política de privacidade',
  'Ajuda'
]);
</script>

<template>
  <div class="w-full text-white border-t-2 border-gray mt-4">
    <div class="w-[85%] block md:flex items-start gap-2 mx-auto py-8 justify-between lg:w-[57%]">
      <div>
        <nuxt-link to="/" class="flex items-center gap-2 mt-2">
          <IconLogo />
          <h1 class="font-medium text-xl text-dark">Comforty</h1>
        </nuxt-link>

        <p class="text-gray-dark text-sm py-4 w-[250px]">
          "Comforty oferece conforto e estilo incomparáveis. Cada cadeira combina ergonomia perfeita com design elegante. Descubra a qualidade superior das cadeiras Comforty agora!"
        </p>
      </div>

      <div class="text-base">
        <p class="text-gray-dark font-semibold pb-2 mt-2 underline">CATEGORIAS</p>

        <ul v-for="list in menuList" :key="list">
          <li class="text-dark font-semibold cursor-pointer hover:text-primary">{{ list }}</li>
        </ul>
      </div>

      <div class="text-base">
        <p class="text-gray-dark font-semibold pb-2 mt-2 underline">SUPORTE</p>

        <ul v-for="list in helpList" :key="list">
          <li class="text-dark font-semibold cursor-pointer hover:text-primary">{{ list }}</li>
        </ul>
      </div>

      <div class="flex flex-col text-base">
        <p class="text-gray-dark font-semibold pb-2 mt-2 underline">Newsletter</p>

        <div class="flex items-center">
          <input 
            class="bg-white border border-gray-dark text-dark text-sm rounded-lg mr-1 p-1.5" 
            id="email"
            type="email" 
            placeholder="Seu e-mail" 
            v-model="email"
          />

          <button class="bg-primary text-white px-4 py-1 rounded-md hover:bg-dark shadow-sm">Enviar</button>
        </div>

        <p class="text-sm">Receba nossas novidades.</p>
      </div>
    </div>

    <div class="border-t-2 border-gray flex justify-between items-center py-4">
      <div class="w-[85%] flex justify-between mx-auto lg:w-[57%]">
        <p class="text-gray-dark">@ 2024 - Helton Brito - Front-End</p>

        <div  class="flex items-center gap-4">
          <div v-for="list in cards" >
            <img :src="list" :alt="list" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
