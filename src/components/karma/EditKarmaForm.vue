<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

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

interface LevelDetails {
  levelPrice: number;
  power: number;
}

const levels = ref<Record<number, LevelDetails>>({
  1: {
    levelPrice: NaN,
    power: NaN,
  },
});

const addLevel = () => {
  const newLevel = Object.keys(levels.value).length + 1;
  levels.value[newLevel] = { levelPrice: NaN, power: NaN };
};

enum CardType {
  ECO = "ECO",
  ECO1 = "ECO1",
  ECO2 = "ECO2"
}

const createWorker = async () => {
  const cardInfo = {
    languageNameAndDescriptionMap: {
      RU: {
        name: titles.value[0].title,
        description: descriptions.value[0].description,
      },
      EN: {
        name: titles.value[1].title,
        description: descriptions.value[1].description,
      },
    },
  };

  const cardLevelMap = {
    cardLevelMap: levels.value, // Убедитесь, что levels.value соответствует Record<number, CardParameters>
    maxLevel: Object.keys(levels.value).length, // Устанавливаем максимальный уровень
  };

  const newCardData = {
    name: "Hello",
    cardInfo: cardInfo,
    imageId: 123,
    cardLevelMap: cardLevelMap,
    isStartCard: isBasicWorker.value,
    cardType: CardType.ECO,
  }
  // await cardsStoreInstance.createCard(newCardData)
  const maxLevel = Object.keys(levels.value).length;
  console.log("Создана карточка");
  console.log(maxLevel);
};

const languages = ref(["RU", "EN"]);

// TODO: вынести в миксин
const languageMap: Record<string, string> = {
  RU: "Русский",
  EN: "Английский",
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

const boostValue = ref();
const goal = ref();
const minDonat = ref();
</script>

<template>
  <div class="create-modal-bg" v-if="modelValue" @click="closeForm">
    <div class="container">
      <div class="create-modal" @click.stop>
        <form action="" @submit.prevent>
          <h3>Создание карточки кармы</h3>
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
            <label>Минимальный донат:</label>
            <input v-model="minDonat" type="number" />
          </div>
          <div class="input-wrapper">
            <label>Прибавка в час:</label>
            <input v-model="boostValue" type="number" />
          </div>
          <div class="input-wrapper">
            <label>Общая цель по очкам:</label>
            <input v-model="goal" type="number" />
          </div>
          <button @click="createWorker">Создать карточку</button>
        </form>
        <div class="image-input"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "../../styles/variables"
.create-modal-bg
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

.create-modal
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

