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

<style>
.container {
  min-height: 50vh;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #33333d;
  border-top: 1px solid #eee;
}
</style>
