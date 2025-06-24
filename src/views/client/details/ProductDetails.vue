<script setup>
import { ref } from 'vue'
import productDetails1 from '@/assets/images/client/product/details/product-details-1.jpg'
import productDetails2 from '@/assets/images/client/product/details/product-details-2.jpg'
import productDetails3 from '@/assets/images/client/product/details/product-details-3.jpg'
import productDetails4 from '@/assets/images/client/product/details/product-details-4.jpg'
import productDetails5 from '@/assets/images/client/product/details/product-details-5.jpg'

import thumb1 from '@/assets/images/client/product/details/thumb-1.jpg'
import thumb2 from '@/assets/images/client/product/details/thumb-2.jpg'
import thumb3 from '@/assets/images/client/product/details/thumb-3.jpg'
import thumb4 from '@/assets/images/client/product/details/thumb-4.jpg'

const images = [
    { big: productDetails2, thumb: thumb1 },
    { big: productDetails3, thumb: thumb2 },
    { big: productDetails5, thumb: thumb3 },
    { big: productDetails4, thumb: thumb4 }
]
const currentImage = ref(productDetails1)

function changeImage(img) {
    currentImage.value = img
}
const tab = ref('desc')

import Information from '@/views/client/details/Information.vue'

</script>

<template>
        <!-- Product Details Section Begin -->
    <section class="product-details spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__pic">
                        <div class="product__details__pic__item">
                            <img class="product__details__pic__item--large" :src="currentImage" alt="">
                        </div>
                        <div class="product__details__pic__slider">
                            <img v-for="(img, idx) in images" :key="idx" :src="img.thumb" @click="changeImage(img.big)"
                                :class="{ active: currentImage === img.big }"
                                style="width: 80px; cursor: pointer; margin-right: 8px;" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="product__details__text">
                        <!-- filepath: d:\4 NAM\TechShop\src\views\client\details\DetailsView.vue -->
                        <div class="product__details__text">
                            <h3>iPhone 13 (128GB) - Chính hãng VN/A</h3>
                            <div class="mb-2 d-flex align-items-center justify-content-between">
                                <div class="product__details__rating me-2">
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star text-warning"></i>
                                    <i class="fa fa-star-half-o text-warning"></i>
                                    <span class="text-muted ms-1">(18 reviews)</span>
                                </div>
                                <span class=" ">SKU: <b>I13128M</b></span>
                            </div>
                            <div class="mb-3 d-flex align-items-center gap-3 flex-wrap">
                                <span class="fw-bold fs-3 text-danger">11,490,000 ₫</span>
                                <span class="text-decoration-line-through text-muted fs-6">17,290,000 ₫</span>
                                
                            </div>
                            <!-- Lựa chọn phiên bản -->
                            <div class="mb-3">
                                <div class="fw-semibold mb-1">Lựa chọn phiên bản</div>
                                <div class="d-flex flex-wrap gap-2">
                                    <button
                                        class="btn border-2 rounded-3 px-4 py-2 active d-flex flex-column align-items-center position-relative"
                                        type="button">
                                        <span>128GB</span>
                                        <span class="text-danger small">11.490.000 ₫</span>
                                        <i class="fa fa-check-circle text-success position-absolute"
                                            style="right:8px;top:8px;"></i>
                                    </button>
                                    <!-- Thêm các phiên bản khác nếu có -->
                                </div>
                            </div>
                            <!-- Lựa chọn màu sắc -->
                            <div class="mb-3">
                                <div class="fw-semibold mb-1">Lựa chọn màu</div>
                                <div class="d-flex flex-wrap gap-2">
                                    <button
                                        class="btn btn-outline-dark border-2 rounded-3 px-3 py-2 d-flex align-items-center position-relative active"
                                        type="button" style="min-width:140px;">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-black-600x600.jpg"
                                            alt="Đen" class="me-2 rounded"
                                            style="width:32px; height:32px; object-fit:cover;">
                                        <div>
                                            <div>Đen</div>
                                            <div class="text-danger small">11,490,000 ₫</div>
                                        </div>
                                        <i class="fa fa-check-circle text-success position-absolute"
                                            style="right:8px;top:8px;"></i>
                                    </button>
                                    <button
                                        class="btn btn-outline-primary border-2 rounded-3 px-3 py-2 d-flex align-items-center position-relative"
                                        type="button" style="min-width:140px;">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-blue-600x600.jpg"
                                            alt="Xanh Dương" class="me-2 rounded"
                                            style="width:32px; height:32px; object-fit:cover;">
                                        <div>
                                            <div>Xanh Dương</div>
                                            <div class="text-danger small">11,590,000 ₫</div>
                                        </div>
                                    </button>
                                    <button
                                        class="btn btn-outline-danger border-2 rounded-3 px-3 py-2 d-flex align-items-center position-relative"
                                        type="button" style="min-width:140px;">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-600x600.jpg"
                                            alt="Hồng" class="me-2 rounded"
                                            style="width:32px; height:32px; object-fit:cover;">
                                        <div>
                                            <div>Hồng</div>
                                            <div class="text-danger small">11,590,000 ₫</div>
                                        </div>
                                    </button>
                                    <button
                                        class="btn btn-outline-secondary border-2 rounded-3 px-3 py-2 d-flex align-items-center position-relative"
                                        type="button" style="min-width:140px;">
                                        <img src="https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-white-600x600.jpg"
                                            alt="Trắng" class="me-2 rounded"
                                            style="width:32px; height:32px; object-fit:cover;">
                                        <div>
                                            <div>Trắng</div>
                                            <div class="text-danger small">11,590,000 ₫</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            
                             
                        </div>
                        
                        <div class="product__details__quantity">
                            <div class="quantity">
                                <div class="pro-qty">
                                    <input type="text" value="1">
                                </div>
                            </div>
                        </div>
                        <a href="#" class="primary-btn line-none">ADD TO CARD</a>
                        
                    </div>
                </div>

                <Information></Information>



            </div>
        </div>
    </section>
    <!-- Product Details Section End -->
</template>

<style scoped>
.product__details__pic__slider img.active {
    border: 1px solid #7fad39;
}
.product__details__pic__slider img.active {
    border: 1px solid #7fad39;
}

/* Border màu xám cho các lựa chọn phiên bản và màu sắc */
.product__details__text .btn,
.product__details__text .btn:focus,
.product__details__text .btn:active {
    border-color: #d1d5db !important; /* xám nhạt */
    box-shadow: none;
    background: #fff !important; /* giữ nền trắng khi hover/focus */
}
.product__details__text .btn.active,
.product__details__text .btn:active {
    border-color: #7fad39 !important; /* màu xanh khi active */
}
.product__details__text .btn:hover:not(.active) {
    border-color: #0d6efd !important; /* xanh dương Bootstrap khi hover */
    background: #fff !important;      /* không đổi nền */
}

</style>