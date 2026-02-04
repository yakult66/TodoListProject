<template>
    <div class="w-full max-w-[1000px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-6 md:p-12 flex flex-col h-fit">
        <DataTable :value="receivedProps.users" scrollable scrollHeight="flex" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]" paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="第 {first} 頁 ｜ 共 {totalRecords} 頁" tableStyle="min-width: 50rem">
                <template #header>
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div class="flex items-center gap-3">
                            <div class="bg-indigo-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg shadow-indigo-200">
                                <i class="pi pi-user text-lg"></i>
                            </div>
                            <span class="text-xl font-bold text-slate-800">帳號管理</span>
                        </div>
                    </div>
                </template>
                <Column field="account" sortable header="帳號" style="min-width: 150px">
                    <template #body="slotProps">
                        <span class="font-bold text-slate-700" >{{ slotProps.data.account }}</span>
                    </template>
                </Column>
                <Column field="name" sortable header="名稱" style="min-width: 200px">
                    <template #body="slotProps">
                        <span class="text-slate-500">{{ slotProps.data.name }}</span>
                    </template>
                </Column>
                <Column field="role" sortable header="角色" style="min-width: 120px">
                    <template #body="slotProps">
                         <span v-if="slotProps.data.role" class="text-[12px] text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-lg font-bold">
                            {{ slotProps.data.role }}
                        </span>
                    </template>
                </Column>
                <Column field="status" sortable header="狀態" style="min-width: 120px">
                    <template #body="slotProps">
                         <span class="text-[12px] {{slotProps.data.status?'text-green-500':'text-red-500'}} bg-indigo-50 px-2.5 py-1 rounded-lg font-bold">
                            {{ slotProps.data.status?'啟用':'停用' }}
                        </span>
                    </template>
                </Column>
                <Column field="edit" header="編輯" style="min-width: 120px" class="flex justify-center">
                    <template #body="slotProps">
                         <div>
                            <Button icon="pi pi-pencil" class="p-button-text rounded-full" @click="showEditDialog=true; user=slotProps.data" />
                            <Button icon="pi pi-trash" class="p-button-text text-red-500 rounded-full" @click="deleteUser(slotProps.data.id)" />
                        </div>
                    </template>
                </Column>
                <template #footer>
                    <div class="text-slate-400 text-sm">
                        總共 {{ receivedProps.users.length }} 筆帳號
                    </div>
                </template>
                <Teleport to="body" class="z-50 ">
                  <accEdit v-if="showEditDialog" @close="showEditDialog=false" :user="user" :showEditDialog="showEditDialog" />
                </Teleport>
          </DataTable>
    </div>
</template>

<script setup lang="ts">
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Button from 'primevue/button';
  import type { user as User} from '../type.ts';
  import accEdit from './accEdit.vue';
  import { ref } from 'vue';

  const user=ref<User>({
    id:0,
    account:'',
    password:'',
    name:'',
    role:'',
    status:true,
  });
  const showEditDialog = ref(false);
  const receivedProps = defineProps<{
    users: User[];
  }>()

  const emit = defineEmits([
    'deleteUser',
    'editUser',
  ])

  const deleteUser = (id:number) => {
    emit('deleteUser',id)
  }

</script>
