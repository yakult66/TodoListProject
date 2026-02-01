<template>
    <div class="min-h-screen flex justify-center items-start pt-20 bg-linear-to-br from-[#e0e7ff] to-[#f1f5f9]">
          <Card class="w-[50%] max-w-[500px] bg-white/70 backdrop-blur-[20px] rounded-[3rem] border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.01)] p-12">
            <template #title>
              <div class="flex justify-center items-center text-2xl font-bold mb-10">登入</div>
            </template>
            <template #content>
              <form @submit.prevent="login">
                <div class="flex flex-col gap-4">
                  <InputText v-model="username" placeholder="請輸入帳號" />
                  <InputText v-model="password" placeholder="請輸入密碼" />
                  <Button label="登入" type="submit" class="bg-linear-to-br! border-none! rounded-3xl!" />
                </div>
              </form>
            </template>
          </Card>
    </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import Card from 'primevue/card';

  const username = ref('');
  const password = ref('');

  const login = () => {
    console.log(username.value, password.value);
  };
</script>
