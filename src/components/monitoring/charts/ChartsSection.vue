<script setup lang="ts">
import ActiveUsersChart from "@/components/monitoring/charts/ActiveUsersChart.vue";
import ReferalsSignupsChart from "@/components/monitoring/charts/ReferalsSignupsChart.vue";
import SignupsChart from "@/components/monitoring/charts/SignupsChart.vue";
</script>

<template>
  <section>
    <div class="container">
      <div class="chart-wrapper chart-wrapper-signups">
        <SignupsChart />
      </div>
      <div class="chart-wrapper chart-wrapper--referals">
        <ReferalsSignupsChart />
      </div>
      <div class="chart-wrapper chart-wrapper--users">
        <ActiveUsersChart />
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
section
  width: 100%
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap

.container
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  row-gap: 20px

.chart-wrapper
  width: 49%
  height: fit-content

.chart-wrapper--users
  width: 100%
</style>
