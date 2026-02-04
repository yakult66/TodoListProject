
<template>
    <div class="min-h-screen w-full p-4 md:p-10 lg:p-16 bg-linear-to-br from-[#eef2ff] to-[#f8fafc]">
        <div class="w-full max-w-[1000px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-6 md:p-12 flex flex-col h-fit">
            <DataTable :value="taskDataShow" scrollable scrollHeight="flex" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="第 {first} 頁 ｜ 共 {totalRecords} 頁" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div class="flex items-center gap-3">
                            <div class="bg-indigo-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-200">
                                <i class="pi pi-history text-lg"></i>
                            </div>
                            <span class="text-xl font-bold text-slate-800">歷史完成事項</span>
                        </div>
                    </div>
                </template>
                <Column field="title" sortable header="標題" style="min-width: 150px">
                    <template #body="slotProps">
                        <span class="font-bold text-slate-700" >{{ slotProps.data.title }}</span>
                    </template>
                </Column>
                <Column field="content" sortable header="內容" style="min-width: 200px">
                    <template #body="slotProps">
                        <span class="text-slate-500">{{ slotProps.data.content }}</span>
                    </template>
                </Column>
                <Column field="assignedTo" sortable header="指派給" style="min-width: 120px">
                    <template #body="slotProps">
                         <span v-if="slotProps.data.assignedTo" class="text-[12px] text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg font-bold">
                            @ {{ slotProps.data.assignedTo }}
                        </span>
                    </template>
                </Column>
                <Column field="createUser" sortable header="建立者" style="min-width: 120px ">
                    <template #body="slotProps">
                         <span v-if="slotProps.data.createUser" class="text-[12px] text-center text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg font-bold">
                            @ {{ slotProps.data.createUser }}
                        </span>
                    </template>
                </Column>
                <template #footer>
                    <div class="text-slate-400 text-sm">
                        總共 {{ historyTasks.length }} 筆完成事項
                    </div>
                </template>
            </DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import type { taskInterface } from '@/component/type';

const historyTasks=computed(() =>
  JSON.parse(localStorage.getItem('historyTasks')||'[]')
);

const loginUser=computed(() =>
  JSON.parse(localStorage.getItem('user')||'{}')
);

const taskDataShow=computed(() => historyTasks.value.filter((task:taskInterface) =>task.createUser === loginUser.value.account || task.assignedTo === loginUser.value.name ));



</script>
