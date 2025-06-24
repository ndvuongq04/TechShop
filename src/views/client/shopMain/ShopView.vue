<script setup>
import ProductDiscount from '@/views/client/shopMain/ProductDiscount.vue'
import Sidebar from '@/views/client/shopMain/Sidebar.vue'
import ProductShop from '@/views/client/shopMain/ProductShop.vue'

</script>

<template>
  <section class="product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-5">
          <Sidebar />
        </div>
        <div class="col-lg-9 col-md-7">
          <ProductDiscount />

        

        <ProductShop></ProductShop>

        </div>
      </div>
    </div>
  </section>
</template>