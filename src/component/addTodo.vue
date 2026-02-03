<template>
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
          <div v-for="task in myselfTasks" :key="task.id" class="flex items-center justify-between p-5 bg-white rounded-[1.8rem] border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
            <div class="flex items-center gap-5">
              <!-- todo -->
              <div @click="task.isCompleted = !task.isCompleted;removeHistory(task.id)" class="w-7 h-7 rounded-full border-2 cursor-pointer flex items-center justify-center transition-all" :class="task.isCompleted ? 'bg-emerald-500 border-emerald-500' : 'bg-white border-slate-200 hover:border-indigo-300'">
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
import type { taskInterface ,friend,user} from '@/component/type';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import FloatLabel from 'primevue/floatlabel';
import Message from 'primevue/message';
import TaskDetail from './taskDetail.vue';

  const showEditDialog = ref(false);
  const showLookDialog = ref(false);
  const submitValid = ref(false);
  const taskTitle = ref('');
  const taskContent = ref('');
  const assignedFriend = ref<friend | null>(null);
  const myselfTasks = computed(() => {
    const tasks = receivedProps.tasks as taskInterface[];
    return tasks.filter(task => task.createUser === receivedProps.loginUser.account);
  })


  const emit = defineEmits(['add-task','delete-task','save-task-update','remove-history']);

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


  const addTask = () => {
    if (validateForm()) return;
    const newTask:taskInterface = {
      id: Date.now(),
      title: taskTitle.value,
      content: taskContent.value,
      assignedTo: assignedFriend.value?.name,
      isCompleted: false,
      createUser: receivedProps.loginUser.account,
    }

    emit('add-task', newTask);
    taskTitle.value = '';
    taskContent.value = '';
    assignedFriend.value = null;
    submitValid.value = false;
  };

  const deleteTask = (taskId: number) => {
    const currentTask=myselfTasks.value.find(task => task.id === taskId);
    if(currentTask){
      emit('delete-task', taskId);
    }
  };

  const saveTaskUpdate = (updatedTask: taskInterface) => {
    const currentTask=myselfTasks.value.find(task => task.id === updatedTask.id);
    if(currentTask){
      emit('save-task-update', updatedTask);
    }
  };

  const removeHistory = (taskId:number) => {
    const historyTask=myselfTasks.value.find(task => task.id === taskId);
    if(historyTask){
      emit('remove-history',historyTask);
    }
}

  const validateForm = () => {
    if (!taskTitle.value.trim()) {
      submitValid.value = true;
      return true;
    }
    submitValid.value = false;
    return false;
  };
</script>
