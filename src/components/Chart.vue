<template>
  <div>
    <h3>{{ title }}</h3>
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "Chart",
  components: {
    GChart,
  },
  props: {
    title: String,
    chartData: Array,
    chartOptions: Object,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* some padding */
h3 {
  position: relative;
  left: 200px;
}
</style>
