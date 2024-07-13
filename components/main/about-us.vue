<script setup lang="ts">
import image1 from "@/assets/images/1.jpg";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.jpg";
import image4 from "@/assets/images/4.jpg";
import image5 from "@/assets/images/5.jpg";
import image6 from "@/assets/images/6.jpg";
import image10 from "@/assets/images/10.jpg";
import image11 from "@/assets/images/11.jpg";
import image12 from "@/assets/images/12.jpg";
import image13 from "@/assets/images/13.jpg";
import image14 from "@/assets/images/14.jpg";
import image15 from "@/assets/images/15.jpg";

const items = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
];
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-6 text-center mt-10">
      {{ $t("about_us") }}
    </h2>
    <div class="text-gray-700 mb-6">
      <p class="mb-2">
        {{ $t("about_us_text") }}
      </p>
      <p>
        {{ $t("diet") }}
      </p>
    </div>

    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
      indicators
      class="rounded-lg overflow-hidden"
    >
      <img :src="item" class="w-full" draggable="false" />
    </UCarousel>
  </div>
</template>
