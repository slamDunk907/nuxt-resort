<template>
  <header class="bg-white shadow-md h-20 flex items-center">
    <div class="container mx-auto px-4 flex justify-between items-center h-full">
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
            isActive(link.href) ? 'text-primary font-bold' : ''
          ]"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>
      <div class="hidden md:flex space-x-3">
        <a href="https://www.instagram.com" target="_blank" rel="noopener" class="text-gray-700 hover:text-primary transition duration-300 ease-in-out transform hover:scale-110">
          <Icon name="uil:instagram" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener" class="text-gray-700 hover:text-primary transition duration-300 ease-in-out transform hover:scale-110">
          <Icon name="uil:facebook" />
        </a>
      </div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </div>
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-md">
      <nav class="flex flex-col space-y-2 p-4">
        <NuxtLink
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            :class="[
            'text-lg text-gray-700 transition duration-300 ease-in-out hover:text-primary hover:underline transform hover:scale-105',
            isActive(link.href) ? 'text-primary font-bold' : ''
          ]"
        >
          {{ link.text }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import logo from '@/assets/images/logo.jpg';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
  { href: '/', text: 'Home' },
  { href: '/contact', text: 'Contact' }
];

const route = useRoute();

const isActive = (href: string) => {
  return route.path === href;
};
</script>

<style scoped></style>
