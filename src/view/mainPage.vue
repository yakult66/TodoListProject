<template>
  <div class="min-h-screen grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 p-4 md:p-10 lg:p-16 bg-linear-to-br from-[#eef2ff] to-[#f8fafc] items-start">

    <div class="flex flex-col gap-8 w-full">
      <AddTodo v-bind="postProps" @add-task="addTask" @delete-task="deleteTask" @save-task-update="saveTaskUpdate" @remove-history="removeHistory" />
      <AssignTodo v-bind="postProps" @delete-task="deleteTask" @save-task-update="saveTaskUpdate" @remove-history="removeHistory"/>
      <AddFriend v-bind="postFriendProps"/>
    </div>



  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch } from 'vue';
import AddTodo from '@/component/addTodo.vue';
import AssignTodo from '@/component/assignTodo.vue';
import AddFriend from '@/component/addFriend.vue';
import type { taskInterface,user } from '@/component/type';

const historyTasks = ref<taskInterface[]>([]);
const tasks = ref<taskInterface[]>([]);
const users = ref<user[]>([]);
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


onMounted(() => {
  tasks.value = JSON.parse(localStorage.getItem('tasks')||'[]');
  users.value = JSON.parse(localStorage.getItem('users')||'[]');
  loginUser.value = JSON.parse(localStorage.getItem('user')||'{}');
  historyTasks.value=JSON.parse(localStorage.getItem('historyTasks')||'[]');
})

const postProps = computed(() => ({
  tasks: tasks.value,
  loginUserIndex: loginUserIndex.value,
  loginUser: loginUser.value,
  users: users.value
}));

const postFriendProps = computed(() => ({
  users: users.value,
  loginUserIndex: loginUserIndex.value,
  loginUser: loginUser.value
}));

//留者
watch(tasks, (newVal) => {
  localStorage.setItem('tasks', JSON.stringify(newVal));
}, { deep: true });

const addTask = (newTask: taskInterface) => {
  tasks.value.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
};

const deleteTask = (taskId: number) => {
  tasks.value = tasks.value.filter(task => task.id !== taskId);
};

  const saveTaskUpdate = (taskId:number,updatedTask: taskInterface) => {
  const index = tasks.value.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    tasks.value[index] = updatedTask;
  }
};


const removeHistory = () => {
  const tasksCopy = [...tasks.value];
  if (historyTasks.value.length === 0 || historyTasks.value === undefined) {
   historyTasks.value=[];
  }
  historyTasks.value = tasksCopy.filter(task => (task.createUser === loginUser.value.account || task.assignedTo === loginUser.value.name )&& task.isCompleted === true );

  localStorage.setItem('historyTasks', JSON.stringify(historyTasks.value));
  tasks.value=tasks.value.filter(task=>task.isCompleted===false);
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
}


</script>

