<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

interface Task {
  title: string;
}

const emits = defineEmits(["open-edit-modal"]);
const props = defineProps<{
  task: Task;
  taskKey: number;
}>();
</script>

<template>
  <tr>
    <th>{{ props.taskKey + 1 }}</th>
    <th>{{ props.task.title }}</th>
    <th>222</th>
    <th class="buttons-column">
      <button @click="emits('open-edit-modal', props.task)">
        <img src="../../assets/svg/crud-icons/edit.svg" alt="" />
      </button>
      <button>
        <img src="../../assets/svg/crud-icons/delete.svg" alt="" />
      </button>
    </th>
  </tr>
</template>

<style scoped lang="sass">
@import "../../styles/variables"
table
  border-collapse: collapse
  width: 100%
  border: 1px solid $c-main-text

  tr, th
    border: 1px solid $c-main-text

  tr
    height: 35px

.buttons-column
  display: flex
  justify-content: space-around
  align-items: center
  width: 100%
  height: 100%
  border: none

  button
    display: flex
    justify-content: center
    align-items: center
    padding: 5px 10px
</style>
