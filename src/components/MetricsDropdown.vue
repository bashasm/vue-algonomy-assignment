<template>
  <select :value="selectedValue" @change="onChange($event)">
    <option v-for="item in metrics" :key="item.key" :value="item.key">
      {{ item.value }}
    </option>
  </select>
</template>

<script>
export default {
  name: "MetricsDropdown",
  props: {
    metrics: Array,
    selectedValue: String,
  },
  methods: {
    // change event for the dropdown
    onChange(event) {
      // communicate to the store to udpate the value through action
      this.$store.dispatch("updateTitle", event.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
