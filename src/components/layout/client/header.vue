<script setup>
// Bạn có thể thêm logic cho tìm kiếm, giỏ hàng hoặc tài khoản ở đây nếu cần

import Navigation from "@/components/layout/client/navigation.vue";
import Banner from "@/views/client/home/Banner.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <!-- Header Section Begin -->
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="header__top__left">
              <ul>
                <li><i class="fa fa-envelope"></i> nguyenvana@gmail.com</li>
                <li>Miễn phí vận chuyển cho đơn hàng từ 300.000 vnd</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="header__top__right">
              <div class="header__top__right__social">
                <a href="https://www.facebook.com" target="_blank">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.google.com" target="_blank">
                  <i class="fab fa-google"></i>
                </a>
              </div>
              <div class="header__top__right__language">
                <img src="" alt="" />
                <div>Tiếng việt</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                  <li><a href="#">Tiếng việt</a></li>
                  <li><a href="#">Tiếng anh</a></li>
                </ul>
              </div>
              <div class="header__top__right__auth">
                <a href="#" class="line-none"
                  ><i class="fa fa-user"></i>Dắng nhập</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="humberger__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
  <!-- Header Section End -->

  <!-- Hero Section Begin -->
  <section class="hero mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <Navigation />
        </div>
        <div class="col-lg-9">
          <div class="row">
            <div class="col-lg-10 col-md-9 col-12">
              <div class="hero__search">
                <div class="hero__search__form">
                  <form action="#" class="d-flex align-items-center">
                    <input
                      type="text"
                      placeholder="Bạn đang cần tìm gì?"
                      style="width: 100%"
                      class="form-control"
                    />
                    <button type="submit" class="site-btn">TÌM KIẾM</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-12 mt-3 mt-md-0">
              <div class="header__cart">
                <ul>
                  <li>
                    <a href="#"
                      ><i class="fa fa-shopping-bag"></i> <span>3</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Banner v-if="route.meta.showBanner" />
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->
</template>
