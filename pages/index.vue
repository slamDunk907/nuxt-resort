<template>
  <main>
    <section>
      <div class="flex justify-between">
        <div>
          <div class="pl-[80px] pt-[126px]">
            <h1 class="text-4xl font-bold mb-[15px]">
              Курорт "Миргород" - здесь живет здоровье!
            </h1>
            <button
              class="glow-button text-white font-bold py-2 px-4 mb-[15px]"
            >
              Заказать путевку
            </button>
            <img src="~/assets/images/iconImage.jpg" alt="icon" />
          </div>
          <div>
            <img
              src="~/assets/images/homeImage2.jpg"
              alt="home image"
            />
          </div>
        </div>
        <div>
          <img src="~/assets/images/homeImage.jpg" alt="homeImage" />
        </div>
      </div>
      <div></div>
    </section>
  </main>
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
