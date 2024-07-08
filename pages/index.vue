<template>
  <main class="container">
    <div class="flex justify-center py-4">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="relative overflow-hidden custom-size rounded"
        indicators
      >
        <div class="relative w-full h-full flex items-center justify-center">
          <img
            :src="item.image"
            class="w-fit w-full h-full"
            draggable="false"
            alt=""
          />
          <div class="absolute inset-0 bg-black bg-opacity-40"></div>
          <div
            class="absolute flex flex-col items-center text-center text-white"
          >
            <h1 class="text-4xl mb-4">{{ item.title }}</h1>
            <button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
              {{ item.buttonText }}
            </button>
          </div>
        </div>
      </UCarousel>
    </div>
    <div class="mx-auto py-10">
      <h2 class="text-3xl font-bold mb-6 text-center">Treatments</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in treatments"
          :key="index"
          class="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            :src="item.image"
            alt="Card image"
            class="w-full h-64 object-cover"
          />
          <div class="p-6 h-64 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
              <p class="text-gray-700">{{ item.content }}</p>
            </div>
            <button
              class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 transition-colors duration-300 hover:bg-blue-600"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="text-3xl font-bold mb-6 text-center mt-10">About Us</h2>
      <div class="text-center text-gray-700 mb-2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc.
        </p>
      </div>
      <UCarousel
        v-slot="{ item }"
        :items="carouselItems"
        :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden custom-size-about"
        arrows
      >
        <div class="relative w-full h-full flex items-center justify-center">
          <img
            :src="item.image"
            class="w-full h-full object-contain"
            draggable="false"
            alt=""
          />
          <div class="absolute inset-0 bg-black bg-opacity-10" />
        </div>
      </UCarousel>
    </div>
    <div class="mx-auto py-10 bg-pattern">
      <h2 class="text-3xl font-bold mb-6 text-center">Reviews</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="bg-white shadow-md rounded-lg p-6"
        >
          <div class="flex items-center mb-4">
            <img
              :src="review.profileImage"
              alt="Profile image"
              class="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 class="text-xl font-semibold">{{ review.name }}</h3>
              <div class="flex">
                <span v-for="n in 5" :key="n" class="text-yellow-500">
                  <svg
                    v-if="n <= review.rating"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    class="w-5 h-5"
                  >
                    <path
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                      stroke="currentColor"
                      stroke-width="2"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <p
            class="text-gray-700"
            :class="{ 'line-clamp-3': !review.showMore }"
          >
            {{ review.text }}
          </p>
          <button @click="toggleShowMore(index)" class="text-blue-500 mt-2">
            {{ review.showMore ? "Show Less" : "Show More" }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import sliderImageOne from "@/assets/images/main.jpg";
// import sliderImageTwo from '@/assets/images/nszu.jpg';
import sliderImageThree from "@/assets/images/tis.jpg";

const items = [
  {
    image: sliderImageOne,
    title: "Slide 1 Title",
    buttonText: "Slide 1 Button",
  },
  {
    image:
      "https://medprosvita.com.ua/wp-content/uploads/2023/01/zdobutki-peremogi-med-sistemi-ua.jpg",
    title: "Slide 2 Title",
    buttonText: "Slide 2 Button",
  },
  {
    image: sliderImageThree,
    title: "Slide 3 Title",
    buttonText: "Slide 3 Button",
  },
];
const treatments = [
  {
    image: "https://picsum.photos/300/200?random=1",
    title: "Card 1 Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "https://picsum.photos/300/200?random=2",
    title: "Card 2 Title",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "https://picsum.photos/300/200?random=3",
    title: "Card 3 Title",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "https://picsum.photos/300/200?random=4",
    title: "Card 4 Title",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: "https://picsum.photos/300/200?random=5",
    title: "Card 5 Title",
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "https://picsum.photos/300/200?random=6",
    title: "Card 6 Title",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const carouselItems = [
  {
    image: "https://picsum.photos/1200/600?random=1",
  },
  {
    image: "https://picsum.photos/1200/600?random=2",
  },
  {
    image: "https://picsum.photos/1200/600?random=3",
  },
];
const reviews = ref([
  {
    profileImage: "https://picsum.photos/100?random=1",
    name: "John Doe",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    showMore: true,
  },
  {
    profileImage: "https://picsum.photos/100?random=2",
    name: "Jane Smith",
    rating: 4,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showMore: false,
  },
  {
    profileImage: "https://picsum.photos/100?random=3",
    name: "Samuel Green",
    rating: 3,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    showMore: false,
  },
  {
    profileImage: "https://picsum.photos/100?random=4",
    name: "Anna Blue",
    rating: 5,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    showMore: false,
  },
  {
    profileImage: "https://picsum.photos/100?random=5",
    name: "Michael Brown",
    rating: 4,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    showMore: false,
  },
  {
    profileImage: "https://picsum.photos/100?random=6",
    name: "Laura White",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    showMore: true,
  },
]);

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 8000);
});

const toggleShowMore = (index: number) => {
  reviews.value[index].showMore = !reviews.value[index].showMore;
};
</script>

<style scoped>
.custom-size {
  height: 800px;
}

.custom-size-about {
  height: 500px;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
