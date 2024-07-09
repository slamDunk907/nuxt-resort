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
    <h2 class="text-3xl font-bold mb-6 text-center mt-10">About Us</h2>
    <div class="text-gray-700 mb-6">
      <p class="mb-2">
        КЛІНІЧНИЙ САНАТОРІЙ «КУРОРТ БЕРЕЗІВСЬКІ МІНЕРАЛЬНІ ВОДИ» — перлина
        Слобожанського краю, один із найстаріших європейських курортів, який
        базується на технологіях впливу на організм природних і штучних факторів
        ефективного санаторного етапу реабілітації та відповідає всім сучасним
        вимогам і стандартам. Санаторій відкритий для відвідувачів цілий рік.
        Мінеральна вода «Березівська» за рівнем мінералізації, температури,
        хімічним складом найбільш близька до води бельгійського курорту Спа та
        трускавецької «Нафтусі», позитивно впливає на функціональний стан
        шлунково-кишкового тракту, вуглеводний обмін, стан крові та
        кровотворно-го апарату, має сечогінну, протизапальну та протиалергічну
        дію. Маючи високу детоксикуючу дію, вона здатна повністю очистити
        організм від присутніх у ньому токсинів.
      </p>
      <p>
        У санаторії є власна дієтична їдальня яка розрахована на одночасне
        харчування всіх відпочиваючих. У їдальні пропонують попередне замовлення
        страв в межах призначеної дієти. При особливій важливості для процесу
        оздоровлення збалансованого дієтичного харчування, ті, хто приїхав
        тільки відпочити, можуть скористатися ресторанним типом харчування.
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

<style scoped>
.custom-size-about {
  height: 500px;
}
</style>
