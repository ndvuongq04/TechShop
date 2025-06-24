<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import productDiscount1 from '@/assets/images/client/product/discount/pd-1.jpg'
import productDiscount2 from '@/assets/images/client/product/discount/pd-2.jpg'
import productDiscount3 from '@/assets/images/client/product/discount/pd-3.jpg'
import productDiscount4 from '@/assets/images/client/product/discount/pd-4.jpg'
import productDiscount5 from '@/assets/images/client/product/discount/pd-5.jpg'
import productDiscount6 from '@/assets/images/client/product/discount/pd-6.jpg'

const saleOffProducts = [
  { img: productDiscount1, name: 'Raisin’n’nuts', type: 'Dried Fruit', price: '$30.00', oldPrice: '$36.00' },
  { img: productDiscount2, name: 'Vegetables’package', type: 'Vegetables', price: '$30.00', oldPrice: '$36.00' },
  { img: productDiscount3, name: 'Apple', type: 'Fruit', price: '$30.00', oldPrice: '$36.00' },
  { img: productDiscount4, name: 'Banana', type: 'Fruit', price: '$30.00', oldPrice: '$36.00' },
  { img: productDiscount5, name: 'Orange', type: 'Fruit', price: '$30.00', oldPrice: '$36.00' },
  { img: productDiscount6, name: 'Grape', type: 'Fruit', price: '$30.00', oldPrice: '$36.00' }
]
</script>

<template>
  <div class="product__discount">
    <div class="section-title product__discount__title">
      <h2>Sale Off</h2>
    </div>
    <Carousel :itemsToShow="3" :wrapAround="true" class="product__discount__slider">
      <Slide v-for="(item, idx) in saleOffProducts" :key="idx">
        <div class="product__discount__item">
          <div class="product__discount__item__pic set-bg">
            <img :src="item.img" alt="">
            <div class="product__discount__percent">-20%</div>
            <ul class="product__item__pic__hover">
              <li><a href="#"><i class="fa fa-heart"></i></a></li>
              <li><a href="#"><i class="fa fa-retweet"></i></a></li>
              <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
            </ul>
          </div>
          <div class="product__discount__item__text">
            <span>{{ item.type }}</span>
            <h5><a href="#">{{ item.name }}</a></h5>
            <div class="product__item__price">{{ item.price }} <span>{{ item.oldPrice }}</span></div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>