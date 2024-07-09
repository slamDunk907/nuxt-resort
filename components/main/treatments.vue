<script setup lang="ts">
const treatments = [
  {
    image: "https://www.nuozu.edu.ua/images/Novosti/15-05-23-v1.png",
    title: "ЛІКУВАЛЬНО-ДІАГНОСТИЧНА БАЗА ",
    content:
      "Функціональна діагностика:                        \n" +
      " •  реовазографія судин кінцівок;\n" +
      " •  кольпоскопія ;\n" +
      " •   ректоскопія;\n" +
      " •   гастрофіброскопія;\n" +
      " •   реоенцефалографія;\n" +
      " •   ультразвукове дослідження ШКТ, СВС, органів малого тазу у чоловіків та жінок.\n" +
      " • електрокардіографія;\n" +
      " • спірографія;\n",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKHxJNtOLs172EZEmA7a1CcGpLM5zTXIoZQ&s",
    title:
      "Клініко-біохімічна лабораторія пропонує загальноклінічні та біохімічні дослідження.",
    content:
      "Фізіотерапія:\n" +
      " •   електрофорез, гальванізація;\n" +
      " •   дарсонваль;\n" +
      " •   магнітотерапія;\n" +
      " •   лазерна терапія;\n" +
      " •   електросон;\n" +
      " •   мікрохвильова терапія;\n" +
      " •   ультрафіолетове опромінення;\n" +
      " •   електростимуляція;\n" +
      " •   інтерференц-терапія;\n" +
      " •   ультразвукова терапія;\n" +
      " •   світлолікування (УФ-опромінення, «Соллюкс», «Біотрон»):\n" +
      " •   лікування імпульсними струмами\n" +
      "(ДДТ - СМТ-терапія):\n" +
      " •   баротерапія;\n" +
      " •   ударно-хвильова терапія;\n" +
      " •   локальна кріотерапія;\n" +
      " •   пресотерапія верхніх та/або нижніх кінцівок (лімфодренаж);\n" +
      " • гідролазерне зрошення ясен.\n",
  },
  {
    image: "https://www.uralsan.ru/wp-content/uploads/2020/07/41.jpg",
    title: "Бальнеогідротерапія",
    content:
      "лікувальні ванни: загальні (мінеральні, перлові, хвойні, хлоридно-натрієві, йодобромні, бішофітові, валеріанові, скипидарні, гліцеринові, вихрові);\n" +
      " •   вихрові місцеві ванни для рук і ніг;\n" +
      " •   гідромасаж загальний;\n" +
      " •   акварол — гідромасаж рук і ніг\n" +
      "скляними кульками;\n" +
      " •   ванна для горизонтального\n" +
      "підводного витягнення поперекового і шийного відділів\n" +
      "хребта;\n" +
      " • паровуглекисла ванна.\n",
  },
  {
    image: "https://ua.all.biz/img/ua/service_catalog/418225.jpeg",
    title: "Лікувальний душ",
    content:
      "циркулярний:" +
      " •   гідролазерний;\n" +
      " •   Шарко;\n" +
      " •   висхідний;\n" +
      " •   дощовий;\n" +
      " •   Віші;\n" +
      " •   шотландський.\n" +
      "Лікувальне плавання в басейні із\n" +
      "застосуванням методик «аквастеп»,\n" +
      '"аквафітнес», «аквааеробіка», аква-пояс, доріжка Кнейпа.\n',
  },
  {
    image:
      "https://shkolamm.ru//wp-content/uploads/2018/11/12151201713080929-1024x683.jpg",
    title: "Масаж",
    content:
      "класичний:\n" +
      " •   сегментарно-рефлекторний;\n" +
      "точковий:\n" +
      " • вісцеральний",
  },
  {
    image: "https://imgs.sanatoriums.com/w1200h1200q90m/treatment/19073.jpg",
    title: "Теплолікування",
    content:
      "•   гальваногрязь;\n" +
      "грязьові ректальні тампони;\n" +
      "грязьові аплікації на ясна;\n" +
      " •   грязьові вагінальні тампони.\n" +
      "Мінеральна вода «Березівська»:\n" +
      " •   прийом мінеральної води всередину; тюбажі із застосуванням мінеральної води;\n" +
      " •   промивання шлунка мінеральною водою;\n" +
      " •   трансдуоденальне промивання мінеральною водою;\n" +
      " • озокеритотерапія.\n",
  },
  {
    image:
      "https://wiki.nvmk.org.ua/images/c/c9/%D0%9E%D0%B7%D0%BE%D0%BA%D0%B5%D1%80%D0%B8%D1%82.jpg",
    title: "Теплолікування",
    content:
      "•   інгаляції мінеральною водою\n" +
      "«Березівська», відварами трав, рослинними оліями;\n" +
      " •   спелеотерапія;\n" +
      " • лікувальний сон у штучній соляній шахті;\n" +
      " • ароматерапія.\n",
  },
  {
    image:
      "https://expert-health.com.ua/wp-content/uploads/2022/08/plasmapheresis.jpg",
    title: "Еферентна терапія",
    content:
      "•   плазмаферез;\n" +
      " •   ВЛОК крові:\n" +
      " • інфузійна озонотерапія.\n",
  },
  {
    image: "https://onco-expert.com.ua/assets/images/news-20.jpg",
    title: "Нетрадиційні методи",
    content:
      "•   психотерапія, голкорефлексотерапія, хромотерапія, гірудотерапія;\n" +
      " •   синглентно-киснева терапія;\n" +
      " •   нехірургічне лікування геморою апаратом\n" +
      "«Геморрон»;\n" +
      " •   лікувальна фізкультура: нордична ходьба, лікувальна гімнастика «Master Spin»;\n" +
      " •   вправи на дошці Євмінова;\n" +
      " •   теренкур; \n" +
      " •   косметологічні процедури\n" +
      " •   Fish-пілінг (пілінг стоп за допомогою рибок).\n",
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
  <div class="mx-auto py-10">
    <h2 class="text-3xl font-bold mb-6 text-center">Treatments</h2>
    <p class="mb-4">
      Відпочинок в санаторії «Бермінводи» це чудове поєднання унікальних
      оздоровчих процедур, потужної лікувальної бази, висококласного сервісу і
      приємного дозвілля для гостей будь-якого віку і для будь якого бюджету.
      Тут панує гармонія з природою та постійно лунають пташині переліви. . у
      санаторії є власна дієтична iдальня яка розрахована на одночасне всіх
      відпочиваючих. У ідеальні пропонуют попереднє замовлення страв в межах
      призначеної дієти. При особливій важливості для процесу оздоровлення
      збалансованого дієтичного харчування, ті, хто прихав тільки відпочити,
      можуть скористатися ресторанним типом харчування
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
          <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
          <ul>
            <li v-for="subItem in item.content.split(';').slice(0, 7)">
              <span
                v-if="subItem.includes(':')"
                v-html="formatService(subItem)"
              />
              <span v-else>{{ subItem }}</span>
            </li>
          </ul>
        </div>
        <UButton
          size="xl"
          color="primary"
          variant="solid"
          class="w-full rounded-none"
          @click="openModal(item)"
        >
          Learn more
        </UButton>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      >
        <div class="bg-white p-5 rounded-lg shadow-lg max-w-3xl">
          <h3 class="text-xl font-bold">{{ selectedTreatment.title }}</h3>
          <p
            v-html="
              selectedTreatment.content
                .split(';')
                .map(formatService)
                .join('<br/>')
            "
          ></p>
          <NuxtLink to="/contact">
            <UButton
                class="mt-4 mr-3"
                color="primary"
            >
              Order
            </UButton>
          </NuxtLink>
          <UButton
            class="mt-4"
            color="red"
            @click="closeModal"
          >
            Close
          </UButton>
        </div>
      </div>
    </transition>
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
