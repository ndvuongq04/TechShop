<script setup>

import categories1 from '@/assets/images/client/categories/cat-1.jpg';
import categories2 from '@/assets/images/client/categories/cat-2.jpg';
import categories3 from '@/assets/images/client/categories/cat-3.jpg';
import categories4 from '@/assets/images/client/categories/cat-4.jpg';
import categories5 from '@/assets/images/client/categories/cat-5.jpg';

import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'


const categories = [
  { img: categories1, name: 'Fresh Fruit' },
  { img: categories2, name: 'Dried Fruit' },
  { img: categories3, name: 'Vegetables' },
  { img: categories4, name: 'Drink Fruits' },
  { img: categories5, name: 'Drink Fruits' }
]

</script>

<template>
    <!-- Categories Section Begin -->
    <section class="categories">
        <div class="container">
            <div class="row">
                <Carousel :itemsToShow="4" :wrapAround="true" class="categories__slider">
                    <Slide v-for="(cat, idx) in categories" :key="idx">
                        <div class="categories__item set-bg" :style="{ backgroundImage: `url(${cat.img})` }">
                            <h5><a href="#">{{ cat.name }}</a></h5>
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->

</template>