<script setup lang="ts">
import NavBar from "./component/NavBar.vue";
import router from "./router";
const route = router.currentRoute;
</script>

<template>
  <header class="sticky top-0 z-50">
    <NavBar v-if="!route.meta.hideNavBar"/>
  </header>
  <main class="flex-1 mt-6">
    <router-view />
  </main>
</template>


