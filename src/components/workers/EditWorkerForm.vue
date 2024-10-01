<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

interface Worker {
  title: string;
  [level: number]: {
    price: number;
    power: number;
  };
  maxLevel: number;
}

const props = defineProps<{
  modelValue: boolean;
  worker: Worker;
}>();
const emit = defineEmits(["update:modelValue"]);

const closeForm = () => {
  emit("update:modelValue", false);
};

interface LevelDetails {
  price: number;
  power: number;
}

const levels = ref<Record<number, LevelDetails>>({
  1: {
    price: NaN,
    power: NaN,
  },
});

const addLevel = () => {
  const newLevel = Object.keys(levels.value).length + 1;
  levels.value[newLevel] = { price: NaN, power: NaN };
};

const editWorker = () => {
  const maxLevel = Object.keys(levels.value).length;
  console.log("Изменена карточка");
  console.log(maxLevel);
};

const languages = ref(["ru", "en"]);

// TODO: вынести в миксин
const languageMap: Record<string, string> = {
  ru: "Русский",
  en: "Английский",
};

const titles = ref(
  languages.value.map((language) => ({
    language,
    title: "",
    displayLanguage: languageMap[language],
  }))
);
const descriptions = ref(
  languages.value.map((language) => ({
    language,
    description: "",
    displayLanguage: languageMap[language],
  }))
);

const isBasicWorker = ref(false);
</script>

<template>
  <div class="edit-modal-bg" v-if="modelValue" @click="closeForm">
    <div class="container">
      <div class="edit-modal" @click.stop>
        <form action="" @submit.prevent>
          <h3>Изменение карточки</h3>
          <h4>Названия</h4>
          <div class="titles">
            <div
              v-for="(item, index) in titles"
              :key="index"
              class="input-wrapper"
            >
              <label>{{ item.displayLanguage }}</label>
              <input type="text" v-model="item.title" />
            </div>
          </div>
          <h4>Описания</h4>
          <div class="descriptions">
            <div
              v-for="(item, index) in descriptions"
              :key="index"
              class="input-wrapper"
            >
              <label>{{ item.displayLanguage }}</label>
              <textarea v-model="item.description" />
            </div>
          </div>
          <div class="input-wrapper">
            <label>Цвет</label>
            <input type="text" />
          </div>
          <div class="input-wrapper input-wrapper--long">
            <label>Является базовой</label>
            <input type="checkbox" v-model="isBasicWorker" />
          </div>
          <h4>Уровни</h4>
          <div class="levels">
            <table class="table-levels">
              <thead>
                <tr>
                  <th width="20%">Уровень</th>
                  <th width="40%">Стоимость</th>
                  <th width="40%">Доход</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(levelDetails, level) in levels" :key="level">
                  <th>{{ level }}</th>
                  <th>
                    <input type="number" v-model.number="levelDetails.price" />
                  </th>
                  <th>
                    <input type="number" v-model.number="levelDetails.power" />
                  </th>
                </tr>
              </tbody>
            </table>
            <button type="button" @click="addLevel">Добавить</button>
          </div>
          <button @click="editWorker">Изменить карточку</button>
        </form>
        <div class="image-input"></div>
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
  border-radius: 12px
  height: fit-content
  padding: 15px
  width: fit-content
  background: $c-active-element
  display: grid
  grid-template-columns: 3fr 2fr
  gap: 15px

form
  display: flex
  flex-direction: column
  align-items: start
  gap: 10px
  width: 100%

  h3, h4
    align-self: center
    justify-self: center

.titles, .descriptions
  display: flex
  flex-direction: column
  gap: 10px

.input-wrapper
  display: flex
  align-items: center

  label
    width: 110px
    text-align: left

.input-wrapper--long
  label
    width: 150px

.levels
  width: 100%

.table-levels
  width: 100%
  text-align: center

textarea
  font-family: "Poppins", sans-serif
  padding: 5px
  font-size: 14px
  min-height: 35px
  min-width: 220px
  max-width: 400px
  max-height: 150px

.image-input
  background: gray
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
</style>
