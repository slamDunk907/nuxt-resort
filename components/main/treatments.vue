<script setup lang="ts">
const treatments = [
  {
    image: "https://www.nuozu.edu.ua/images/Novosti/15-05-23-v1.png",
    title: "functional_diagnostics_title",
    content: "functional_diagnostics_content",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKHxJNtOLs172EZEmA7a1CcGpLM5zTXIoZQ&s",
    title: "phys_title",
    content: "phys_content",
  },
  {
    image: "https://www.uralsan.ru/wp-content/uploads/2020/07/41.jpg",
    title: "balneal_title",
    content: "balneal_content",
  },
  {
    image: "https://ua.all.biz/img/ua/service_catalog/418225.jpeg",
    title: "heal_shower_title",
    content: "heal_shower_content",
  },
  {
    image:
      "https://shkolamm.ru//wp-content/uploads/2018/11/12151201713080929-1024x683.jpg",
    title: "massage_title",
    content: "massage_content",
  },
  {
    image: "https://imgs.sanatoriums.com/w1200h1200q90m/treatment/19073.jpg",
    title: "heat_therapy_title",
    content: "heat_therapy_content",
  },
  {
    image:
      "https://wiki.nvmk.org.ua/images/c/c9/%D0%9E%D0%B7%D0%BE%D0%BA%D0%B5%D1%80%D0%B8%D1%82.jpg",
    title: "aerotherapeutics_title",
    content: "aerotherapeutics_content",
  },
  {
    image:
      "https://expert-health.com.ua/wp-content/uploads/2022/08/plasmapheresis.jpg",
    title: "efferent_therapy",
    content: "efferent_content",
  },
  {
    image: "https://onco-expert.com.ua/assets/images/news-20.jpg",
    title: "alternative_therapy_title",
    content: "alternative_therapy_content",
  },
];

const formatService = (service: string): string => {
  return service.replace(":", ":<br/>");
};

const showModal = ref(false);
const selectedTreatment = ref(null);

const openModal = (treatment: any) => {
  selectedTreatment.value = treatment;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<template>
  <div class="mx-auto pt-10 pb-2">
    <h2 class="text-3xl font-bold mb-6 text-center">{{ $t("diagnostic") }}</h2>
    <p class="mb-6">
      {{ $t("diagnostic_text") }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="(item, index) in treatments"
        :key="index"
        class="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col justify-between"
      >
        <img
          :src="item.image"
          alt="Treatment image"
          class="w-full h-64 object-cover"
        />
        <div class="p-6 flex-grow">
          <h3 class="text-xl font-semibold mb-2">{{ $t(item.title) }}</h3>
          <ul>
            <p
              v-html="
                $t(item.content)
                  .split(';')
                  .map(formatService)
                  .slice(0, 7)
                  .join('<br/>')
              "
            />
          </ul>
        </div>
        <UButton
          size="xl"
          color="primary"
          variant="solid"
          class="w-full rounded-none"
          @click="openModal(item)"
        >
          {{ $t("learn_more") }}
        </UButton>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="bg-white p-5 rounded-lg shadow-lg w-3xl">
          <h3 class="text-xl font-bold">{{ $t(selectedTreatment.title) }}</h3>
          <p
            v-html="
              $t(selectedTreatment.content)
                .split(';')
                .map(formatService)
                .join('<br/>')
            "
          />
          <UDivider class="my-3" />
          <NuxtLink to="/contact">
            <UButton class="mt-4 mr-3" color="primary">
              {{ $t("learn_more") }}
            </UButton>
          </NuxtLink>
          <UButton class="mt-4" color="red" @click="closeModal">
            {{ $t("close") }}
          </UButton>
        </div>
      </div>
    </transition>
    <p class="mt-4">{{ $t("treatment_info") }}</p>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
