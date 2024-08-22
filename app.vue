<script setup lang="ts">
import { buyStore } from '~/store/buy';

const { $state } = buyStore();

function closedModal() {
  $state.modal = !$state.modal;
}
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <Modal  
      @closed-modal="closedModal"
      :open-modal="$state.modal" 
      closed
    >
      <div class="px-4 pb-4">
        <h2 class="font-bold text-red">Atenção!</h2>
        <hr />

        <p class="pt-2">Você precisa se cadastrar para usar nossos serviços e comprar nossos produtos.</p>
      </div>
    </Modal>
  </div>
</template>
