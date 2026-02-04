
<template>
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
          <div v-for="task in assignedTasks" :key="task.id" class="flex items-center justify-between p-5 bg-white rounded-[1.8rem] border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
            <div class="flex items-center gap-5">
              <div @click="task.isCompleted = !task.isCompleted ; removeHistory(task.id)" class="w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all" :class="task.isCompleted ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-200 hover:border-indigo-300'">
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
              <Button icon="pi pi-eye" text rounded class="text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!" @click="task;showLookDialog=true" />
              <Button icon="pi pi-pencil" text rounded class="text-slate-300! hover:text-indigo-500! hover:bg-indigo-50!" @click="task;showEditDialog=true" />
              <Button icon="pi pi-trash" text rounded class="text-slate-300! hover:text-rose-500! hover:bg-rose-50!" @click="deleteTask(task.id)" />
            </div>
            <Teleport to="body">
              <TaskDetail v-if="showEditDialog || showLookDialog" @close="showEditDialog=false;showLookDialog=false" @save="saveTaskUpdate" :task="task" :showEditDialog="showEditDialog" :showLookDialog="showLookDialog" />
            </Teleport>
          </div>
        </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { taskInterface,user } from '@/component/type';
import Button from 'primevue/button';
import TaskDetail from './taskDetail.vue';

const showEditDialog = ref(false);
const showLookDialog = ref(false);

const emit=defineEmits(['delete-task','save-task-update','remove-history']);
const receivedProps = defineProps({
    tasks: {
      type: Array as () => taskInterface[],
      required: true
    },
    loginUserIndex: {
      type: Number,
      required: true
    },
    loginUser: {
      type: Object,
      required: true
    },
    users: {
      type: Array as () => user[],
      required: true
    }
  })

const assignedTasks = computed(() => {
  return receivedProps.tasks.filter(t => t.assignedTo === receivedProps.loginUser.name);
})
const deleteTask = (taskId: number) => {
    const currentTask=assignedTasks.value.find(task => task.id === taskId);
    if(currentTask){
      emit('delete-task', taskId);
    }
  };

const saveTaskUpdate = (updatedTask: taskInterface) => {
    const currentTask=assignedTasks.value.find(task => task.id === updatedTask.id);
    if(currentTask){
      emit('save-task-update', updatedTask);
    }
  };

const removeHistory = (taskId:number) => {
    emit('remove-history',taskId);
}
</script>
