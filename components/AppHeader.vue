<template>
  <header class="bg-white shadow-md h-20 flex items-center">
    <div
      class="container mx-auto px-4 flex justify-between items-center h-full"
    >
      <div class="text-xl font-bold">
        <NuxtLink to="/">
          <img :src="logo" alt="MyLogo" class="h-20 w-20 object-contain" />
        </NuxtLink>
      </div>
      <nav class="hidden md:flex space-x-8">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          :class="[
            'text-lg text-gray-700 transition duration-300 ease-in-out hover:text-primary transform hover:scale-105',
            isActive(link.href) ? 'text-primary font-bold' : '',
          ]"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>
      <div class="flex items-center justify-between space-x-2">
        <USelect v-model="language" :options="languages" class="mr-3">
          <template #trailing>
            <UIcon name="i-heroicons-language" class="w-5 h-5" />
          </template>
        </USelect>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener"
          class="text-gray-700 hover:text-primary transition duration-300 ease-in-out transform hover:scale-110"
        >
          <Icon name="uil:instagram" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener"
          class="text-gray-700 hover:text-primary transition duration-300 ease-in-out transform hover:scale-110"
        >
          <Icon name="uil:facebook" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import logo from "@/assets/images/logo.jpg";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
  { href: "/", text: "Home" },
  { href: "/agreement-nzsu", text: "Agreement with nzsu" },
  { href: "/resort", text: "Resort" },
  { href: "/contact", text: "Contact" },
];

const languages = ["УКР", "ENG"];
const language = ref(languages[0]);

const route = useRoute();

const isActive = (href: string) => {
  return route.path === href;
};
</script>

<style scoped></style>
