<template>
    <div class="fixed top-0 left-0 right-0 z-50">
        <Menubar :model="items" class="rounded-none" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Menubar from 'primevue/menubar';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
    {
        label: 'main',
        icon: 'pi pi-home',
        command: () => {
            router.push({ name: 'mainPage' });
        }
    },
    {
        label: 'history',
        icon: 'pi pi-history',
        command: () => {
            router.push({ name: 'historyPage' });
        }
    },
    {
        label: 'loginout',
        icon: 'pi pi-sign-out',
        command: () => {
            router.push({ name: 'loginPage' });
            localStorage.removeItem('user');
        }
    }
]);
</script>

