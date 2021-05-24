// mutations.spec.js
import { expect } from "chai";
import mutations from "@/store/mutations";

describe("mutations", () => {
  it("updateTitle", () => {
    // mock state
    const state = { chartTitle: "sales" };
    // apply mutation
    mutations.updateTitle(state, "orders");
    // assert result
    expect(state.chartTitle).to.equal("orders");
  });
});
