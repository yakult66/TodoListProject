<template>
  <Card class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  bg-white backdrop-blur-xl rounded-4xl md:rounded-[3rem] border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.01)] p-8 md:p-12">
    <template #title>
      <div class="flex justify-center items-center text-2xl font-bold mb-6 md:mb-10">使用者資料編輯</div>
    </template>
    <template #content >
      <form>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-6">
            <div class="relative flex items-center w-full">
              <InputText
                v-model="account"
                type="text"
                @input="handleAccountInput"
                placeholder="請輸入帳 號"
                :invalid="!account"
                class="w-full border-none! bg-slate-50/80! rounded-2xl! pl-6! pr-28! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
              />
              <span class="absolute right-6 text-slate-400 opacity-60 pointer-events-none select-none font-medium">
                @gmail.com
              </span>
            </div>
            <Message v-if="!account" severity="error" :closable="false" class="mt-2 transition-opacity">
              帳號為必填
            </Message>
            <Message v-if="!isInputValid" severity="error" :closable="false" class="mt-2 transition-opacity">
              帳號格式錯誤，請輸入@gmail.com前的帳號
            </Message>
            <InputText
              v-model="name"
              placeholder="請輸入姓名"
              :invalid="!name"
              class="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
            />
            <Message v-if="!name" severity="error" :closable="false" class="mt-2 transition-opacity">
              姓名為必填
            </Message>
            <Password
              v-model="password"
              placeholder="請輸入密碼"
              :toggleMask="true"
              :feedback="true"
              class="w-full"
              :invalid="!password"
              inputClass="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
              toggleMaskIcon="pi pi-eye"
            />
            <Message v-if="!password" severity="error" :closable="false" class="mt-2 transition-opacity">
              密碼為必填
            </Message>
            <div class="flex flex-wrap gap-4">
              <div class="flex items-center gap-2">
                <RadioButton v-model="role" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1">Cheese</label>
              </div>
              <div class="flex items-center gap-2">
                <RadioButton v-model="role" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2">Mushroom</label>
              </div>
            </div>
          <Button label="編輯" type="submit" class="bg-linear-to-br! border-none! rounded-3xl! w-full" />
        </div>
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
          <span class="font-medium">返回</span>
        </button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref} from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Password from 'primevue/password';
import router from '@/router';
import Message from 'primevue/message';
// eslint-disable-next-line vue/no-dupe-keys
import type { user } from './type.ts';

const props = defineProps<{
  user: user
}>()

const account = ref(props.user.account);
const password = ref(props.user.password);
const name = ref(props.user.name);
const role= ref('');
const isInputValid = ref(true);

const handleAccountInput = () => {
  if (account.value.includes('@')) {
    account.value = account.value.replace(/@/g, '');
    isInputValid.value = false;
  } else {
    isInputValid.value = true;
  }
};

const backToLogin = () => {
  router.push({ name: 'accManager' })
}
</script>
