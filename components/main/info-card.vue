<template>
  <div
    class="rounded overflow-hidden shadow-lg p-3"
    style="border: 2px solid #22c55e"
  >
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <img :src="nzsu" alt="Sample Image" class="mr-9 w-10 h-16" />
        <p>ПрАТ "КУРОРТ БЕРЕЗІВСЬКІ МІНЕРАЛЬНІ ВОДИ" разом з НСЗУ!</p>
      </div>
      <nuxt-link to="/agreement-nzsu" class="text-primary"
        >Learn more</nuxt-link
      >
    </div>
  </div>
</template>

<style scoped>
.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>

<script setup lang="ts">
import nzsu from "@/assets/images/nzsu.png";
</script>
