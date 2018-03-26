import Vue from "vue";
import jsdom from "jsdom";
import HelloWorldComponent from "../../../components/HelloWorld.vue";

const renderer = require("vue-server-renderer").createRenderer();

describe("Test suite for HelloWorldComponent", () => {
  it("should return Hello World! greeting message", () => {
    const ClonedComponent = Vue.extend(HelloWorldComponent);
    const cc = new ClonedComponent({
      data() {
        return {
          greeting: "Hello World!"
        };
      }
    }).$mount();
    renderer.renderToString(cc, (err, str) => {
      const dom = new jsdom.JSDOM(str);
      const firstHeading = dom.window.document.querySelector("h1");
      expect(firstHeading.textContent).toContain("Hello World!");
    });
  });
});
