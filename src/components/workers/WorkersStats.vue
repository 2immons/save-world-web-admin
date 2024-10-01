<script setup lang="ts">
import CreateTaskForm from "@/components/tasks/CreateTaskForm.vue";
import EditTaskForm from "@/components/tasks/EditTaskForm.vue";
import { ref } from "vue";
import CreateWorkerForm from "@/components/workers/CreateWorkerForm.vue";
import EditWorkerForm from "@/components/workers/EditWorkerForm.vue";
import WorkerListItem from "@/components/workers/WorkerListItem.vue";

const isCreateTaskFormVisible = ref(false);
const isEditFormVisible = ref(false);
const currentWorker = ref();

const openCreateTaskForm = () => {
  isCreateTaskFormVisible.value = true;
};

const openEditForm = (worker: Worker) => {
  currentWorker.value = worker;
  isEditFormVisible.value = true;
};

interface Worker {
  title: string;
  [level: number]: {
    price: number;
    power: number;
  };
  maxLevel: number;
}

const workers = ref([
  {
    title: "Builder",
    levels: {
      1: {
        price: 100,
        power: 50,
      },
      2: {
        price: 200,
        power: 75,
      },
    },
    maxLevel: 2,
  },
  {
    title: "Builder",
    levels: {
      1: {
        price: 100,
        power: 50,
      },
    },
    maxLevel: 1,
  },
]);
</script>

<template>
  <section>
    <CreateWorkerForm
      :modelValue="isCreateTaskFormVisible"
      @update:modelValue="isCreateTaskFormVisible = $event"
    />
    <EditWorkerForm
      :modelValue="isEditFormVisible"
      :worker="currentWorker"
      @update:modelValue="isEditFormVisible = $event"
    />
    <div class="container">
      <div class="tasks-list">
        <h3>Воркеры</h3>
        <button class="create-task-btn" @click="openCreateTaskForm">
          Создать
        </button>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Наименование</th>
              <th>Бонус</th>
              <th></th>
            </tr>
          </thead>
          <WorkerListItem
            @open-edit-modal="openEditForm"
            v-for="(worker, index) in workers"
            :key="index"
            :worker="worker"
            :workerKey="index"
          />
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import "../../styles/variables"
section
  width: 100%
  display: flex
  justify-content: center
  align-items: center
.tasks-list
  width: 100%
  background: $c-active-element
  box-shadow: $c-element-shadow
  border-radius: 12px
  padding: 10px
  position: relative

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
