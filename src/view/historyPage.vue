
<template>
    <div class="min-h-screen w-full p-4 md:p-10 lg:p-16 bg-linear-to-br from-[#eef2ff] to-[#f8fafc]">
        <HistoryTodo v-bind="postProps"/>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue';
import HistoryTodo from '@/component/todolist/historyTodo.vue';
import type { taskInterface } from '@/component/type';

const historyTask=ref<taskInterface[]>([]);

onMounted(() => {
  historyTask.value=JSON.parse(localStorage.getItem('historyTasks')||'[]');
})


//取得歷史任務（原始資料）
watch(historyTask,
  JSON.parse(localStorage.getItem('historyTasks')||'[]')
)

//取得登入者
const loginUser=computed(() =>
  JSON.parse(localStorage.getItem('user')||'{}')
);

const postProps = computed(() => ({
    historyTask:historyTask.value,
    loginUser:loginUser.value
  }))

</script>
