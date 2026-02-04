<template>
    <div class="min-h-screen flex justify-center items-center md:items-start pt-0 md:pt-20 bg-linear-to-br from-[#e0e7ff] to-[#f1f5f9]">
      <router-view v-slot="{ Component }">
        <component :is="Component" :users="users" @register="register" />
      </router-view>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { user } from '@/component/type';

const users=ref();

onMounted(() => {
  users.value = JSON.parse(localStorage.getItem('users')||'[]');
});

const register = (user: user) => {
  users.value.push(user);
  localStorage.setItem('users', JSON.stringify(users.value));
};




</script>
