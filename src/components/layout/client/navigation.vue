<script setup>

import { ref } from 'vue'

const showCategories = ref(true)
function toggleCategories() {
  showCategories.value = !showCategories.value
}

</script>

<template>



    <div class="hero__categories">
        <div class="hero__categories__all" @click="toggleCategories">
            <i class="fa fa-bars"></i>
            <span>All departments</span>
        </div>
        <transition name="slide">
        <ul v-show="showCategories">
            <li><a href="#">Fresh Meat</a></li>
            <li><a href="#">Vegetables</a></li>
            <li><a href="#">Fruit & Nut Gifts</a></li>
            <li><a href="#">Fresh Berries</a></li>
            <li><a href="#">Ocean Foods</a></li>
            <li><a href="#">Butter & Eggs</a></li>
            <li><a href="#">Fastfood</a></li>
            <li><a href="#">Fresh Onion</a></li>
            <li><a href="#">Papayaya & Crisps</a></li>
            <li><a href="#">Oatmeal</a></li>
            <li><a href="#">Fresh Bananas</a></li>
        </ul>
        </transition>
    </div>


</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.5s cubic-bezier(.55,0,.1,1), opacity 0.5s;
  overflow: hidden;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>



