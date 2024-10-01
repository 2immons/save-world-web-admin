<script setup lang="ts">
import { ref, onMounted } from "vue";
import anychart from "anychart";

// Наборы данных для разных временных интервалов
const hourlyData = [
  { x: "2024-09-01 01:00", value: 20 },
  { x: "2024-09-01 02:00", value: 40 },
  { x: "2024-09-01 03:00", value: 35 },
  { x: "2024-09-01 04:00", value: 50 },
];

const dailyData = [
  { x: "2024-09-01", value: 150 },
  { x: "2024-09-02", value: 200 },
  { x: "2024-09-03", value: 180 },
  { x: "2024-09-04", value: 300 },
];

const monthlyData = [
  { x: "2024-01", value: 1000 },
  { x: "2024-02", value: 1200 },
  { x: "2024-03", value: 1100 },
  { x: "2024-04", value: 1500 },
];

const chartContainer = ref<HTMLElement | null>(null);

let chart: any = null;

const drawChart = (data: any[]) => {
  if (!chart) {
    chart = anychart.line();
    chart.container(chartContainer.value);
  }

  chart.data(data);

  chart.title("Количество активных пользователей");

  chart.draw();
};

const showHourlyData = () => drawChart(hourlyData);
const showDailyData = () => drawChart(dailyData);
const showMonthlyData = () => drawChart(monthlyData);

onMounted(() => {
  showDailyData();
});
</script>

<template>
  <div>
    <div class="buttons">
      <button @click="showHourlyData">Час</button>
      <button @click="showDailyData">День</button>
      <button @click="showMonthlyData">Месяц</button>
    </div>

    <div
      class="chart-container"
      ref="chartContainer"
      style="width: 100%; height: 350px"
    ></div>
  </div>
</template>

<style scoped lang="sass">
.chart-container
  border: 1px solid transparent
  border-radius: 30px
  overflow: hidden

.buttons
  margin-bottom: 10px

button
  margin-right: 10px
  padding: 5px 10px
  background-color: #4CAF50
  color: white
  border: none
  cursor: pointer
  &:hover
    background-color: #45a049
</style>
