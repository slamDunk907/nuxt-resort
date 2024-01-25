<template>
  <section class="pb-[45px] mx-auto max-w-[1135px]">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <div class="col-span-1 md:col-span-1">
        <h2 class="text-3xl font-bold">О нас</h2>
        <p class="pt-[15px]">
          <span class="font-bold">
            Рады приветствовать Вас на официальном сайте известного украинского
            курорта
          </span>
          и будем счастливы, если он поможет Вам найти свой путь к здоровью.
        </p>
        <p class="pt-[15px]">
          Уважаемые гости курорта «Миргород», мы благодарны Вам за выбор нашей
          здравницы.
          <span class="font-bold">
            Для большего удобства обращений в санатории и бронирования путевок
            на оздоровление и отдых
          </span>
          на нашем курорте, мы предлагаем различные средства общения.
        </p>
        <div class="pt-[15px]">
          <button class="glow-button text-white font-bold py-2 px-4">
            Заказать путевку
          </button>
        </div>
      </div>
      <div class="col-span-1 md:col-span-2 mt-4 md:mt-0">
        <img
          class="w-full h-auto"
          src="~/assets/images/about.jpg"
          alt="about image"
        />
      </div>
    </div>
  </section>
  <section class="bg-[#EEEEEE]">
    <div class="pt-[60px] pb-[60px] mx-auto w-[1135px]">
      <img
        class="mx-auto pb-[15px]"
        src="~/assets/images/wave.svg"
        alt="wave"
      />
      <h2 class="text-2xl font-bold text-center pb-[15px]">
        Если собрались хорошо отдохнуть и оздоровиться, <br />заказать путевку
        можно по телефону:
      </h2>
      <div class="grid grid-cols-[1fr,40%] pb-[45px] items-baseline">
        <div class="">
          <p class="font-bold">+38 (05355) 52125</p>
          <p class="font-bold">+38 (050) 405-80-47</p>
          <p class="font-bold pt-[15px]">
            э-почта: marketing@mirgorodkurort.ua,
          </p>
          <p class="pt-[15px]">
            или с помощью электронной формы бронирования на сайте:
          </p>
          <p class="font-bold">mirgorodkurort.ua,</p>
          <p>в Киевском офисе «Миргородкурорта» телефоны:</p>
          <p class="font-bold">(050) 308-61-81,</p>
          <p class="font-bold">(067) 989-67-91,</p>
          <p>или непосредственно в санаториях:</p>
          <div class="flex flex-col mt-[15px]">
            <h3 class="font-bold text-3xl">“Полтава”</h3>
            <span class="font-bold mt-[15px]"
              >+38 (05355) 5-52-65, 5-21-24,</span
            >
            <span class="font-bold">м.т.: +38(099)048-76-24,</span>
            <span>для писем в Viber/Telegram</span>
            <span class="font-bold">+38 (063) 304-48-82</span>
          </div>
        </div>
        <div class="grid grid-rows-[repeat(3, minmax(0,1fr))] gap-4 mt-8">
          <div class="flex flex-col">
            <h3 class="font-bold text-3xl">“Березовый гай”</h3>
            <span class="font-bold mt-[15px]"
              >+38 (05355) 5-52-65, 5-21-24,</span
            >
            <span class="font-bold">м.т.: +38(099)048-76-24,</span>
            <span>для писем в Viber/Telegram</span>
            <span class="font-bold">+38 (063) 304-48-82</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-3xl">“Миргород”</h3>
            <span class="font-bold mt-[15px]"
              >+38 (05355) 5-52-65, 5-21-24,</span
            >
            <span class="font-bold">м.т.: +38(099)048-76-24,</span>
            <span>для писем в Viber/Telegram</span>
            <span class="font-bold">+38 (063) 304-48-82</span>
          </div>
          <div class="flex flex-col">
            <h3 class="font-bold text-3xl">“Хорол”</h3>
            <span class="font-bold mt-[15px]"
              >+38 (05355) 5-52-65, 5-21-24,</span
            >
            <span class="font-bold">м.т.: +38(099)048-76-24,</span>
            <span>для писем в Viber/Telegram</span>
            <span class="font-bold">+38 (063) 304-48-82</span>
          </div>
        </div>
      </div>
      <img src="~/assets/images/wave.svg" alt="wave" />
    </div>
  </section>
  <section class="flex">
    <img src="~/assets/images/about2.jpg" alt="about image 2" />
    <div class="bg-[#5eb67c] flex items-center">
      <div class="pl-[15px]">
        <img src="~/assets/images/wave.svg" alt="wave" />
        <p class="font-bold text-2xl pt-[15px] pb-[15px]">Мы желаем вам: будьте здоровы!</p>
        <p>
          <span class="font-bold"
            >И предлагаем непревзойденную эффективность оздоровления и
            незабываемый отдых</span
          >
          европейского уровня в самом экологически чистом уголке Украины, в
          волшебном крае, прославленном в произведениях великого Николая Гоголя
          - в Миргороде.
        </p>
      </div>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.glow-button {
  position: relative;
  background: linear-gradient(90deg, #f20101 50%, #dc0101 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: background-position 0.3s;
}

.glow-button:hover {
  background-position: left bottom;
}
</style>
