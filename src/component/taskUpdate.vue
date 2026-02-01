<template>
    <div class="flex items-center justify-between gap-2 z-50">
      <Card>
        <template #title>
          {{ taskTitle }}
        </template>
        <template #content>
          <div>
            <FloatLabel variant="on">
              <Textarea id="on_label" v-model="taskContent" rows="5" cols="30" style="resize: none" />
              <label for="on_label">任務內容</label>
            </FloatLabel>
          </div>
        </template>
      </Card>
    </div>
</template>

<script setup lang="ts">
 import { ref } from 'vue';

 const taskContent = ref('');
 const taskTitle = ref('');
</script>
