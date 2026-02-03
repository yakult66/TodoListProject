<template>
  <div class="w-full max-w-[850px] lg:max-w-[420px] mx-auto lg:mx-0 lg:sticky lg:top-10">
    <Card class="bg-white/80! backdrop-blur-xl! rounded-[2.5rem]! border-none! shadow-2xl! shadow-slate-200/50! p-4">
      <template #title>
        <div class="flex items-center gap-3 text-slate-800 p-2 mb-4">
          <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
            <i class="pi pi-user-plus text-slate-500"></i>
            </div>
            <span class="text-lg font-bold tracking-tight">加入好友</span>
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-4">
            <div class="flex items-center">
              <AutoComplete
                v-model="searchUsers"
                @item-select="addFriend"
                :suggestions="filteredUsers"
                @complete="search"
                optionLabel="account"
                placeholder="請輸入好友帳號"
                class="w-full opacity-90!"
                inputClass="w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!"
                fluid
              >
                <template #option="slotProps">
                  <div class="flex items-center country-item">
                    <div>{{ slotProps.option.account }}</div>
                  </div>
                </template>
              </AutoComplete>
            </div>
            <div class="flex items-center gap-2 mb-6">
              <span class="text-xs font-black text-slate-300 uppercase tracking-widest">好友清單</span>
              <div class="h-px flex-1 bg-slate-100"></div>
            </div>
            <div class="flex flex-col gap-3">
              <div v-for="friend in users[loginUserIndex]?.friends" :key="friend.account" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-white hover:bg-white hover:shadow-md transition-all group">
                <div class="flex flex-col gap-1">
                  <span class="font-bold text-slate-700 text-base">{{ friend.name }}</span>
                  <span class="text-slate-400 text-xs font-medium">{{ friend.account }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
</template>

<script lang="ts" setup>
    import AutoComplete, { type AutoCompleteOptionSelectEvent } from 'primevue/autocomplete';
    import Card from 'primevue/card';
    import type { user, friend } from '@/component/type';
    import { ref } from 'vue';
    import { FilterMatchMode, FilterService } from '@primevue/core/api';

    const searchUsers = ref('');
    const filteredUsers = ref<string[]>([]);

    const receivedProps = defineProps<{
      users: user[];
      loginUserIndex: number;
      loginUser: user;
    }>();

  const addFriend = (event: AutoCompleteOptionSelectEvent) => {
    const targetAccount = event.value.account;
    const regex = /^[a-zA-Z0-9._]+@gmail\.com$/;

    if (receivedProps.loginUserIndex === -1) return;
    const currentUser = receivedProps.users[receivedProps.loginUserIndex];

    const targetUserIndex = receivedProps.users.findIndex(u => u.account === targetAccount);
    if (targetUserIndex === -1) return;
    const targetUser = receivedProps.users[targetUserIndex];

    if (!currentUser) return;
    if (!targetUser) return;
    if (!currentUser.friends) currentUser.friends = [];
    if (!targetUser.friends) targetUser.friends = [];

    const isAlreadyFriend = currentUser.friends.some(f => f.account === targetAccount);
    const isSelf = targetAccount === receivedProps.loginUser.account;

    if (!isAlreadyFriend && !isSelf && regex.test(targetAccount)) {
      const friendDataForTarget: friend = {
        id: targetUser.friends.length + 1,
        account: currentUser.account,
        name: currentUser.name
      };
      targetUser.friends.push(friendDataForTarget);
      const friendDataForMe: friend = {
        id: currentUser.friends.length + 1,
        account: targetUser.account,
        name: targetUser.name
      };
      currentUser.friends.push(friendDataForMe);
      localStorage.setItem('users', JSON.stringify(receivedProps.users));
    }
    searchUsers.value = '';
  };

  const search = (event: { query: string; }) => {

    const query = event.query;
    const filteredItems= FilterService.filter(receivedProps.users, ['account'], query, FilterMatchMode.CONTAINS);
    filteredUsers.value = filteredItems;
}

</script>
