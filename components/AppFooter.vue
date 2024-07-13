<template>
  <footer class="bg-green-600 text-white py-8 mt-4">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div>
          <div class="text-center mb-6">
            <h2 class="text-4xl font-bold">{{ $t("resort_title") }}</h2>
          </div>
          <nav class="mt-4 flex justify-center space-x-4">
            <a
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              class="text-white hover:text-gray-200"
              >{{ $t(link.text) }}</a
            >
          </nav>
        </div>
        <div class="mb-4 md:mb-0 hidden sm:block">
          <h3 class="text-lg font-semibold mb-2">{{ $t("contact") }}</h3>
          <p>
            {{ $t("email") }}:
            <a href="mailto:berminvodysanatory@ukr.net"
              >berminvodysanatory@ukr.net</a
            >
          </p>
          <p>
            {{ $t("phone") }}: <a href="tel:+380636913408">+380 63 691 3408</a>
          </p>
          <p>
            {{ $t("adress") }} : Харківська обл., Дергачівський р-н, с.
            Березівське
          </p>
          <a
            href="https://www.facebook.com/berminvodysanatory"
            target="_blank"
            rel="noopener"
            class="text-white hover:text-gray-200"
          >
            <Icon name="uil:facebook" />
          </a>
        </div>
        <!--        <div class="flex space-x-4">-->
        <!--          &lt;!&ndash;          <a&ndash;&gt;-->
        <!--          &lt;!&ndash;            href="https://www.instagram.com"&ndash;&gt;-->
        <!--          &lt;!&ndash;            target="_blank"&ndash;&gt;-->
        <!--          &lt;!&ndash;            rel="noopener"&ndash;&gt;-->
        <!--          &lt;!&ndash;            class="text-white hover:text-gray-200"&ndash;&gt;-->
        <!--          &lt;!&ndash;          >&ndash;&gt;-->
        <!--          &lt;!&ndash;            <Icon name="uil:instagram" />&ndash;&gt;-->
        <!--          &lt;!&ndash;          </a>&ndash;&gt;-->
        <!--        </div>-->
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { href: "/", text: "home" },
  { href: "/resort", text: "resort" },
  { href: "/contact", text: "contact" },
];
</script>
