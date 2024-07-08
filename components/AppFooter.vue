<template>
  <footer class="bg-green-600 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <h3 class="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Phone: <a href="tel:+1234567890" class="text-white hover:text-gray-200">+1 234 567 890</a></p>
          <p>Phone: <a href="tel:+0987654321" class="text-white hover:text-gray-200">+0 987 654 321</a></p>
        </div>
        <div>
          <div class="text-center mb-6">
            <h2 class="text-3xl font-bold">КУРОРТ БЕРЕЗІВСЬКІ МІНЕРАЛЬНІ ВОДИ</h2>
          </div>
          <nav class="mt-4 flex justify-center space-x-4">
            <a v-for="link in links" :key="link.href" :href="link.href" class="text-white hover:text-gray-200">{{ link.text }}</a>
          </nav>
        </div>
        <div class="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener" class="text-white hover:text-gray-200">
            <Icon name="uil:instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener" class="text-white hover:text-gray-200">
            <Icon name="uil:facebook" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/services', text: 'Services' },
  { href: '/contact', text: 'Contact' }
];
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
