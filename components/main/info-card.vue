<template>
  <div class="rounded overflow-hidden shadow-lg p-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img :src="nzsu" alt="Sample Image" class="mr-9 w-10 h-16" />
        <p>
          {{ $t("nzsu_title") }}
        </p>
      </div>
      <nuxt-link to="/agreement-nzsu" class="text-primary">{{
        $t("learn_more")
      }}</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import nzsu from "@/assets/images/nzsu.png";
</script>

<style scoped>
.max-h-120 {
  max-height: 120px;
}
</style>
