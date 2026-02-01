<template>
  <div class="min-h-screen flex justify-center items-start pt-20 bg-linear-to-br from-[#e0e7ff] to-[#f1f5f9]">
    <div class="w-[90%] max-w-[800px] bg-white/70 backdrop-blur-[20px] rounded-[3rem] border border-white/40 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] p-12">

      <div class="mb-10">
        <div class="flex items-center gap-4">
          <div class="bg-linear-to-br from-[#6366f1] to-[#8b5cf6] text-white w-[45px] h-[45px] flex items-center justify-center rounded-2xl shadow-[0_10px_15px_-3px_rgba(99,102,241,0.3)]">
            <i class="pi pi-sparkles"></i>
          </div>
          <h1 class="text-[1.8rem] font-extrabold text-[#1e293b] tracking-tight">代辦事項</h1>
        </div>
      </div>

      <div class="flex gap-4 mb-12">
        <InputText
          v-model="value"
          placeholder="請輸入代辦事項"
          class="flex-1 border-none! bg-white/90! rounded-3xl! px-6! py-4! shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]! outline-none"
        />
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="指派成員"
          class="w-[180px]! border-none! bg-white/90! rounded-3xl! flex! items-center!"
        />
        <Button
          class="bg-linear-to-br! from-[#6366f1]! to-[#a855f7]! border-none! rounded-3xl! w-[60px]! transition-transform hover:scale-105! active:scale-95! shadow-[0_10px_20px_rgba(99,102,241,0.3)]!"
          @click="addTask"
        >
          <i class="pi pi-plus"></i>
        </Button>
      </div>

      <div class="flex flex-col gap-4">
        <div
          v-for="task in tasks" :key="task.id"
          class="flex items-center justify-between p-[1.2rem_1.5rem] bg-white rounded-[1.8rem] border border-[#f1f5f9] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.03)]"
          :class="{ 'opacity-70': task.isCompleted }"
        >
          <div class="flex items-center gap-5">
            <div
              @click="task.isCompleted = !task.isCompleted"
              class="w-[26px] h-[26px] rounded-full border-2 border-[#e2e8f0] cursor-pointer flex items-center justify-center transition-all"
              :class="task.isCompleted ? 'bg-[#10b981] border-[#10b981]' : 'bg-white'"
            >
              <i v-if="task.isCompleted" class="pi pi-check text-white text-[0.7rem]"></i>
            </div>

            <div class="flex flex-col">
              <span class="font-semibold text-[#334155]" :class="{ 'line-through text-[#94a3b8]': task.isCompleted }">
                {{ task.title }}
              </span>
              <span class="text-[0.75rem] text-[#6366f1] bg-[#eef2ff] px-2.5 py-0.5 rounded-lg font-bold w-fit mt-1">
                @ {{ task.assignedTo }}
              </span>
            </div>
          </div>

          <div class="flex gap-2">
            <Button
              icon="pi pi-pencil"
              text rounded
              class="text-[#cbd5e1]! hover:text-[#6366f1]! hover:bg-[#eef2ff]! w-12! h-12! transition-colors!"
              @click="updateTask()"
            />
            <Button
              icon="pi pi-trash"
              text rounded
              class="text-[#cbd5e1]! hover:text-[#ef4444]! hover:bg-[#fef2f2]! w-12! h-12! transition-colors!"
              @click="deleteTask()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' }
]);
const selectedCity = ref();
const value = ref('');

const tasks = ref([
  { id: 1, title: '完成專案架構設計', assignedTo: '小明', isCompleted: false },
  { id: 2, title: '串接 MongoDB 資料庫 API', assignedTo: '阿強', isCompleted: true },
  { id: 3, title: '修飾前端 UI 圓角與間距', assignedTo: '小華', isCompleted: false },
]);

const addTask = () => { /* 邏輯 */ };
const updateTask = () => { /* 邏輯 */ };
const deleteTask = () => { /* 邏輯 */ };
</script>

