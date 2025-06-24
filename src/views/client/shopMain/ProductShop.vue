<script setup>

import product1 from '@/assets/images/client/product/product-1.jpg'
import product2 from '@/assets/images/client/product/product-2.jpg'
import product3 from '@/assets/images/client/product/product-3.jpg'
import product4 from '@/assets/images/client/product/product-4.jpg'
import product5 from '@/assets/images/client/product/product-5.jpg'
import product6 from '@/assets/images/client/product/product-6.jpg'
import product7 from '@/assets/images/client/product/product-7.jpg'
import product8 from '@/assets/images/client/product/product-8.jpg'
import product9 from '@/assets/images/client/product/product-9.jpg'
import product10 from '@/assets/images/client/product/product-10.jpg'
import product11 from '@/assets/images/client/product/product-11.jpg'
import product12 from '@/assets/images/client/product/product-12.jpg'

</script>

<template>

    <div class="filter__item">
        <div class="row">
            <div class="col-lg-4 col-md-5">
                <div class="filter__sort">
                    <span>Sort By</span>
                    <select>
                        <option value="0">Default</option>
                        <option value="0">Default</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-4 col-md-4">
                <div class="filter__found">
                    <h6><span>16</span> Products found</h6>
                </div>
            </div>
            <div class="col-lg-4 col-md-3">
                <div class="filter__option">
                    <span class="icon_grid-2x2"></span>
                    <span class="icon_ul"></span>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6" v-for="(img, idx) in [
            product1, product2, product3, product4, product5, product6,
            product7, product8, product9, product10, product11, product12
        ]" :key="idx">
            <div class="product__item">
                <div class="product__item__pic set-bg">
                    <img :src="img" alt="">
                    <ul class="product__item__pic__hover">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div class="product__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                </div>
            </div>
        </div>
    </div>
    <div class="product__pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
    </div>

</template>