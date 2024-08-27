<script setup lang="ts">
import { convertMoney } from '~/utils/convertMoney';
import type { IProduct } from '~/types/types';
import { buyStore } from '~/store/buy';

const { $state, favoriteProduct, addCart } = buyStore();

defineProps<{
  listProduct: IProduct[] | undefined | any;
}>();

function closedModal() {
  $state.modalAuth = false;
  $state.modalBuy = false;
}

function openModal() {
  $state.modalBuy = true;
}
</script>

<template>
  <div
    class="block md:flex md:justify-center md:flex-wrap md:flex-shrink md:gap-7"
  >
    <div
      class="w-full md:w-[280px] lg:[300px]"
      v-for="list in listProduct"
      :key="list.name"
    >
      <div>
        <div
          class="relative top-14 pt-4 px-4 flex justify-between items-start"
        >
          <span
            v-if="list.categorie"
            :class="[
              'text-white px-3 py-1 rounded-full text-sm',
              { 'bg-green': list.categorie === 'novo' },
              { 'bg-primary': list.categorie === 'lançamento' },
              { 'bg-orange': list.categorie === 'comforto' },
              { 'bg-dark': list.categorie === 'mais vendidos' || 'padrao' },
            ]"
          >
            {{ list.categorie }}
          </span>

          <button 
            class="p-1 rounded-md bg-white" 
            @click="favoriteProduct(list?.id)"
          >
            <IconHeart />
          </button>
        </div>

        <img class="w-full" :src="list.image" :alt="list.name" />
      </div>

      <div class="flex justify-between pt-2">
        <div>
          <p class="text-primary font-medium">{{ list.name }}</p>
          <p class="text-black font-bold" v-if="list.price">
            {{ convertMoney(list.price) }}
          </p>
        </div>
        
        <button
          class="p-1 px-3 rounded-md bg-gray hover:bg-primary"
          @click="openModal()"
        >
          <IconCart />
        </button>
      </div>

      <Modal  
        @closed-modal="closedModal"
        :open-modal="$state.modalAuth" 
        closed
      >
        <div class="px-4 pb-4">
          <h2 class="font-bold text-red">Atenção!</h2>
          <hr />
          
          <p class="pt-2">Para utilizar nossos serviços e adquirir nossos produtos, é necessário realizar um cadastro.</p>
        </div>
      </Modal>

      <Transition>
        <Modal  
          @closed-modal="closedModal"
          :open-modal="$state.modalBuy" 
          closed
        >
          <div class="px-4 pb-4 text-center">
            <h2 class="font-bold">Deseja comprar esse produto?</h2>

            <div class="flex items-center justify-center gap-4 pt-4 mb-2">
              <button class="hover:underline" @click="closedModal">Cancelar</button>

              <button 
                class="bg-gray flex gap-2 text-dark px-4 py-1 rounded-md hover:bg-green shadow-sm" 
                @click="addCart(list?.id)"
              >
              <IconCart />Carrinho
              </button>
            </div>
          </div>
        </Modal>
      </Transition>
    </div>
  </div> 
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s all;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
