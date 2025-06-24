<script setup>

import product1 from '@/assets/images/client/product/product-1.jpg'
import product2 from '@/assets/images/client/product/product-2.jpg'
import product3 from '@/assets/images/client/product/product-3.jpg'
import product7 from '@/assets/images/client/product/product-7.jpg'

</script>

<template>

        <!-- Related Product Section Begin -->
    <section class="related-product">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title related__product__title">
                        <h2>Related Product</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6" v-for="(img, idx) in [product1, product2, product3, product7]"
                    :key="idx">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" :style="{ backgroundImage: `url(${img})` }">
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
        </div>
    </section>
        <!-- Related Product Section End -->

</template>