<template>
    <div>
      <router-view v-slot="{Component}">
        <component :is="Component" v-bind="postProps" />
      </router-view>
    </div>
</template>

<script setup lang="ts">
  import type { user } from '@/component/type';
  import { ref,onMounted,computed, provide } from 'vue';

  const users=ref<user[]>([]);

  onMounted(() => {
    users.value=JSON.parse(localStorage.getItem('users')||'[]');
  })

  const onEditUser = (userId:number,newUser:user) => {
    users.value=users.value.map(
      user=>user.id===userId?newUser:user);
    localStorage.setItem('users',JSON.stringify(users.value));
  }

  const onDeleteUser=(userId:number)=>{
    users.value=users.value.filter(user=>user.id!==userId);
    localStorage.setItem('users',JSON.stringify(users.value));
  }

  const postProps = computed(() => ({
    users: users.value,
    onDeleteUser: onDeleteUser,
    onEditUser: onEditUser
  }))

  provide('accountActions', {
    users,
    onEditUser,
    onDeleteUser,
  });
</script>
