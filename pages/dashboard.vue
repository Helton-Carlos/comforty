<script setup lang="ts">
import { userAuth } from '~/store/auth';

const auth = userAuth();

const user = computed(() => {
  return auth.$state.user; 
});
</script>

<template>
 <div class="w-[85%] mx-auto py-8 lg:w-[70%]">
    <h3 class="text-xl font-bold text-center mt-10">Dashboard</h3>

    <div>
      <p class="font-bold">{{ user?.name }}</p>
    </div>
  </div>
</template>
