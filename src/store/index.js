import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import reportData from "./data/report.json";
import mutations from "./mutations";

Vue.use(Vuex);

const metrics = [
  { key: "sales", value: "Over all sales" },
  { key: "orders", value: "Over all orders" },
  { key: "pageViews", value: "Page views" },
  {
    key: "clickThruRate",
    value: "Page click thru rate",
  },
];

function parseChartData({ key, value }) {
  const data = [
    // need to return the header as the first item
    ["Year", value],
    ...reportData.records.map((item) => {
      // need to return an array for each item
      return [item.date, item[key]];
    }),
  ];
  return data;
}

export default new Vuex.Store({
  state: {
    // metrics with 'value' to display and 'key' for internal use
    metrics,
    chartTitle: "sales",
    // prepare the data specific to the four set of keys, to avoid reparsing
    chartDatasales: parseChartData(metrics[0]),
    chartDataorders: parseChartData(metrics[1]),
    chartDatapageViews: parseChartData(metrics[2]),
    chartDataclickThruRate: parseChartData(metrics[3]),
    chartOptions: {
      legend: { position: "top", alignment: "center" },
    },
  },
  mutations,
  actions,
  modules: {},
});
