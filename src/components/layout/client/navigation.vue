<script setup>
import { ref } from "vue";

const showCategories = ref(true);
function toggleCategories() {
  showCategories.value = !showCategories.value;
}
</script>

<template>
  <div class="hero__categories">
    <div class="hero__categories__all" @click="toggleCategories">
      <i class="fa fa-bars"></i>
      <span>Danh mục</span>
    </div>
    <transition name="slide">
      <ul v-show="showCategories">
        <li><a href="#">Điện thoại</a></li>
        <li><a href="#">Laptop</a></li>
        <li><a href="#">Màn hình</a></li>
        <li><a href="#">Table</a></li>
        <li><a href="#">Phụ kiện</a></li>
        <li><a href="#">Khuyến mại hot</a></li>
      </ul>
    </transition>
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s cubic-bezier(0.55, 0, 0.1, 1), opacity 0.5s;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
