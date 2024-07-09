<script setup lang="ts">
import image1 from "@/assets/images/1.jpg";
import image2 from "@/assets/images/2.jpg";
import image3 from "@/assets/images/3.jpg";
import image4 from "@/assets/images/4.jpg";
import image5 from "@/assets/images/5.jpg";
import image6 from "@/assets/images/6.jpg";
</script>

<template>
  <div class="flex-container">
    <div class="image-column">
      <img :src="image1" alt="Image 1">
      <img :src="image2" alt="Image 2">
    </div>
    <div class="info-map-column">
      <h2 class="title">Contact Us</h2>
      <div class="contact-info mb-5">
        <p>Email: <a href="mailto:berminvodysanatory@ukr.net">berminvodysanatory@ukr.net</a></p>
        <p>Phone: <a href="tel:+380636913408">+380 63 691 3408</a></p>
        <p>Address: Харківська обл., Дергачівський р-н, с. Березівське</p>
      </div>
      <div class="map-container my-8">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.4053671125725!2d35.950283626950764!3d50.00375691942555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127978ecc18fcef%3A0x597382a5b011c87e!2z0JHQtdGA0LXQt9C-0LLRgdC60L7QtSwg0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LA!5e0!3m2!1sru!2s!4v1720563080706!5m2!1sru!2s"
            width="600"
            height="450"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.image-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.image-column img {
  width: 300px; /* Fixed width for images */
  height: auto;
}

.info-map-column {
  margin-left: 20px;
  flex-basis: 60%;
}

.title {
  font-size: 2em;
  margin-bottom: 20px;
}

.map-container iframe {
  width: 100%; /* Responsive width */
  height: 450px;
  border: none;
}

.contact-info {
  font-size: 1.5em;
  text-align: left;
}
</style>
