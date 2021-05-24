import { expect } from "chai";
import { mount } from "@vue/test-utils";
import MetricsDropdown from "@/components/MetricsDropdown.vue";

describe("MetricsDropdown.vue", () => {
  let wrapper;

  beforeEach(() => {
    const metrics = [
      { key: "sales", value: "Over all sales" },
      { key: "orders", value: "Over all orders" },
      { key: "pageViews", value: "Page views" },
      {
        key: "clickThruRate",
        value: "Page click thru rate",
      },
    ];
    const selectedValue = "orders";

    wrapper = mount(MetricsDropdown, {
      propsData: { metrics, selectedValue },
    });
  });

  it("renders four options when passed", () => {
    expect(wrapper.findAll("option").length).to.eq(4);
  });

  // it("renders selected value when passed", () => {
  //   expect(wrapper.find("select").value).to.eq("orders");
  // });
});
