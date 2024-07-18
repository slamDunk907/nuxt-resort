<template>
  <Head>
    <title>
      Клінічний санаторій «Курорт Березівські мінеральні води» - Перлина
      Слобожанського краю
    </title>
    <meta
      name="description"
      content="Найкращі лікувальні процедури у санаторії Харків. Лікувальний спа-курорт і перлина Слобожанського краю."
    />
    <meta
      name="keywords"
      content="Лікувальний, Санаторій Харків, Найкращі лікувальні процедури, Клінічний санаторій, Курорт Березівські мінеральні води, Лікувальний спа-курорт"
    />
    <meta
      property="og:title"
      content="Клінічний санаторій «Курорт Березівські мінеральні води»"
    />
    <meta
      property="og:description"
      content="Discover the best healing treatments at our Sanatorium in Kharkiv, a gem of the Slobozhanshchyna region."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.berminvody.co.ua/m" />
  </Head>
  <main class="container">
    <h2 class="text-3xl font-bold my-6 text-center">
      {{ $t("resort_title") }}
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
