<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Task {
  title: string;
}

const props = defineProps<{
  modelValue: boolean;
  task: Task;
}>();
const emit = defineEmits(["update:modelValue"]);

const closeForm = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <div class="edit-modal-bg" v-if="modelValue" @click="closeForm">
    <div class="container">
      <div class="edit-modal" @click.stop>
        <p>{{ props.task.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../../styles/variables"
.edit-modal-bg
  position: absolute
  height: 100vh
  top: 0
  width: 100%
  z-index: 3
  box-shadow: $c-element-shadow
  background: rgba(0, 0, 0, 0.45)
  display: flex
  justify-content: center
  align-items: center

.edit-modal
  height: 300px
  width: 90%
  background: red
</style>
