<script setup lang="ts">
import CreateTaskForm from "@/components/tasks/CreateTaskForm.vue";
import EditTaskForm from "@/components/tasks/EditTaskForm.vue";
import { ref } from "vue";
import TaskListItem from "@/components/tasks/TaskListItem.vue";

const isCreateTaskFormVisible = ref(false);
const isEditTaskFormVisible = ref(false);
const currentTask = ref();

interface Task {
  title: string;
}

const tasks = ref([
  {
    title: "22",
  },
  {
    title: "33",
  },
]);

const openCreateTaskForm = () => {
  isCreateTaskFormVisible.value = true;
};

const openEditForm = (task: Task) => {
  currentTask.value = task;
  isEditTaskFormVisible.value = true;
};
</script>

<template>
  <section>
    <CreateTaskForm
      :modelValue="isCreateTaskFormVisible"
      @update:modelValue="isCreateTaskFormVisible = $event"
    />
    <EditTaskForm
      :modelValue="isEditTaskFormVisible"
      :task="currentTask"
      @update:modelValue="isEditTaskFormVisible = $event"
    />
    <div class="container">
      <div class="tasks-list">
        <h3>Задания</h3>
        <button class="create-task-btn" @click="openCreateTaskForm">
          Создать
        </button>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Заголовок</th>
              <th>Награда</th>
              <th></th>
            </tr>
          </thead>
          <TaskListItem
            @open-edit-modal="openEditForm"
            v-for="(task, index) in tasks"
            :key="index"
            :task="task"
            :taskKey="index"
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
