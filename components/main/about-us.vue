<script setup lang="ts">
const carouselItems = [
  {
    image: "https://picsum.photos/1200/600?random=1",
  },
  {
    image: "https://picsum.photos/1200/600?random=2",
  },
  {
    image: "https://picsum.photos/1200/600?random=3",
  },
];
</script>

<template>
  <div>
    <h2 class="text-3xl font-bold mb-6 text-center mt-10">About Us</h2>
    <div class="text-gray-700 mb-2">
      <p>
        КЛІНІЧНИЙ САНАТОРІЙ «КУРОРТ БЕРЕЗІВСЬКІ МІНЕРАЛЬНІ ВОДИ» — перлина Слобожанського краю, один із найстаріших європейських курортів, який базується на технологіях впливу на організм природних і штучних факторів ефективного санаторного етапу реабілітації та відповідає всім сучасним вимогам і стандартам.
        Санаторій відкритий для відвідувачів цілий рік.
        Мінеральна вода «Березівська» за рівнем мінералізації, температури, хімічним складом найбільш близька до води бельгійського курорту Спа та трускавецької «Нафтусі», позитивно впливає на функціональний стан шлунково-кишкового тракту, вуглеводний обмін, стан крові та кровотворно-го апарату, має сечогінну, протизапальну та протиалергічну дію. Маючи високу детоксикуючу дію, вона здатна повністю очистити організм від присутніх у ньому токсинів.
      </p>
    </div>
    <UCarousel
      v-slot="{ item }"
      :items="carouselItems"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden custom-size-about"
      arrows
    >
      <div class="relative w-full h-full flex items-center justify-center">
        <img
          :src="item.image"
          const
          carouselRef="ref();"
          class="w-full h-full object-contain"
          draggable="false"
          alt=""
        />
        <div class="absolute inset-0 bg-black bg-opacity-10" />
      </div>
    </UCarousel>
  </div>
</template>

<style scoped>
.custom-size-about {
  height: 500px;
}
</style>
