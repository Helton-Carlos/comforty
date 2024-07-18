<template>
  <div class="w-[80%] mx-auto my-10 py-8 flex justify-center lg:w-[55%]">
    <form class="w-[380px] bg-gray flex flex-col gap-2 p-4">
      <label for="email">E-mail</label>
      <input 
        class="p-2 rounded shadow"
        type="email" 
        name="email" 
        id="email" 
        placeholder="joe@gmail.com" 
      />

      <label for="password">Senha</label>
      <input 
        class="p-2 rounded shadow"
        type="password" 
        name="password" 
        id="password" 
        placeholder="*****" 
      />

      <input 
        class="bg-primary text-white mt-2 px-4 py-2 rounded shadow hover:bg-green"
        type="submit" 
        name="submit" 
        id="submit" 
        value="Login"
      />

      <p class="font-bold text-base">Ainda não é nosso cliente? <span class="underline text-primary">Cadastre-se</span></p> 
    </form>
  </div>
</template>
