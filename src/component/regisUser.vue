<template>
  <Card class="w-[90%] md:w-[50%] max-w-[500px] bg-white/70 backdrop-blur-[20px] rounded-4xl md:rounded-[3rem] border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.01)] p-8 md:p-12">
    <template #title>
      <div class="flex justify-center items-center text-2xl font-bold mb-6 md:mb-10">註冊</div>
    </template>
    <template #content>
      <form @submit.prevent="register">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-6">
            <div class="relative flex items-center w-full">
              <InputText
                v-model="account"
                type="text"
                @input="handleAccountInput"
                placeholder="請輸入帳號"
                :invalid="submitValid && !account"
                class="w-full border-none! bg-slate-50/80! rounded-2xl! pl-6! pr-28! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
              />
              <span class="absolute right-6 text-slate-400 opacity-60 pointer-events-none select-none font-medium">
                @gmail.com
              </span>
            </div>
            <Message v-if="submitValid && !account" severity="error" :closable="false" class="mt-2 transition-opacity">
              帳號為必填
            </Message>
            <Message v-if="!isInputValid" severity="error" :closable="false" class="mt-2 transition-opacity">
              帳號格式錯誤，請輸入@gmail.com前的帳號
            </Message>
            <Password
              v-model="password"
              placeholder="請輸入密碼"
              :toggleMask="true"
              :feedback="true"
              class="w-full"
              :invalid="submitValid && !password"
              inputClass="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
              toggleMaskIcon="pi pi-eye"
            />
            <Message v-if="submitValid && !password" severity="error" :closable="false" class="mt-2 transition-opacity">
              密碼為必填
            </Message>
            <Password
              v-model="confirmPassword"
              placeholder="請再次輸入密碼"
              :toggleMask="true"
              :feedback="false"
              class="w-full"
              :invalid="submitValid && !confirmPassword"
              inputClass="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
              toggleMaskIcon="pi pi-eye"
            />
            <Message v-if="submitValid && !confirmPassword" severity="error" :closable="false" class="mt-2 transition-opacity">
              確認密碼為必填
            </Message>
            <InputText
              v-model="name"
              placeholder="請輸入姓名"
              :invalid="submitValid && !name"
              class="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
            />
            <Message v-if="submitValid && !name" severity="error" :closable="false" class="mt-2 transition-opacity">
              姓名為必填
            </Message>
            <div class="flex flex-row gap-2">
              <label class="text-slate-600 font-semibold ml-1">角色：</label>
              <div class="flex items-center gap-2">
                <RadioButton v-model="role" inputId="role_admin" name="role" value="admin" />
                <label for="role_admin" class="cursor-pointer text-slate-600">管理員</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="role" inputId="role_user" name="role" value="user" />
                <label for="role_user" class="cursor-pointer text-slate-600">使用者</label>
              </div>
            </div>
          </div>
          <Button label="註冊" :disabled="!submitValid" type="submit" class="bg-linear-to-br! border-none! rounded-3xl! w-full" />
        </div>
      </form>
    </template>
    <template #footer>
      <div class="flex justify-center w-full mt-4">
        <button
          type="button"
          class="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-all duration-300 group bg-transparent border-none cursor-pointer"
          @click="backToLogin"
        >
          <i class="pi pi-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></i>
          <span class="font-medium">返回登入</span>
        </button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, onMounted, ref,watch } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Password from 'primevue/password';
import router from '@/router';
import Message from 'primevue/message';
import type { user } from './type';
import RadioButton from 'primevue/radiobutton';

const account = ref('');
const password = ref('');
const name = ref('');
const role = ref('user');
const confirmPassword = ref('');
const users = ref<user[]>([]);
const isInputValid = ref(true);

onMounted(() => {
  users.value = JSON.parse(localStorage.getItem('users') || '[]');
});

const register = () => {
  if(!submitValid.value) return;
  if(users.value.find((user:user) => user.account === account.value)) {
    alert('帳號已存在');
    return;
  }
  const user:user = {
    account: account.value + "@gmail.com",
    password: password.value,
    name: name.value,
    role: role.value,
    status: true,
    friends: [],
    id: (users.value.length) + 1
  }
  users.value.push(user);
  alert('註冊成功');
  reset();
};

watch(users, () => {
  localStorage.setItem('users', JSON.stringify(users.value))
}, {deep: true})

const handleAccountInput = () => {
  if (account.value.includes('@')) {
    account.value = account.value.replace(/@/g, '');
    isInputValid.value = false;
  } else {
    isInputValid.value = true;
  }
};


const submitValid = computed(() => {
  const isFill =
    account.value.trim() !== '' &&
    password.value.trim() !== '' &&
    confirmPassword.value.trim() !== '' &&
    name.value.trim() !== '';
  const isPasswordMatch = password.value === confirmPassword.value;
  const isAccountOk = !account.value.includes('@') && isInputValid.value;
  return isFill && isPasswordMatch && isAccountOk;
});

const reset = () => {
  account.value = '';
  password.value = '';
  name.value = '';
  confirmPassword.value = '';
  isInputValid.value = true;
}

const backToLogin = () => {
  router.push({ name: 'loginUser' })
}

</script>
