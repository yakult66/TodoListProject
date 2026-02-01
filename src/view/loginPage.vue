<template>
    <div class="min-h-screen flex justify-center items-center md:items-start pt-0 md:pt-20 bg-linear-to-br from-[#e0e7ff] to-[#f1f5f9]">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
</template>

<script setup lang="ts">

</script>
