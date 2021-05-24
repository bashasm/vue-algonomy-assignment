import { expect } from "chai";
import { mount } from "@vue/test-utils";
import Chart from "@/components/Chart.vue";

describe("Chart.vue", () => {
  let wrapper;

  beforeEach(() => {
    const title = "orders";
    const chartData = [
      ["Year", "orders"],
      ["04/27/2016", 1685103.46],
      ["04/28/2016", 1409394.37],
    ];

    const chartOptions = {
      legend: { position: "top", alignment: "center" },
      height: "800",
    };
    wrapper = mount(Chart, {
      propsData: { title, chartData, chartOptions },
    });
  });

  it("renders heading length when passed", () => {
    expect(wrapper.findAll("h3").length).to.eq(1);
  });

  it("renders heading text when passed", () => {
    expect(wrapper.find("h3").text()).to.eq("orders");
  });
});
