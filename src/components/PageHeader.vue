<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: String,
});
</script>

<template>
  <header>
    <h2>{{ props.title }}</h2>
    <hr />
  </header>
</template>

<style scoped lang="sass">
@import "../styles/variables"
header
  height: 100px
  width: 100%

  hr
    border: 1px solid $c-separator
</style>
