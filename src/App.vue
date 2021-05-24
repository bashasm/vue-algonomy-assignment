<template>
  <div id="app">
    <MetricsDropdown :metrics="metrics" :selectedValue="chartTitle" />
    <Chart
      :title="chartTitle"
      :chartData="chartData"
      :chartOptions="chartOptions"
    />
  </div>
</template>

<script>
import MetricsDropdown from "./components/MetricsDropdown.vue";
import Chart from "./components/Chart.vue";

export default {
  name: "App",
  components: {
    MetricsDropdown,
    Chart,
  },
  data() {
    return { windowHeight: window.innerHeight };
  },
  mounted() {
    // to set the dynamic height of the chart based on the windows size
    window.addEventListener("resize", () => {
      // we can use the store here, but for a simple case it would be an over kill,
      // if it is used in multiple places this should be moved to store
      this.windowHeight = window.innerHeight;
    });
  },
  computed: {
    metrics() {
      // return the metrics from the state
      return this.$store.state.metrics;
    },
    chartData() {
      // return the specific chart data from state based on chartTitle
      const state = this.$store.state;
      return state["chartData" + state.chartTitle];
    },
    chartOptions() {
      // return the options from the state
      return {
        ...this.$store.state.chartOptions,
        // no need to set the width, as by default it is taking 100%
        // height 100 percent is not supported by google charts
        height: (this.windowHeight - 120).toString(),
      };
    },
    chartTitle() {
      // return the title from the state
      return this.$store.state.chartTitle;
    },
  },
};
</script>

<style></style>
