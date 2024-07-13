<template>
  <div class="container">
    <h2 class="text-3xl font-bold mb-6 text-center mt-10">{{ $t('resort_title') }}</h2>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="image in sortedImages" :key="image.src" class="overflow-hidden">
        <img :src="image.src" :alt="'Image ' + image.id" class="w-full h-auto object-cover">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
import image20 from "@/assets/images/20.jpg";
import image21 from "@/assets/images/21.jpg";
import image30 from "@/assets/images/30.jpg";

const images = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  { id: 3, src: image3 },
  { id: 4, src: image4 },
  { id: 5, src: image5 },
  { id: 6, src: image6 },
  { id: 10, src: image10 },
  { id: 11, src: image11 },
  { id: 12, src: image12 },
  { id: 13, src: image13 },
  { id: 14, src: image14 },
  { id: 15, src: image15 },
  { id: 20, src: image20 },
  { id: 21, src: image21 },
  { id: 30, src: image30 },
];
const sortedImages = ref([]);

function sortImagesBySize() {
  Promise.all(images.map(image =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          resolve({ ...image, width: img.width, height: img.height });
        };
        img.src = image.src;
      })
  ))
      .then(imagesWithSizes => {
        sortedImages.value = imagesWithSizes.sort((a, b) => {
          return b.width * b.height - a.width * a.height; // Sort by area (width * height)
        });
      });
}

onMounted(() => {
  sortImagesBySize();
});
</script>

<style>
/* Additional styling can go here */
</style>
