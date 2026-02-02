<template>
  <Card class="w-[90%] md:w-[50%] max-w-[500px] bg-white/70 backdrop-blur-[20px] rounded-4xl md:rounded-[3rem] border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.01)] p-8 md:p-12">
    <template #title>
      <div class="flex justify-center items-center text-2xl font-bold mb-6 md:mb-10">登入</div>
    </template>
    <template #content>
      <form @submit.prevent="login">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-6">
            <InputText
            type="email"
              v-model="username"
              placeholder="請輸入帳號"
              class="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
            />

            <Password
              v-model="password"
              placeholder="請輸入密碼"
              :toggleMask="true"
              :feedback="false"
              class="w-full"
              inputClass="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
              toggleMaskIcon="pi pi-eye"
            />
          </div>
          <Button label="登入" type="submit" class="bg-linear-to-br! border-none! rounded-3xl! w-full" />
          <div class="flex justify-center">
            <router-link :to="{ name: 'register' }" class="text-center text-slate-500 hover:text-slate-600">
              <i class="pi pi-user-plus"></i>
              註冊
            </router-link>
          </div>
        </div>
      </form>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import Card from 'primevue/card';
  import Password from 'primevue/password';
  import { useRouter } from 'vue-router';

  interface User {
    id: number;
    account: string;
    password: string;
    friends?:string[]
  }

  const username = ref('');
  const password = ref('');
  const Users=ref<User[]>([]);
  const router = useRouter();

  onMounted(() => {
    Users.value = JSON.parse(localStorage.getItem('users') || '[]');
  });

  const login = () => {
    const user = Users.value.find(user => user.account === username.value && user.password === password.value);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      router.push({ name: 'mainPage' });
    } else {
      alert('帳號或密碼錯誤');
    }
  };
</script>
