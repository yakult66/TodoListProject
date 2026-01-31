<template>
  <div class="app-container">
    <div class="glass-card">
      <div class="header-section">
        <div class="title-wrapper">
          <div class="icon-box">
            <i class="pi pi-sparkles"></i>
          </div>
          <h1>代辦事項</h1>
        </div>
      </div>

      <div class="input-group">
        <InputText v-model="value" placeholder="請輸入代辦事項" class="custom-input" />
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="指派成員" class="custom-select" />
        <Button class="add-button" @click="addTask">
           <i class="pi pi-plus"></i>
        </Button>
      </div>

      <div class="task-list">
        <div v-for="task in tasks" :key="task.id"
             class="task-item" :class="{ 'completed': task.isCompleted }">
          <div class="task-content">
            <div class="checkbox" @click="task.isCompleted = !task.isCompleted">
              <i v-if="task.isCompleted" class="pi pi-check"></i>
            </div>
            <div class="text-area">
              <span class="task-title">{{ task.title }}</span>
              <span class="task-badge">@ {{ task.assignedTo }}</span>
            </div>
          </div>
          <div class="actions">
            <Button icon="pi pi-pencil" text rounded class="update-btn" @click="updateTask()" />
            <Button icon="pi pi-trash" text rounded class="delete-btn" @click="deleteTask()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Button from 'primevue/button';
import { ref } from 'vue';

const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const selectedCity = ref();
const value = ref('');

const tasks = ref([
  { id: 1, title: '完成專案架構設計', assignedTo: '小明', isCompleted: false },
  { id: 2, title: '串接 MongoDB 資料庫 API', assignedTo: '阿強', isCompleted: true },
  { id: 3, title: '修飾前端 UI 圓角與間距', assignedTo: '小華', isCompleted: false },
]);
const addTask = () => {

};

const updateTask = () => {

};
const deleteTask = () => {

};


</script>

<style scoped>
.actions {
  display: flex;
  gap: 0.5rem;
}
.app-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
  background: linear-gradient(135deg, #e0e7ff 0%, #f1f5f9 100%);
}

.glass-card {
  width: 90%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.05);
  padding: 3rem;
}

.header-section {
  margin-bottom: 2.5rem;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-box {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
}

.title-wrapper h1 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.025em;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
}

:deep(.custom-input) {
  flex: 1;
  border: none !important;
  background: rgba(255, 255, 255, 0.9) !important;
  border-radius: 1.5rem !important;
  padding: 1rem 1.5rem !important;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.02) !important;
}

:deep(.custom-select) {
  width: 180px;
  border: none !important;
  background: rgba(255, 255, 255, 0.9) !important;
  border-radius: 1.5rem !important;
}

.add-button {
  background: linear-gradient(135deg, #6366f1, #a855f7) !important;
  border: none !important;
  border-radius: 1.5rem !important;
  width: 60px;
  transition: transform 0.2s;
}

.add-button:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
}


.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
  background: white;
  margin-bottom: 1rem;
  border-radius: 1.8rem;
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.task-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.03);
}

.task-content {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.checkbox {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.completed .checkbox {
  background: #10b981;
  border-color: #10b981;
}

.completed .checkbox i {
  color: white;
  font-size: 0.7rem;
}

.task-title {
  display: block;
  font-weight: 600;
  color: #334155;
}

.completed .task-title {
  color: #94a3b8;
  text-decoration: line-through;
}

.task-badge {
  font-size: 0.75rem;
  color: #6366f1;
  background: #eef2ff;
  padding: 0.2rem 0.6rem;
  border-radius: 0.5rem;
  font-weight: 700;
}


.delete-btn, .update-btn {
  color: #cbd5e1 !important;
  font-size: 1.5rem !important;
  transition: all 0.2s ease;
  height: 3rem !important;
  width: 3rem !important;
}

.delete-btn:hover {
  color: #ef4444 !important;
  background: #fef2f2 !important;
}

.update-btn:hover {
  color: #6366f1 !important;
  background: #eef2ff !important;
}
</style>



