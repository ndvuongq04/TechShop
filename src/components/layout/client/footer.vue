<script setup>
import logo from "@/assets/images/client/logo.png";
import paymentItem from "@/assets/images/client/payment-item.png";
</script>

<template>
  <!-- Footer Section Begin -->
  <footer class="footer spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer__about">
            <div class="footer__about__logo">
              <a href="" class="line-none text"><h2>TECH SHOP</h2></a>
            </div>
            <ul class="p-0">
              <li>Địa chỉ: Cổ nhuế 1, Bắc từ liêm, Hà nội</li>
              <li>Điện thoại: +012345678</li>
              <li>Email: hello@ABC.com</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
          <div class="footer__widget">
            <h6>Liên kết hữu ích</h6>
            <ul class="p-0">
              <li><a href="#">Về chúng tôi</a></li>
              <li><a href="#">Về cửa hàng</a></li>
              <li><a href="#">Mua sắm an toàn</a></li>
              <li><a href="#">Thông tin giao hàng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Sơ đồ website</a></li>
            </ul>
            <ul>
              <li><a href="#">Chúng tôi là ai</a></li>
              <li><a href="#">Dịch vụ của chúng tôi</a></li>
              <li><a href="#">Dự án</a></li>
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">Đổi mới sáng tạo</a></li>
              <li><a href="#">Phản hồi từ khách hàng</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="footer__widget">
            <h6>Đăng ký nhận bản tin</h6>
            <p>Nhận thông tin cập nhật về sản phẩm và ưu đãi mới nhất.</p>
            <form action="#">
              <input type="text" placeholder="Nhập email của bạn" />
              <button type="submit" class="site-btn">Đăng ký</button>
            </form>
            <div class="footer__widget__social">
              <a href="https://www.facebook.com" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="https://www.google.com" target="_blank">
                <i class="fab fa-google"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="footer__copyright">
            <div class="footer__copyright__text"></div>
            <div class="footer__copyright__payment">
              <img :src="paymentItem" alt="Phương thức thanh toán" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</template>
