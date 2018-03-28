<template>
  <div>
    <app-navigation/>
    <app-logo/>
    <nuxt/>
    <footer>
      <app-footer/>
    </footer>
  </div>
</template>

<script>
import AppNavigation from "~/components/AppNavigation.vue";
import AppLogo from "~/components/AppLogo.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: {
    AppNavigation,
    AppLogo,
    AppFooter
  }
};
</script>

<style>
html {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
