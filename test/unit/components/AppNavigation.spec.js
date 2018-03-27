import Vue from "vue";
import { shallow } from "@vue/test-utils";
import AppNavigationComponent from "@/components/AppNavigation.vue";

describe("AppNavigationComponent", () => {
  const wrapper = shallow(AppNavigationComponent);

  it("should contain menu div", () => {
    const menu = wrapper.find("#menu");
    expect(menu.exists()).toBeTruthy();
  });

  it("should contain div with id dropdown-menu", () => {
    const menu = wrapper.find("#dropdown-menu");
    expect(menu.exists()).toBeTruthy();
  });
});
