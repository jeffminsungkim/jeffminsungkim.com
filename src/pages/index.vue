<template>
  <section class="container">
    <app-content/>
  </section>
</template>

<script>
import AppContent from "~/components/AppContent.vue";

export default {
  components: {
    AppContent
  }
};
</script>

<style scoped>

.container {
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #33333d;
}

</style>
