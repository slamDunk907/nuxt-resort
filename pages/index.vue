<template>
  <main class="container">
    <h2 class="text-3xl font-bold my-6 text-center">
      КЛІНІЧНИЙ САНАТОРІЙ «КУРОРТ БЕРЕЗІВСЬКІ МІНЕРАЛЬНІ ВОДИ»
    </h2>
    <InfoCard />
    <MainSlider />
    <p>
      Відпочинок в санаторії «Бермінводи» це чудове поєднання унікальних
      оздоровчих процедур, потужної лікувальної бази, висококласного сервісу і
      приємного дозвілля для гостей будь-якого віку і для будь якого бюджету.
      Тут панує гармонія з природою та постійно лунають пташині переліви. . у
      санаторії є власна дієтична iдальня яка розрахована на одночасне всіх
      відпочиваючих. У ідеальні пропонуют попереднє замовлення страв в межах
      призначеної дієти. При особливій важливості для процесу оздоровлення
      збалансованого дієтичного харчування, ті, хто прихав тільки відпочити,
      можуть скористатися ресторанним типом харчування
    </p>
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
