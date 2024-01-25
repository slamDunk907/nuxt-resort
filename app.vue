<template>
  <AppHeader />
  <div class="page pt-[150px]">
    <NuxtPage />
  </div>
  <AppFooter />
</template>
<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
};
</script>
