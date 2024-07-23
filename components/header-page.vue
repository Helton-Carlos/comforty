<script setup lang="ts">
</script>

<template>
  <header class="w-full bg-gray text-white text-sm py-5">
    <div
      class="w-[80%] block md:flex md:justify-between md:items-center mx-auto lg:w-[55%]"
    >
      <nuxt-link to="/" class="flex items-center gap-1">
        <IconLogo />
        <h1 class="font-medium text-xl text-dark">Comforty</h1>
      </nuxt-link>

      <div>
        <input
          class="w-full text-dark rounded-md p-3.5 my-3 lg:mx-2 lg:w-[413px] outline-none"
          type="text"
          placeholder="Pesquisar..."
        />
      </div>

      <div class="flex gap-4">
        <button
          class="w-full p-3 flex items-center gap-2 bg-white text-dark font-medium rounded-md"
        >
          <IconCart />Carrinho
          <span
            class="bg-primary w-[25px] h-[25px] pt-1 rounded-full text-white"
            >0</span
          >
        </button>
        
        <button class="p-3 rounded-md bg-white"><IconHeart /></button>

        <nuxt-link 
          :class="{
            'p-3 rounded-md hover:bg-primary': true,
            'bg-primary': $route.path === '/user',
            'bg-white': $route.path !== '/user'
          }"
          to="/user"
        >
          <IconUser />
        </nuxt-link>
      </div>
    </div>
  </header>
</template>
