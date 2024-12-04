<script setup lang="ts">
import { defineEmits, defineProps } from "vue";

interface Worker {
  title: string;
  maxLevel: number;
  levels: {
    [level: number]: {
      price: number;
      power: number;
    };
  };
}

const emits = defineEmits(["open-edit-modal"]);
const props = defineProps<{
  worker: Worker;
  workerKey: number;
}>();
</script>

<template>
  <tr>
    <th>{{ props.workerKey + 1 }}</th>
    <th>{{ props.worker.title }}</th>
    <th>
      <table class="inner-table">
        <thead class="inner-table__header">
          <tr>
            <th width="20%">LVL</th>
            <th width="40%">Стоимость</th>
            <th width="40%">Доход</th>
          </tr>
        </thead>
        <tr v-for="level in Object.keys(props.worker.levels)" :key="level">
          <th>{{ level }}</th>
          <th>{{ props.worker.levels[Number(level)].price }}</th>
          <th>{{ props.worker.levels[Number(level)].power }}</th>
        </tr>
      </table>
    </th>
    <th class="buttons-column">
      <div class="buttons">
        <button @click="emits('open-edit-modal', props.worker)">
          <img src="../../assets/svg/crud-icons/edit.svg" alt="Edit" />
        </button>
        <button>
          <img src="../../assets/svg/crud-icons/delete.svg" alt="Delete" />
        </button>
      </div>
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

.inner-table
  border: none
  border-collapse: collapse
  tr, th
    border: none

  .inner-table__header
    background: $c-accent-element

.buttons-column
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  width: 100%
  height: 100%
  border: none

.buttons
  display: flex

  button
    display: flex
    justify-content: center
    align-items: center
    padding: 5px 10px
</style>
