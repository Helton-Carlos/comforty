<script setup lang="ts">
import box from '../assets/imagem/box.png';
import delivery from '../assets/imagem/delivery-truck.png';
import oclock from '../assets/imagem/oclock.png';
import shield from '../assets/imagem/shield.png';

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
</script>

<template>
  <div
    class="w-[80%] relative top-[-20px] bg-white border-2 border-gray text-purple text-sm p-4 mx-auto rounded-xl"
  >
    <div
      v-for="list in serviceList"
      key="list"
      class="inline-block mx-auto p-2"
    >
      <div class="flex items-center gap-2">
        <img :src="list.image" :alt="list.title" />

        <div>
          <p class="font-bold">{{ list.title }}</p>
          <p>{{ list.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
