<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:modelValue"]);

const closeForm = () => {
  emit("update:modelValue", false);
};
</script>

<template>
  <div class="create-task-bg" v-show="modelValue" @click="closeForm">
    <div class="create-task-modal" @click.stop></div>
  </div>
</template>

<style scoped lang="sass">
.create-task-bg
  position: absolute
  height: 100vh
  top: 0
  width: 100%
  z-index: 3
  background: rgba(0, 0, 0, 0.45)
  display: flex
  justify-content: center
  align-items: center

.create-task-modal
  height: 300px
  width: 90%
  background: red
</style>
