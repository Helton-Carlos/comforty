<template>
  <header class="w-full h-[84px] bg-gray text-white text-sm py-5">
    <div class="w-[80%] flex justify-between items-center mx-auto">
      <div class="flex items-center gap-1">
        <IconLogo />
        <h1 class="font-medium text-xl text-purple">Comforty</h1>
      </div>

      <div>
        <input
          class="w-[413px] h-[44px] rounded-md px-4 py-2"
          type="text"
          placeholder="Pesquisar..."
        />
      </div>

      <div class="flex gap-4">
        <button
          class="p-2.5 flex items-center gap-2 bg-white text-purple font-medium rounded-md"
        >
          <IconCart />Carrinho
          <span
            class="bg-primary w-[25px] h-[25px] pt-1 rounded-full text-white"
            >0</span
          >
        </button>
        <button class="p-2.5 rounded-md bg-white"><IconHeart /></button>
        <button class="p-2.5 rounded-md bg-white"><IconUser /></button>
      </div>
    </div>
  </header>
</template>
