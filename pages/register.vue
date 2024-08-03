<script setup lang="ts">
interface Message {
  title: string;
  style: string;
}

const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');

const message = ref<Message>({
  title: '',
  style: '',
});

function submit() {
  if (name.value && email.value && password.value === confirmPassword.value) {
    return (message.value = {
      title: 'Suas informações foram salvas.',
      style: 'bg-green',
    });
  }

  return (message.value = {
    title: 'Preencha os campos corretamente!',
    style: 'bg-red',
  });
}
</script>

<template>
  <div class="w-[85%] mx-auto my-10 py-8 flex justify-center lg:w-[70%]">
    <form
      class="w-[380px] bg-gray flex flex-col gap-2 p-4"
      @submit.prevent="submit()"
    >
      <label for="email">Nome:</label>
      <input
        class="p-2 rounded shadow"
        type="name"
        name="name"
        id="name"
        placeholder="Jonhy Joe"
        v-model="name"
      />

      <label for="email">E-mail</label>
      <input
        class="p-2 rounded shadow"
        type="email"
        name="email"
        id="email"
        placeholder="joe@gmail.com"
        v-model="email"
      />

      <label for="password">Senha</label>
      <input
        class="p-2 rounded shadow"
        type="password"
        name="password"
        id="password"
        placeholder="*****"
        v-model="password"
      />

      <label for="password">Confirmar Senha</label>
      <input
        class="p-2 rounded shadow"
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="*****"
        v-model="confirmPassword"
      />

      <input
        class="bg-primary text-white mt-2 px-4 py-2 rounded shadow hover:bg-green"
        type="submit"
        name="submit"
        id="submit"
        value="Salvar"
      />

      <nuxt-link
        class="text-center text-primary cursor-pointer hover:underline"
        to="/user"
      >
        Voltar
      </nuxt-link>

      <div
        v-if="message.title"
        :class="['px-2 py-1 text-center rounded-lg shadow', message.style]"
      >
        <p class="text-white">{{ message.title }}</p>
      </div>
    </form>
  </div>
</template>
