<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 p-4 md:p-10 lg:p-16 bg-linear-to-br from-[#eef2ff] to-[#f8fafc] items-start">

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
        <div class="flex flex-col md:flex-row gap-5">
          <FloatLabel variant="on" class="flex-1">
            <label for="taskTitle" class="ml-2! font-bold text-slate-400">任務標題</label>
            <InputText id="taskTitle" v-model="taskTitle" class="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!" />
          </FloatLabel>

          <FloatLabel variant="on" class="flex-1">
            <label for="taskContent" class="ml-2! font-bold text-slate-400">詳細內容</label>
            <Textarea id="taskContent" v-model="taskContent" :autoResize="true" rows="1" class="w-full border-none! bg-slate-50/80! rounded-2xl! px-6! pt-6! pb-3! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!" />
          </FloatLabel>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div class="flex items-center gap-3 w-full md:w-auto bg-slate-50/50 p-2 pr-4 rounded-2xl border border-slate-100">
             <div class="flex items-center gap-2 text-sm font-bold text-slate-500 ml-2">
                <i class="pi pi-user-plus text-indigo-400"></i>
                <span>指派給</span>
             </div>
             <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="選擇成員" class="flex-1 md:w-44! border-none! bg-transparent! shadow-none!" />
          </div>

          <Button @click="addTask" class="w-full md:w-auto bg-linear-to-r! from-[#6366f1]! to-[#8b5cf6]! border-none! rounded-2xl! h-14! px-10! font-bold! text-white! shadow-xl! shadow-indigo-100! transition-all active:scale-95! hover:scale-105!">
            <i class="pi pi-plus mr-2"></i>
            <span>新增任務</span>
          </Button>
        </div>
      </div>

      <div class="flex items-center gap-2 mb-6">
        <span class="text-xs font-black text-slate-300 uppercase tracking-widest">任務清單</span>
        <div class="h-[1px] flex-1 bg-slate-100"></div>
      </div>

      <div class="flex flex-col gap-4">
        <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between p-5 bg-white rounded-[1.8rem] border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
          <div class="flex items-center gap-5">
             <div @click="task.isCompleted = !task.isCompleted"
                  class="w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all"
                  :class="task.isCompleted ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-200 hover:border-indigo-300'">
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
            <Button icon="pi pi-pencil" text rounded class="text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!" @click="updateTask()" />
            <Button icon="pi pi-trash" text rounded class="text-slate-300! hover:text-rose-500! hover:bg-rose-50!" @click="deleteTask()" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full max-w-[420px] mx-auto lg:mx-0">
      <Card class="bg-white/80! backdrop-blur-xl! rounded-[2.5rem]! border-none! shadow-2xl! shadow-slate-200/50! p-4">
        <template #title>
          <div class="flex items-center gap-3 text-slate-800 p-2 mb-4">
            <div class="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
               <i class="pi pi-users text-slate-500"></i>
            </div>
            <span class="text-lg font-black tracking-tight">成員狀態</span>
          </div>
        </template>
        <template #content>
          <div class="flex flex-col gap-3">
            <div v-for="friend in friends" :key="friend.id" class="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-transparent hover:border-white hover:bg-white hover:shadow-sm transition-all">
              <div class="flex flex-col gap-0.5">
                <span class="font-bold text-slate-700 text-sm">{{ friend.name }}</span>
                <div class="flex items-center gap-1.5">
                   <div :class="['w-1.5 h-1.5 rounded-full', friend.status ? 'bg-emerald-500' : 'bg-slate-300']"></div>
                   <span class="text-[10px] font-bold text-slate-400">{{ friend.status ? '在線' : '離線' }}</span>
                </div>
              </div>
              <div :class="['w-9 h-9 rounded-full flex items-center justify-center shadow-sm transition-all', friend.status ? 'bg-emerald-500 text-white shadow-emerald-100' : 'bg-slate-200 text-slate-400']">
                <i :class="['pi text-[11px]', friend.status ? 'pi-check' : 'pi-minus']"></i>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Select from 'primevue/select';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' }
]);
const selectedCity = ref();
const taskTitle = ref('');
const taskContent = ref('');

const tasks = ref([
  { id: 1, title: '完成專案架構設計', assignedTo: '小明', isCompleted: false },
  { id: 2, title: '串接 MongoDB 資料庫 API', assignedTo: '阿強', isCompleted: true },
  { id: 3, title: '修飾前端 UI 圓角與間距', assignedTo: '小華', isCompleted: false },
]);

const friends = ref([
  { id: 1, name: '小明',status:true },
  { id: 2, name: '阿強',status:false },
  { id: 3, name: '小華',status:true },
]);

const addTask = () => {
/* 邏輯 */
};
const updateTask = () => { /* 邏輯 */ };
const deleteTask = () => { /* 邏輯 */ };
</script>

