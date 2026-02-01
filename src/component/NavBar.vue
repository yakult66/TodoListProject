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
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
            router.push({ name: 'mainPage' });
        }
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'loginout',
        icon: 'pi pi-sign-out',
        class:'',
        command: () => {
            router.push({ name: 'loginPage' });
        }
    }
]);
</script>

