<script setup>
import googleImage from "@/assets/images/google.png";
import facebookImage from "@/assets/images/facebook.png";
import AuthModal from "@/components/ui/modal/AuthModal.vue";
import { ref } from "vue";

const modalRef = ref(null); // chứa Dom của modal

function submitForm() {
  console.log("Form submitted");
  modalRef.value.closeModal(); // Đóng modal sau khi lưu
}
</script>
<template>
  <AuthModal ref="modalRef" ContentButton="Đăng kí">
  <div class="register-box">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4 class="mb-0">Đăng ký</h4>
      <a href="#" class="text-primary text-decoration-none">Đã có tài khoản?</a>
    </div>
    <form>
      <div class="mb-3">
        <label class="form-label fs-14"
          >Họ tên <span class="text-red">*</span>
        </label>
        <input type="text" class="form-control" placeholder="Họ tên" />
      </div>

      <div class="mb-3">
        <label class="form-label fs-14"
          >Email
          <span class="text-red">*</span>
        </label>
        <input
          type="email"
          class="form-control"
          placeholder="abc123@gmail.com"
        />
      </div>
      <div class="mb-3">
        <label class="form-label fs-14"
          >Mật khẩu
          <span class="text-red">*</span>
        </label>
        <input type="password" class="form-control" placeholder="Mật khẩu" />
      </div>
      <div class="mb-3 fs-14 text-muted">
        Bằng cách đăng ký, bạn đồng ý với
        <a href="#" class="text-primary">Điều khoản dịch vụ</a> và
        <a href="#" class="text-primary">Chính sách bảo mật</a>
      </div>
      <div class="d-grid mb-3">
        <button 
        @click="submitForm"
        type="submit" 
        class="btn btn-primary fs-14">
          Tạo tài khoản
        </button>
      </div>
      <div class="divider">
        <span class="text-muted fs-14">Đăng ký với</span>
      </div>
      <div class="d-flex justify-content-between gap-3">
        <button
          type="button"
          class="btn btn-google w-100 d-flex align-items-center justify-content-center fs-14"
        >
          <img :src="googleImage" alt="Google error" class="me-2" /> Google
        </button>
        <button
          type="button"
          class="btn btn-facebook w-100 d-flex align-items-center justify-content-center fs-14"
        >
          <img :src="facebookImage" class="me-2" alt="Facebook error" />
          Facebook
        </button>
      </div>
    </form>
  </div>
  </AuthModal>
</template>
