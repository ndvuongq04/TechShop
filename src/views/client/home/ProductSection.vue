<script setup>

import feature1 from '@/assets/images/client/featured/feature-1.jpg';
import feature2 from '@/assets/images/client/featured/feature-2.jpg';
import feature3 from '@/assets/images/client/featured/feature-3.jpg';
import feature4 from '@/assets/images/client/featured/feature-4.jpg';
import feature5 from '@/assets/images/client/featured/feature-5.jpg';
import feature6 from '@/assets/images/client/featured/feature-6.jpg';
import feature7 from '@/assets/images/client/featured/feature-7.jpg';
import feature8 from '@/assets/images/client/featured/feature-8.jpg';


</script>

<template>

      <!-- Featured Section Begin -->
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Featured Product</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li class="active" data-filter="*">All</li>
              <li data-filter=".oranges">Oranges</li>
              <li data-filter=".fresh-meat">Fresh Meat</li>
              <li data-filter=".vegetables">Vegetables</li>
              <li data-filter=".fastfood">Fastfood</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature1})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature2})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature3})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature4})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature5})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature6})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature7})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
          <div class="featured__item">
            <div class="featured__item__pic set-bg" :style="{ backgroundImage: `url(${feature8})` }">
              <ul class="featured__item__pic__hover">
                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
              </ul>
            </div>
            <div class="featured__item__text">
              <h6><a href="#">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Featured Section End -->


</template>
