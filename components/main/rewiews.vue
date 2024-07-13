<script setup lang="ts">
import { ref, onMounted } from "vue";

const reviews = ref([
  {
    profileImage: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    name: "ЛЮБОВЬ\n",
    rating: 5,
    date: '29.11.2021\n',
    text: "с 28.10.21 по 21.11.21 была на реабилитации по сахарному диабету, мне понравилось. Санаторий находиться у прекрасном, тихом уголочке. Работники этого санатория_ профессионалы своего дела. Хочу сказать огромное спасибо доктору Юрченко Александры Ивановны за ее внимательность и профессионализм к своим пациентам. На процедуры-ванн,где работает Виточка, как приятно туда заходить и не хочется выходить, всегда на лице улыбочка. Наташенька на выхревых ваннах очень приятная девочка, Людочка, что работает на аквароле. Хочу поблагодарить девочек, что работают на азокерите. Огромнейшее спасибо масажисту Олечке Михайловне- это фея с волшебними ручками. Отдельное спасибо поварам, которые готовили вкусно и разнообразно! Всем работникам санатория огромнейшее спасибо! Будьте здоровы ! Успехов у Вашей работе!.",
  },
  {
    profileImage: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    name: "ИГОРЬ АНАТОЛЬЕВИЧ\n\n",
    rating: 5,
    date: '07.11.2021',
    text: 'Отдыхала дочь с подругой в детском лагере БМВ. Дети в восторге, не смотря на не очень современный быт его заменяли тепло и радушие пионервожатых.Огромное спасибо Богдану Павловичу,Диане Александровне, Надежде Зиновьевне и всему персоналу лагеря БМВ.Если говорить о еде то дети никогда не были голодными,а на вопрос что им привезти отвечали что у них все есть.Очень советую этот детский лагерь.Мы на следующий год едем только туда!!!'
  },
  {
    profileImage: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    name: "СВЕТЛАНА\n",
    rating: 5,
    date: '19.08.2021',
    text: 'Добрый день, хочу поделиться своими впечатлениями от пребывания в санатории Берминводы.Несмотря на некоторые недостатки я очень благодарна всему персоналу за их отношение к работе а в особенности очень профессиональному,чуткому и отзывчивому врачу Сугоняко Лидии Ивановне.Огромная Вам благодарность за Ваш профессионализм.Побольше бы нам таких врачей.Всему коллективу санатория благодарность за их нелегкий труд! И процветания!'
  },
  {
    profileImage: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png",
    name: "ЛАРИСА\n\n",
    rating: 5,
    date: '06.07.2021\n',
    text: 'Дуже подобається цей санаторій за лікувальну базу та персонал. Молодці всі працівники,які роблять відпочинок і лікувальний процес комфортними та приємними. Приїджаю в цей санаторій кожного року. Здоровья щастя та гідної оплати за такий тяжкий труд усім працівникам'
  },
]);
</script>

<template>
  <div class="mx-auto py-10">
    <h2 class="text-3xl font-bold mb-6 text-center">{{ $t('reviews') }}</h2>
    <div class="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="bg-white shadow-md rounded-lg p-6 border-2 border-green-500"
      >
        <div class="flex items-center mb-4">
          <img
            :src="review.profileImage"
            alt="Profile image"
            class="w-16 h-16 rounded-full object-cover mr-4"
          />
          <div>
            <h3 class="text-xl font-semibold">{{ review.name }} - {{ review.date }}</h3>
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
          class="text-gray-700 overflow-hidden"
        >
          {{ review.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
