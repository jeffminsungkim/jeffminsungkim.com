import { shallow } from "@vue/test-utils";
import AppLogoComponent from "@/components/AppLogo.vue";

describe("AppLogoComponent", () => {
  const wrapper = shallow(AppLogoComponent);
  const logoTxt = "JeffMinsungKim";
  const taglineTxt = "Awesome Personal Website";

  it("should contain class for logo", () => {
    const classLogo = wrapper.find(".VueToJmkLogo");
    expect(classLogo.exists()).toBeTruthy();
  });

  it(`should contain logo ${logoTxt} and ${taglineTxt}`, () => {
    const logo = wrapper.find("#logo");
    const tagLine = wrapper.find("#tagline");

    expect(logo.exists()).toBeTruthy();
    expect(logo.text()).toContain(logoTxt);
    expect(tagLine.exists()).toBeTruthy();
    expect(tagLine.text()).toContain(taglineTxt);
  });
});
