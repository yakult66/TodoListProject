<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 p-4 md:p-10 lg:p-16 bg-linear-to-br from-[#eef2ff] to-[#f8fafc] items-start">

    <div class="flex flex-col gap-8 w-full">

      <div class="w-full max-w-[850px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 flex flex-col h-fit">
        <div class="mb-10 flex items-center gap-4">
          <div class="bg-linear-to-tr from-[#6366f1] to-[#a855f7] text-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg shadow-indigo-200">
            <i class="pi pi-sparkles text-lg"></i>
          </div>
          <div>
            <h1 class="text-2xl font-black text-slate-800 tracking-tight">待辦事項</h1>
            <p class="text-slate-400 text-xs font-medium">新增與查看待辦事項</p>
          </div>
        </div>

        <div class="flex flex-col gap-6 mb-16 w-full">
          <form @submit="addTask"> <div class="flex flex-col md:flex-row gap-5">
              <FloatLabel variant="on" class="flex-1">
                <label for="taskTitle" class="ml-2! font-bold text-slate-400">任務標題</label>
                <InputText id="taskTitle" v-model="taskTitle" :invalid="submitValid && !taskTitle" class="w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!" />
                <Message v-if="submitValid && !taskTitle" severity="error" :closable="false" class="mt-2 transition-opacity">任務標題為必填</Message>
              </FloatLabel>
              <FloatLabel variant="on" class="flex-1">
                <label for="taskContent" class="ml-2! font-bold text-slate-400">詳細內容</label>
                <Textarea id="taskContent" v-model="taskContent" :autoResize="true" rows="1" class="w-full border! bg-slate-50/80! rounded-2xl! px-6! pt-6! pb-3! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!" />
              </FloatLabel>
            </div>
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 w-full mt-6">
              <div class="flex items-center gap-3 w-full md:w-auto bg-slate-50/50 p-2 pr-4 rounded-2xl border border-slate-100">
                <div class="flex items-center gap-2 text-sm font-bold text-slate-500 ml-2">
                  <i class="pi pi-user-plus text-indigo-400"></i>
                  <span>指派給</span>
                </div>
                <Select v-model="assignedFriend" :options="users[loginUserIndex]?.friends" optionLabel="name" placeholder="選擇指派對象" class="flex-1 md:w-44! border-none! bg-transparent! shadow-none!" />
              </div>
              <Button @click="addTask" class="w-full md:w-auto bg-linear-to-r! from-[#6366f1]! to-[#8b5cf6]! border-none! rounded-2xl! h-14! px-10! font-bold! text-white! shadow-xl! shadow-indigo-100! transition-all active:scale-95! hover:scale-105!">
                <i class="pi pi-plus mr-2"></i>
                <span>新增任務</span>
              </Button>
            </div>
          </form>
        </div>

        <div class="flex items-center gap-2 mb-6">
          <span class="text-xs font-black text-slate-300 uppercase tracking-widest">任務清單</span>
          <div class="h-px flex-1 bg-slate-100"></div>
        </div>

        <div class="flex flex-col gap-4">
          <div v-for="task in (tasks.filter(task => task.createUser === loginUser.account))" :key="task.id" class="flex items-center justify-between p-5 bg-white rounded-[1.8rem] border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
            <div class="flex items-center gap-5">
              <!-- todo -->
              <div @click="task.isCompleted = !task.isCompleted;reHistory()" class="w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all" :class="task.isCompleted ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-200 hover:border-indigo-300'">
                <i v-if="task.isCompleted" class="pi pi-check text-white text-[12px]"></i>
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-slate-700 text-base" :class="{ 'line-through text-slate-400 opacity-60': task.isCompleted }">{{ task.title }}</span>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-[10px] text-indigo-500 bg-indigo-50 px-2.5 py-0.5 rounded-lg font-bold">@ {{ task.assignedTo }}</span>
                </div>
              </div>
            </div>
            <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button icon="pi pi-eye" text rounded class="text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!" @click="currentTask= task;showLookDialog=true" />
              <Button icon="pi pi-pencil" text rounded class="text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!" @click="currentTask= task;showEditDialog=true" />
              <Button icon="pi pi-trash" text rounded class="text-slate-300! hover:text-rose-500! hover:bg-rose-50!" @click="deleteTask(task.id)" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-[850px] mx-auto bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] p-8 md:p-12 flex flex-col h-fit">
        <div class="mb-10 flex items-center gap-4">
          <div class="bg-linear-to-tr from-[#6366f1] to-[#a855f7] text-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-lg shadow-indigo-200">
            <i class="pi pi-sparkles text-lg"></i>
          </div>
          <div>
            <h1 class="text-2xl font-black text-slate-800 tracking-tight">被指派事項</h1>
            <p class="text-slate-400 text-xs font-medium">查看被指派的事項</p>
          </div>
        </div>

        <div class="flex flex-col gap-6 w-full">
          <div v-for="task in (tasks.filter(task => task.assignedTo === loginUser.name))" :key="task.id" class="flex items-center justify-between p-5 bg-white rounded-[1.8rem] border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
            <div class="flex items-center gap-5">
              <div @click="task.isCompleted = !task.isCompleted" class="w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all" :class="task.isCompleted ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-200 hover:border-indigo-300'">
                <i v-if="task.isCompleted" class="pi pi-check text-white text-[12px]"></i>
              </div>
              <div class="flex flex-col">
                <span class="font-bold text-slate-700 text-base" :class="{ 'line-through text-slate-400 opacity-60': task.isCompleted }">{{ task.title }}</span>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-[10px] text-indigo-500 bg-indigo-50 px-2.5 py-0.5 rounded-lg font-bold">@ {{ task.assignedTo }}</span>
                </div>
              </div>
            </div>
            <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button icon="pi pi-eye" text rounded class="text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!" @click="currentTask= task;showLookDialog=true" />
              <Button icon="pi pi-pencil" text rounded class="text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!" @click="currentTask= task;showEditDialog=true" />
              <Button icon="pi pi-trash" text rounded class="text-slate-300! hover:text-rose-500! hover:bg-rose-50!" @click="deleteTask(task.id)" />
            </div>
          </div>
        </div>
      </div>
    </div>
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

    <Teleport to="body">
      <TaskDetail v-if="showEditDialog || showLookDialog" @close="showEditDialog=false;showLookDialog=false" @save="saveTaskUpdate" :task="currentTask" :showEditDialog="showEditDialog" :showLookDialog="showLookDialog" />
    </Teleport>

  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch } from 'vue';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import FloatLabel from 'primevue/floatlabel';
