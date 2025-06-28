<script setup>
import feature1 from "@/assets/images/client/featured/feature-1.jpg";
import feature2 from "@/assets/images/client/featured/feature-2.jpg";
import feature3 from "@/assets/images/client/featured/feature-3.jpg";
import feature4 from "@/assets/images/client/featured/feature-4.jpg";
import feature5 from "@/assets/images/client/featured/feature-5.jpg";
import feature6 from "@/assets/images/client/featured/feature-6.jpg";
import feature7 from "@/assets/images/client/featured/feature-7.jpg";
import feature8 from "@/assets/images/client/featured/feature-8.jpg";
</script>

<template>
  <!-- Featured Section Begin -->
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>SẢN PHẨM NỔI BẬT</h2>
          </div>
          <div class="featured__controls">
            <ul>
              <li class="active" data-filter="*">Tất cả</li>
              <li data-filter=".oranges">Điên thoại</li>
              <li data-filter=".fresh-meat">Laptop</li>
              <li data-filter=".vegetables">Màn hình</li>
              <li data-filter=".fastfood">Phụ kiện</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row featured__filter">
        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature1})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature2})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature3})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature4})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature5})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature6})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature7})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
          <div class="featured__item">
            <div
              class="featured__item__pic set-bg"
              :style="{ backgroundImage: `url(${feature8})` }"
            ></div>
            <div class="featured__item__text">
              <h6><a href="#" class="line-none">Crab Pool Security</a></h6>
              <h5>$30.00</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Featured Section End -->
</template>
