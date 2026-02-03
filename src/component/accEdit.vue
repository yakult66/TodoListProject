<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <Card class="bg-white backdrop-blur-xl rounded-4xl md:rounded-[3rem] border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.01)] p-8 md:p-12 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
      <template #title>
        <div class="flex justify-center items-center text-2xl font-bold mb-6 md:mb-10">使用者資料編輯</div>
      </template>
      <template #content >
        <form @submit.prevent="editUser">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-8 md:gap-y-6">
              <div class="flex flex-col gap-2 md:col-span-2">
                <label for="account" class="text-slate-600 font-semibold ml-1">帳號</label>
                <div class="relative w-full flex items-center">
                  <InputText
                    id="account"
                    v-model="account"
                    type="text"
                    @input="inValidAccountInput"
                    placeholder="請輸入帳號"
                    :invalid="!account"
                    class="w-full border-none! bg-slate-50/80! rounded-2xl! pl-6! pr-28! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
                  />
                  <span class="absolute right-6 text-slate-400 opacity-60 pointer-events-none select-none font-medium">
                    @gmail.com
                  </span>
                </div>
                <Message v-if="!account" severity="error" :closable="false" class="mt-1">
                  帳號為必填
                </Message>
                <Message v-if="!isInputValid" severity="error" :closable="false" class="mt-1">
                  帳號格式錯誤，請輸入@gmail.com前的帳號
                </Message>
              </div>

              <div class="flex flex-col gap-2">
                <label for="name" class="text-slate-600 font-semibold ml-1">姓名</label>
                <InputText
                  id="name"
                  v-model="name"
                  placeholder="請輸入姓名"
                  :invalid="!name"
                  class="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
                />
                <Message v-if="!name" severity="error" :closable="false" class="mt-1">
                  姓名為必填
                </Message>
              </div>

              <div class="flex flex-col gap-2">
                <label for="password" class="text-slate-600 font-semibold ml-1">密碼</label>
                <Password
                  inputId="password"
                  v-model="password"
                  placeholder="請輸入密碼"
                  :toggleMask="true"
                  :feedback="true"
                  class="w-full"
                  :invalid="!password"
                  inputClass="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
                  toggleMaskIcon="pi pi-eye"
                />
                <Message v-if="!password" severity="error" :closable="false" class="mt-1">
                  密碼為必填
                </Message>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-600 font-semibold ml-1">角色</label>
                <div class="flex gap-4 px-2 h-14 bg-slate-50/80 rounded-2xl items-center shadow-inner">
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

              <div class="flex flex-col gap-2">
                <label class="text-slate-600 font-semibold ml-1">狀態</label>
                <div class="flex items-center gap-3 px-4 h-14 bg-slate-50/80 rounded-2xl shadow-inner">
                   <ToggleSwitch v-model="status" />
                   <span :class="['font-bold transition-colors', status ? 'text-indigo-600' : 'text-slate-400']">{{ status ? '啟用' : '停用' }}</span>
                </div>
              </div>

            <div class="md:col-span-2 mt-2">
                <Button label="編輯" type="submit" class="bg-linear-to-br from-indigo-500 to-purple-600 border-none! rounded-3xl! w-full py-3.5! font-bold! text-lg! shadow-lg hover:shadow-indigo-500/30 transition-shadow" />
            </div>
          </div>
        </form>
      </template>
      <template #footer>
        <div class="flex justify-center w-full mt-4">
          <button
            type="button"
            class="flex items-center gap-2 text-slate-400 hover:text-indigo-600 transition-all duration-300 group bg-transparent border-none cursor-pointer"
            @click="emit('close')"
          >
            <i class="pi pi-arrow-left text-sm group-hover:-translate-x-1 transition-transform"></i>
            <span class="font-medium">返回</span>
          </button>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Password from 'primevue/password';
import Message from 'primevue/message';
import type { user as User } from './type.ts';
import RadioButton from 'primevue/radiobutton';
import ToggleSwitch from 'primevue/toggleswitch';
import { inject } from 'vue';

const accountActions = inject<{ onEditUser: (id: number, user: User) => void }>('accountActions');
const onEditUser = accountActions?.onEditUser;
const props = defineProps<{
  user: User
}>()

const emit = defineEmits(['close', 'save']);

const account = ref(props.user.account);
const password = ref(props.user.password);
const name = ref(props.user.name);
const role= ref(props.user.role);
const status = ref(props.user.status);
const isInputValid = ref(true);

const inValidAccountInput = () => {
  if (account.value.includes('@')) {
    account.value = account.value.replace(/@/g, '');
    isInputValid.value = false;
  } else {
    isInputValid.value = true;
  }
};

const editUser = () => {
  onEditUser?.(props.user.id,{
    account:account.value,
    password:password.value,
    name:name.value,
    role:role.value,
    status:status.value,
    id:props.user.id,
  })
  emit('close');
}
</script>