import TaskDetail from '@/component/taskDetail.vue';
import { FilterMatchMode, FilterService } from '@primevue/core/api';
import AutoComplete, { type AutoCompleteOptionSelectEvent } from 'primevue/autocomplete';

interface tasks {
    id:number,
    title:string,
    assignedTo?:string,
    isCompleted:boolean,
    content?:string,
    createUser?:string
}

interface user {
    id:number,
    name:string,
    account:string,
    password:string,
    status?:boolean,
    friends?:friend[]
}

interface friend {
    id:number,
    account:string,
    name:string
}

const assignedFriend = ref();
const taskTitle = ref('');
const taskContent = ref('');
const submitValid = ref(false);
const tasks = ref<tasks[]>([]);
const showEditDialog = ref(false);
const showLookDialog = ref(false);
const currentTask = ref<tasks >({
    id: 0,
    title: '',
    isCompleted: false
});
const users = ref<user[]>([]);
const filteredUsers = ref<string[]>([]);
const searchUsers = ref('');
const loginUser = ref<user>({
    id: 0,
    name:'',
    account: '',
    password: '',
    status: false,
    friends:[]
});
const loginUserIndex = computed(() => {
  return users.value.findIndex(u => u.account === loginUser.value.account);
});

const historyTasks = ref<tasks[]>([]);

//初始化
onMounted(() => {
  tasks.value = JSON.parse(localStorage.getItem('tasks')||'[]');
  users.value = JSON.parse(localStorage.getItem('users')||'[]');
  loginUser.value = JSON.parse(localStorage.getItem('user')||'{}');
  historyTasks.value=JSON.parse(localStorage.getItem('historyTasks')||'[]');
})

const validateForm = () => {
  if (!taskTitle.value.trim()) {
    submitValid.value = true;
    return true;
  }
  submitValid.value = false;
  return false;
};

const addTask = () => {

  if (validateForm()) return;
  console.log(tasks.value.length);
  tasks.value.push({
    id: tasks.value.length + 1,
    title: taskTitle.value,
    content: taskContent?.value,
    assignedTo: assignedFriend.value?.name,
    isCompleted: false,
    createUser: loginUser.value.account
  });

  taskTitle.value = '';
  taskContent.value = '';
  assignedFriend.value = null;
  submitValid.value = false;
};

watch(tasks, (newVal) => {
  localStorage.setItem('tasks', JSON.stringify(newVal));
}, { deep: true });

const search = (event: { query: unknown; }) => {

    const query = event.query;
    const filteredItems= FilterService.filter(users.value, ['account'], query, FilterMatchMode.CONTAINS);
    filteredUsers.value = filteredItems;
}

const addFriend = (event: AutoCompleteOptionSelectEvent) => {
  const targetAccount = event.value.account;
  const regex = /^[a-zA-Z0-9._]+@gmail\.com$/;

  if (loginUserIndex.value === -1) return;
  const currentUser = users.value[loginUserIndex.value];

  const targetUserIndex = users.value.findIndex(u => u.account === targetAccount);
  if (targetUserIndex === -1) return;
  const targetUser = users.value[targetUserIndex];

  if (!currentUser) return;
  if (!targetUser) return;
  if (!currentUser.friends) currentUser.friends = [];
  if (!targetUser.friends) targetUser.friends = [];

  const isAlreadyFriend = currentUser.friends.some(f => f.account === targetAccount);
  const isSelf = targetAccount === loginUser.value.account;

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
    localStorage.setItem('users', JSON.stringify(users.value));
  }
  searchUsers.value = '';
};

const deleteTask = (taskId: number) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId);
 };

  const saveTaskUpdate = (updatedTask: tasks) => {
  const index = tasks.value.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.value[index] = updatedTask;
  }
};

const reHistory = () => {
  console.log('reHistory');
  const tasksCopy = [...tasks.value];
  console.log(tasksCopy);
  if (historyTasks.value.length === 0 || historyTasks.value === undefined) {
   historyTasks.value=[];
  }
  historyTasks.value = tasksCopy.filter(task => (task.createUser === loginUser.value.account || task.assignedTo === loginUser.value.account )&& task.isCompleted === true );
  console.log(historyTasks.value);
  localStorage.setItem('historyTasks', JSON.stringify(historyTasks.value));
}


</script>

