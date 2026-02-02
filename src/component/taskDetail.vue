<template>
  <div v-if="props.showEditDialog || props.showLookDialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 gap-4">
    <Card>
      <template #title>
        <div class="flex items-center gap-2">
            <FloatLabel variant="on">
              <InputText id="editTaskTitle" v-model="taskTitle" :disabled="props.showLookDialog?true:false" :placeholder="taskTitle" class="w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!" />
              <label for="editTaskTitle">任務標題</label>
            </FloatLabel>
          </div>
        </template>
        <template #content>
          <div class="flex items-center gap-2">
            <FloatLabel variant="on">
              <Textarea id="editTaskContent" v-model="taskContent" :disabled="props.showLookDialog?true:false" rows="5" cols="30" style="resize: none" :placeholder="taskContent" class="w-full border! bg-slate-50/80! rounded-2xl! px-6! py-4! shadow-inner! outline-none focus:ring-2! focus:ring-indigo-100! transition-all!" />
              <label for="editTaskContent">任務內容</label>
            </FloatLabel>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end gap-3 pt-2 ">
            <Button label="取消" @click="emit('close')" v-if="props.showEditDialog" class="px-6! h-10! rounded-xl! font-bold! bg-slate-100! text-slate-500! border-none! hover:bg-slate-200!"/>
            <Button label="儲存" @click="emit('save', { ...props.task, title: taskTitle, content: taskContent }),emit('close')" v-if="props.showEditDialog"  class="px-6! h-10! rounded-xl! font-bold! bg-indigo-500! border-indigo-500! shadow-lg! shadow-indigo-200!"/>
            <Button label="離開" @click="emit('close')"  v-if="props.showLookDialog" class="px-6! h-10! rounded-xl! font-bold! bg-slate-100! text-slate-500! border-none! hover:bg-slate-200!"/>
          </div>
        </template>
      </Card>
    </div>
</template>

<script setup lang="ts">
 import { ref,onMounted } from 'vue';
 import Textarea from 'primevue/textarea';
 import FloatLabel from 'primevue/floatlabel';
 import Card from 'primevue/card';
 import Button from 'primevue/button';
 import InputText from 'primevue/inputtext';

 const props = defineProps({
    showLookDialog: {
        type: Boolean,
        default: false
    },
    showEditDialog: {
        type: Boolean,
        default: false
    },
    task: {
        type: Object,
        default: () => ({})
    }
 });
 const emit = defineEmits(['close','save']);
 const taskContent = ref('');
 const taskTitle = ref('');

 onMounted(() => {
    taskContent.value = props.task.content;
    taskTitle.value = props.task.title;
 });


</script>
