<script setup lang="ts">
import { ref } from "vue";

const sideMenuClass = ref("side-menu");
const sideMenuBgClass = ref("side-menu-bg");
const isSideMenuOpen = ref(false);
const navClass = ref("nav");

const openSideMenu = () => {
  sideMenuBgClass.value = "side-menu-bg--open";
  sideMenuClass.value = "side-menu--open";
  isSideMenuOpen.value = true;
  navClass.value = "nav--open";
};

const closeSideMenu = () => {
  sideMenuBgClass.value = "side-menu-bg";
  sideMenuClass.value = "side-menu";
  isSideMenuOpen.value = false;
  navClass.value = "nav";
};
</script>

<template>
  <div :class="sideMenuBgClass" @click="closeSideMenu">
    <aside :class="sideMenuClass" @click.stop @click="openSideMenu">
      <h1>Save World Web</h1>
      <hr />
      <div class="side-menu__content">
        <nav :class="navClass">
          <router-link to="/stats" class="nav-item">
            <img src="../assets/svg/stats.svg" alt="" />
            <p v-show="isSideMenuOpen">Мониторинг</p>
          </router-link>
          <router-link to="/tasks" class="nav-item">
            <img src="../assets/svg/tasks.svg" alt="" />
            <p v-show="isSideMenuOpen">Задания</p>
          </router-link>
          <router-link to="/workers" class="nav-item">
            <img src="../assets/svg/mining.svg" alt="" />
            <p v-show="isSideMenuOpen">Майнинг карточки</p>
          </router-link>
          <router-link to="/karma" class="nav-item">
            <img src="../assets/svg/karma.svg" alt="" />
            <p v-show="isSideMenuOpen">Карма</p>
          </router-link>
          <router-link to="/users" class="nav-item">
            <img src="../assets/svg/users.svg" alt="" />
            <p v-show="isSideMenuOpen">Пользователи</p>
          </router-link>
          <router-link to="/messages" class="nav-item">
            <img src="../assets/svg/messages.svg" alt="" />
            <p v-show="isSideMenuOpen">Рассылки</p>
          </router-link>
        </nav>
      </div>
    </aside>
  </div>
</template>

<style scoped lang="sass">
@import "../styles/variables"
.side-menu-bg, .side-menu-bg--open
  position: absolute
  width: 0
  height: 100%

.side-menu, .side-menu--open
  position: absolute
  background: $c-active-element
  box-shadow: $c-element-shadow
  width: 70px
  height: 100%
  transition: 0.3s ease
  z-index: 1

  h1
    font-size: 20px
  hr
    border: 1px solid $c-main-text
    margin: 10px 0

.side-menu--open
  width: 250px
.side-menu-bg--open
  width: 100vw

.side-menu__content
  padding: 10px

.nav, .nav--open
  display: flex
  flex-direction: column
  gap: 10px
  justify-content: center
  align-items: center

.nav--open
  align-items: start

.nav-item
  display: flex
  gap: 10px
</style>
