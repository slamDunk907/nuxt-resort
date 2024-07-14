<template>
  <div class="container">
    <img :src="nzsu" alt="nzsu" class="hidden sm:block" />
    <div class="content">
      <h1>{{ $t("nzsu_title") }}</h1>
      <p>{{ $t("nzsu_text") }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import nzsu from "assets/images/nszu.jpg";
</script>

<style scoped>
img {
  width: 100%;
  height: 580px;
  margin-bottom: 20px;
}
</style>
