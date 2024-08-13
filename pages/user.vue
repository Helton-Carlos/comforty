<script setup lang="ts">
import { userAuth } from '~/store/auth';
import type { IMessage } from '~/types/types';

const login = reactive({
  email:'',
  password: '',
})

const message = ref<IMessage>({
  title: '',
  style: '',
});

const auth = userAuth();
const router = useRouter();

function singIn() {
  if(auth.getLocalUser()){
    const { email, password } = auth.getLocalUser();

    if(login.email === email && login.password === password) {
      router.push({name: 'dashboard'});
    } else {
    message.value = {
      title: 'Preencha os campos corretamente!',
      style: 'bg-red'
    }
  }
  } else {
    message.value = {
      title: 'Preencha os campos corretamente!',
      style: 'bg-red'
    }
  }

  setTimeout(()=>{
    message.value = {
      title: '',
      style: ''
    }
  }, 1800)
}
</script>

<template>
  <div class="w-[85%] mx-auto my-10 py-8 flex justify-center lg:w-[70%]">
    <form class="w-[380px] bg-gray flex flex-col gap-2 p-4" @submit.prevent="singIn">
      <label for="email">E-mail</label>
      <input
        class="p-2 rounded shadow"
        type="email"
        name="email"
        id="email"
        placeholder="joe@gmail.com"
        v-model="login.email"
      />

      <label for="password">Senha</label>
      <input
        class="p-2 rounded shadow"
        type="password"
        name="password"
        id="password"
        placeholder="*****"
        v-model="login.password"
      />

      <input
        class="bg-primary text-white mt-2 px-4 py-2 rounded shadow hover:bg-green"
        type="submit"
        name="submit"
        id="submit"
        value="Login"
      />

      <p class="font-bold text-base">
        Ainda não é nosso cliente?
        <nuxt-link 
          class="underline text-primary cursor-pointer"
          to="/register" 
        >
          Cadastre-se
        </nuxt-link>
      </p>

      <div 
        v-if="message.title" 
        :class="['px-2 py-1 text-center rounded-lg shadow', message.style]"
      >
        <p class="text-white">{{ message.title }}</p>
      </div>
    </form>
  </div>
</template>
