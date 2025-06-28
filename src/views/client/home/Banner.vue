<script setup>
import banner from "@/assets/images/client/banner/banner.jpg";
</script>

<template>
  <div
    class="hero__item set-bg mt-3"
    :style="{ backgroundImage: `url(${banner})` }"
  >
    <div class="hero__text">
      <span>TECH SHOP</span>
      <h2>Sản phẩm <br />chính hãng 100%</h2>
      <p>Giao hàng miễn phí hoặc nhận tại cửa hàng</p>
      <a href="#" class="primary-btn line-none">KHÁM PHÁ NGAY</a>
    </div>
  </div>
</template>
