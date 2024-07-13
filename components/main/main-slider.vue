<script setup lang="ts">
import sliderImageOne from "assets/images/main.jpg";
import sliderImageThree from "assets/images/tis.jpg";
import sliderImageTwo from "assets/images/zdobutki-peremogi-med-sistemi-ua.jpg";

const items = [
  {
    image: sliderImageOne,
    title: "resort_title",
    buttonText: "learn_more",
    subtext:
      "slider_text_one",
  },
  {
    image: sliderImageThree,
    title: "resort_title",
    buttonText: "learn_more",
    subtext:
      "slider_text_two",
  },
  {
    image: sliderImageTwo,
    title: "",
    buttonText: "learn_more",
    subtext: 'nzsu_title',
  },
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 12000);
});
</script>

<template>
  <div class="flex justify-center py-4">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="relative overflow-hidden custom-size rounded"
      indicators
    >
      <div class="relative w-full h-full flex items-center justify-center">
        <img
          :src="item.image"
          class="w-fit w-full h-full"
          draggable="false"
          alt=""
        />
        <div class="absolute inset-0 bg-black bg-opacity-50" />
        <div class="absolute flex flex-col items-center text-center text-white">
          <h1 class="text-4xl mb-1">{{ $t(item.title) }}</h1>
          <h2 class="text-2xl mb-4">{{ $t(item.subtext) }}</h2>
          <NuxtLink to="/contact">
            <UButton size="xl" color="primary" variant="solid">{{
              $t(item.buttonText)
            }}</UButton>
          </NuxtLink>
        </div>
      </div>
    </UCarousel>
  </div>
</template>

<style scoped>
.custom-size {
  height: 800px;
}
</style>
