<template>
  <main class="container">
    <h2 class="text-3xl font-bold my-6 text-center">
      {{ $t('resort_title') }}
    </h2>
    <InfoCard />
    <MainSlider />
    <Treatments />
    <AboutUs />
    <Rewiews />
    <InfoCard />
  </main>
</template>

<script setup lang="ts">
import InfoCard from "@/components/main/info-card.vue";
import MainSlider from "@/components/main/main-slider.vue";
import Treatments from "@/components/main/treatments.vue";
import AboutUs from "@/components/main/about-us.vue";
import Rewiews from "@/components/main/rewiews.vue";
</script>

<style scoped></style>
