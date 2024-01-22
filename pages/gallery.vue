<template>
  <section class="pt-[126px] pb-[45px] mx-auto w-[1135px]">
    <div>
      <h2 class="text-3xl font-bold text-center pb-[30px]">Галерея</h2>
      <div class="grid grid-cols-3 gap-[20px]">
        <div class="card">
          <img src="~/assets/images/gallery1.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Бальнеогрязелечебница</p>
          </div>
        </div>
        <div class="card">
          <img src="~/assets/images/gallery2.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Курортная поликлиника</p>
          </div>
        </div>
        <div class="card">
          <img src="~/assets/images/gallery3.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Миргородкурорт территория</p>
          </div>
        </div>
        <div class="card">
          <img src="~/assets/images/gallery4.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Развлечения</p>
          </div>
        </div>
        <div class="card">
          <img src="~/assets/images/gallery5.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Санаторий "Берёзовый гай"</p>
          </div>
        </div>
        <div class="card">
          <img src="~/assets/images/gallery6.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Санаторий "Миргород"</p>
          </div>
        </div>
        <div class="card">
          <img src="~/assets/images/gallery7.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Санаторий "Полтава"</p>
          </div>
        </div>
        <div class="card">
          <img src="~/assets/images/gallery8.jpg" alt="gallery1" />
          <div class="p-4">
            <p>Санаторий "Хорол"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>
<style scoped>
.card {
  position: relative;
  overflow: hidden;
  border: 1px solid #f3f4f6;
  transition: box-shadow 0.3s;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card:hover img {
  transform: scale(1.05);
}
</style>
