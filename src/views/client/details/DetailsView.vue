<script setup>




import Breadcrumb from '@/components/layout/client/breadcrumb.vue'
import ProductDetails from '@/views/client/details/ProductDetails.vue'
import RelatedProduct from '@/views/client/details/RelatedProduct.vue'




</script>

<template>

    <!-- Breadcrumb Section Begin -->
     <Breadcrumb></Breadcrumb>
    <!-- Breadcrumb Section End -->

    <!-- Product Details Section Begin -->
    <ProductDetails></ProductDetails>
    <!-- Product Details Section End -->

    <!-- Related Product Section Begin -->
    <RelatedProduct></RelatedProduct>
    <!-- Related Product Section End -->
</template>

