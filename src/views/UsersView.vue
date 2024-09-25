<template>
  <SideMenu />
  <main>
    <PageHeader title="Управление пользователями" />
  </main>
</template>

<script lang="ts" setup>
import SideMenu from "@/components/SideMenu.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>

<style lang="sass" scoped>
@import "../styles/variables"
main
  position: absolute
  left: 70px
  display: flex
  flex-direction: column
  align-items: center
  width: calc(100% - 70px)
</style>
