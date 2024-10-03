<script setup lang="ts">
import { ref } from "vue";

const users = ref([
  {
    name: "Имя",
    telegramID: "TG ID",
    ID: "ID332",
    status: true,
    income: 12,
    balance: 123,
    signupDate: "12.12.2002",
    referals: 123,
    donated: 1234,
  },
]);
</script>

<template>
  <section>
    <div class="container">
      <div class="users-list">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>Telegram ID</th>
              <th>ID</th>
              <th>Статус</th>
              <th>Доход</th>
              <th>Баланс</th>
              <th>Зарегистрирован</th>
              <th>Рефералов</th>
              <th>Внесенные<br />средства</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <th>{{ index + 1}}</th>
              <th>{{ user.name }}</th>
              <th>{{ user.telegramID }}</th>
              <th>{{ user.ID }}</th>
              <th>{{ user.status }}</th>
              <th>{{ user.income }}</th>
              <th>{{ user.balance }}</th>
              <th>{{ user.signupDate }}</th>
              <th>{{ user.referals }}</th>
              <th>{{ user.donated }}</th>
            </tr>
          </tbody>
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

.users-list
  width: 100%

table
  border: 1px solid $c-main-text
  width: 100%
  border-collapse: collapse

  th, tr
    border: 1px solid $c-main-text

  thead
    height: 80px
</style>
