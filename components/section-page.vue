<script setup lang="ts">
import box from '../assets/imagem/box.png';
import delivery from '../assets/imagem/delivery-truck.png';
import oclock from '../assets/imagem/oclock.png';
import shield from '../assets/imagem/shield.png';

import Logo1 from '../assets/imagem/Logo-1.png';
import Logo2 from '../assets/imagem/Logo-2.png';
import Logo3 from '../assets/imagem/Logo-3.png';
import Logo4 from '../assets/imagem/Logo-4.png';
import Logo5 from '../assets/imagem/Logo-5.png';
import Logo6 from '../assets/imagem/Logo-6.png';

const serviceList = [
  { image: box, title: 'Desconto', subtitle: 'Toda semana novas vendas.' },
  {
    image: delivery,
    title: 'Free Delivery',
    subtitle: '100% Gratuito para todos os pedidos.',
  },
  {
    image: oclock,
    title: 'Suporte 24H',
    subtitle: 'Atendimento 24 horas.',
  },
  {
    image: shield,
    title: 'Pagamento seguro',
    subtitle: '100% Gratuito para todos os pedidos.',
  },
];

const companyList = [
  Logo1, Logo2, Logo3, Logo4, Logo5, Logo6
];
</script>

<template>
 <div>
  <div
    class="w-[85%] relative top-[-20px] bg-white border-2 border-gray text-dark text-sm p-4 mx-auto rounded-xl lg:w-[57%]"
  >
    <div class="flex justify-start flex-wrap gap-8 mx-auto p-2 sm:justify-center md:justify-between md:gap-4">
      <div class="flex items-center gap-2"
        v-for="list in serviceList"
        :key="list.title"
      >
        <img :src="list.image" :alt="list.title" />

        <div>
          <p class="font-bold">{{ list.title }}</p>
          <p>{{ list.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="w-[85%] bg-white border-2 border-gray text-dark text-sm px-8 mx-auto rounded-xl lg:w-[57%]"
  >
    <div class="flex flex-wrap justify-center gap-8 mx-auto lg:justify-between md:gap-4">
      <div class="flex items-center gap-2"
        v-for="list in companyList"
        :key="list"
      >
        <img :src="list" :alt="list" />
      </div>
    </div>
  </div>
 </div>
</template>
