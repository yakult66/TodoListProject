
<template>
    <div class="w-full max-w-[1000px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-6 md:p-12 flex flex-col h-fit">
        <DataTable v-model:filters="filters" filterDisplay="menu" :value="props.users" scrollable scrollHeight="flex" paginator :rows="rows" :rowsPerPageOptions="[5, 10, 20, 50]" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="第 {first} 頁 ｜ 共 {totalPages} 頁" tableStyle="min-width: 50rem" :globalFilterFields="['title', 'content', 'assignedTo', 'createUser']">
            <template #header>
                <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div class="flex items-center gap-3">
                        <div class="bg-indigo-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-200">
                            <i class="pi pi-users text-lg"></i>
                        </div>
                        <span class="text-xl font-bold text-slate-800">所有使用者</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <Button icon="pi pi-filter" label="清除篩選" @click="clearFilter()" class="!bg-transparent !border !border-slate-300 !text-slate-500 hover:!bg-slate-50" />
                    </div>
                </div>
            </template>
            <Column field="account" sortable header="帳號" style="min-width: 150px">
                <template #body="slotProps">
                    <span class="font-bold text-slate-700" >{{ slotProps.data.account }}</span>
                </template>
                <template #filter="{ filterModel }">
                  <InputText v-model="filterModel.value" type="text" placeholder="Search by account" />
                </template>
            </Column>
            <Column field="name" sortable header="姓名" style="min-width: 200px">
                <template #body="slotProps">
                    <span class="text-slate-500">{{ slotProps.data.name }}</span>
                </template>
                <template #filter="{ filterModel }">
                  <InputText v-model="filterModel.value" type="text" placeholder="Search by name" />
                </template>
            </Column>
            <Column field="role" sortable header="角色" style="min-width: 120px">
                <template #body="slotProps">
                      <span v-if="slotProps.data.role" class="text-[12px] text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg font-bold">
                        @ {{ slotProps.data.role }}
                    </span>
                </template>
                <template #filter="{ filterModel }">
                  <InputText v-model="filterModel.value" type="text" placeholder="Search by assignedTo" />
                </template>
            </Column>
            <Column field="status" sortable header="狀態" style="min-width: 120px ">
                <template #body="slotProps">
                      <span class="text-[12px] text-center text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg font-bold">
                        {{ slotProps.data.status?'使用中':'停用' }}
                    </span>
                </template>
                <template #filter="{ filterModel }">
                  <InputText v-model="filterModel.value" type="text" placeholder="Search by status" />
                </template>
            </Column>
            <template #footer>
                <div class="text-slate-400 text-sm">
                    總共 {{ props.users.length }} 筆使用者
                </div>
            </template>
        </DataTable>
    </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { FilterMatchMode } from '@primevue/core';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import type { user as usersInterface} from '../type';

const props = defineProps({
    users: {
        type: Array as () => usersInterface[],
        required: true
    }
})

const rows = ref(5);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const totalPages = computed(() => {
    return Math.ceil(props.users.length / rows.value);
});

const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        title: { value: null, matchMode: FilterMatchMode.CONTAINS },
        content: { value: null, matchMode: FilterMatchMode.CONTAINS },
        assignedTo: { value: null, matchMode: FilterMatchMode.CONTAINS },
        createUser: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
};

initFilters();

const clearFilter = () => {
    initFilters();
};

</script>
