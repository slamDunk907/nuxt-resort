<template>
  <header class="bg-white text-black p-4 fixed top-0 left-0 w-full z-10">
    <div class="flex justify-end">
      <div class="flex justify-between mr-2">
        <img src="~/assets/images/phone.svg" alt="phone" />
        <p class="text-[#d2d2d2]">+38 (050) 405-80-07</p>
      </div>
      <div class="flex justify-between mr-2">
        <img src="~/assets/images/phone.svg" alt="phone" />
        <p class="text-[#d2d2d2]">+38 (05355) 5-21-25</p>
      </div>
      <div class="flex justify-between mr-2">
        <img src="~/assets/images/phone.svg" alt="phone" />
        <p class="text-[#d2d2d2]">+38 (044) 287-06-06</p>
      </div>
      <img class="mr-2" src="~/assets/images/facebook.svg" alt="facebook" />
      <img src="~/assets/images/youtube.svg" alt="youtube" />
    </div>
    <div class="flex justify-between">
      <nuxt-link to="/"
        ><img src="~/assets/images/logo.png" alt="logo"
      /></nuxt-link>

      <nav class="mx-auto flex justify-between items-center space-x-10">
        <nuxt-link to="/about">
          <span
            class="hover-link font-bold font-sm leading-normal tracking-wide"
          >
            О НАС
          </span>
        </nuxt-link>
        <span class="hover-link font-sm font-bold leading-normal tracking-wide"
          >НАПРАВЛЕНИЯ ОЗДОРОВЛЕНИЯ</span
        >
        <span class="hover-link font-sm font-bold leading-normal tracking-wide"
          >ЦЕНЫ</span
        >
        <nuxt-link to="/wellness-programs">
          <span
            class="hover-link font-sm font-bold leading-normal tracking-wide"
            >ОЗДОРОВИТЕЛЬНЫЕ ПРОГРАММЫ</span
          >
        </nuxt-link>
        <nuxt-link to="/gallery">
          <span
            class="hover-link font-sm font-bold leading-normal tracking-wide"
            >ГАЛЕРЕЯ</span
          >
        </nuxt-link>
        <span class="hover-link font-sm font-bold leading-normal tracking-wide"
          >БЛОГ</span
        >
        <nuxt-link to="/contact">
          <span
            class="hover-link font-sm font-bold leading-normal tracking-wide"
            >КОНТАКТЫ</span
          >
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.hover-link {
  position: relative;
  text-decoration: none;
  color: #333;
  transition: color 0.3s;
}

.hover-link:hover {
  color: #dc0101;
}

.hover-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: #dc0101;
  transition: width 0.3s ease-out;
  margin-top: 5px;
}

.hover-link:hover::before {
  width: 70%;
}
</style>
<script setup lang="ts"></script>
