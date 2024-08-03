<script setup lang="ts">
import aspasDuplas from '~/assets/imagem/aspas.png';
import persona1 from '~/assets/imagem/persona-1.png';
import persona2 from '~/assets/imagem/persona-2.png';
import type { IDepositions } from '~/types/types';

const listDepositions = ref<IDepositions[]>([
  {
    depositions:
      '“A Comforty é surpreendente! Suas cadeiras combinam conforto e estilo perfeitamente. A equipe é acolhedora e conhecedora, oferecendo uma variedade incrível de designs ergonômicos e duráveis. Recomendo sem hesitar!“',
    image: persona1,
    name: 'Kristin Watson',
    job: 'Fashion Designer',
  },
  {
    depositions:
      '"Comforty é simplesmente perfeita! Suas cadeiras são a união ideal entre conforto e elegância. A equipe é atenciosa e conhecedora, oferecendo uma variedade incrível de designs ergonômicos e duráveis. Recomendo Bastante!"',
    image: persona2,
    name: 'Esther Howard',
    job: 'Fashion Designer',
  },
]);
</script>

<template>
  <div class="w-full bg-gray mt-10">
    <div class="w-[85%] mx-auto py-4 lg:w-[70%]">
      <h3 class="font-bold text-xl my-8">Depoimentos dos nossos clientes</h3>

      <div class="md:flex md:justify-between gap-4">
        <div
          class="w-full bg-white p-8 rounded-md shadow-md sm:mb-4 md:w-[648px]"
          v-for="list in listDepositions"
          :key="list.name"
        >
          <div class="flex items-center">
            <div class="col-color"></div>

            <p
              class="text-base text-gray-dark font-normal p-4 pr-4 md:text-[18px]"
            >
              {{ list.depositions }}
            </p>
          </div>

          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <img
                :src="list.image"
                alt="imagem do rosto de cliente que escreveu o depoimento."
              />

              <div>
                <p class="font-bold text-dark">{{ list.name }}</p>
                <p class="text-gray-dark">{{ list.job }}</p>
              </div>
            </div>

            <div>
              <img :src="aspasDuplas" alt="Ilustração de Aspas Duplas." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-color::before {
  content: '';
  background-color: rgb(4, 142, 142);
  padding: 42px 2px;
}
</style>
