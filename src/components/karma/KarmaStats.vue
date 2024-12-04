<script setup lang="ts">
import CreateTaskForm from "@/components/tasks/CreateTaskForm.vue";
import EditTaskForm from "@/components/tasks/EditTaskForm.vue";
import { ref } from "vue";
import KarmaListItem from "@/components/karma/KarmaListItem.vue";
import CreateKarmaForm from "@/components/karma/CreateKarmaForm.vue";
import EditKarmaForm from "@/components/karma/EditKarmaForm.vue";

const isCreateFormVisible = ref(false);
const isEditFormVisible = ref(false);
const currentTask = ref();

interface Task {
  title: string;
}

const tasks = ref([
  {
    title: "223",
  },
  {
    title: "33",
  },
]);

const openCreateForm = () => {
  isCreateFormVisible.value = true;
};

const openEditForm = (task: Task) => {
  currentTask.value = task;
  isEditFormVisible.value = true;
};
</script>

<template>
  <section>
    <CreateKarmaForm
      :modelValue="isCreateFormVisible"
      @update:modelValue="isCreateFormVisible = $event"
    />
    <EditKarmaForm
      :modelValue="isEditFormVisible"
      :task="currentTask"
      @update:modelValue="isEditFormVisible = $event"
    />
    <div class="container">
      <div class="tasks-list">
        <h3>Статистика карточек кармы</h3>
        <button class="create-task-btn" @click="openCreateForm">
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
          <KarmaListItem
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
