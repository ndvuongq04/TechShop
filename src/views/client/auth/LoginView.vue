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
  <AuthModal ref="modalRef" ContentButton="Đăng nhập">
    <div class="login-box bg-white p-4 shadow w-100">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4 class="mb-0">Đăng nhập</h4>
        <a href="#" class="text-primary text-decoration-none"
          >Bạn chưa có tài khoản?</a
        >
      </div>

      <form>
        <div class="mb-3">
          <label for="email" class="form-label fs-14"
            >Email
            <span class="text-red">*</span>
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="abc123@gmail.com"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fs-14"
            >Mật khẩu <span class="text-red">*</span>
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Mật khẩu"
          />
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="remember" />
            <label class="form-check-label fs-14" for="remember"
              >Ghi nhớ đăng nhập</label
            >
          </div>
          <a href="#" class="text-muted text-decoration-none">Quên mật khẩu?</a>
        </div>
        <div class="d-grid mb-3">
          <button
            @click="submitForm"
            type="submit"
            class="btn btn-primary fs-14"
          >
            Đăng nhập
          </button>
        </div>
        <div class="divider">
          <span class="text-muted fs-14">Đăng nhập với</span>
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
