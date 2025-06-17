<script setup>
import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";

const modalRef = ref(null);// Tham chiếu đến phần tử modal
const myModal = ref(null); // Biến để lưu trữ instance của modal Bootstrap

// Định nghĩa props cho modal
const props = defineProps({
  title: {
    type: String,
    default: "Xác nhận",
  },
  message: {
    type: String,
    default: "Bạn có chắc chắn muốn thực hiện hành động này?",
  },
  confirmText: {
    type: String,
    default: "Xác nhận",
  },
  cancelText: {
    type: String,
    default: "Hủy",
  },
  variant: {
    type: String,
    default: "primary",
  },
  buttonText: {
    type: String,
    default: "Mở",
  },
});

const emit = defineEmits(["confirm", "cancel"]);

onMounted(() => {
  if (modalRef.value) {
    myModal.value = new bootstrap.Modal(modalRef.value, {
      backdrop: "static",
      keyboard: false,
    });
  }
});

// Hàm mở modal
const openModal = () => {
  if (myModal.value) {
    myModal.value.show();
  }
};

const closeModal = () => {
  document.activeElement?.blur(); // Bỏ focus nút đang được nhấn
  if (myModal.value) {
    myModal.value.hide();   // ẩn modal
  }
};

// Hàm xử lý khi người dùng xác nhận 
const handleConfirm = () => {
  emit("confirm"); // Gửi sự kiện confirm cho component cha
  closeModal();
};
// Hàm xử lý khi người dùng hủy
const handleCancel = () => {
  emit("cancel");// Gửi sự kiện cancel cho component cha
  closeModal();
};

defineExpose({
  closeModal,
});
</script>

<template>
  <!-- Nút mở modal -->
  <button type="button" class="btn btn-primary" @click="openModal">
    {{ buttonText }}
  </button>

  <!-- Modal -->
  <div
    ref="modalRef"
    class="modal fade"
    id="authModal"
    tabindex="-1"
    aria-labelledby="authModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="authModalLabel">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="handleCancel"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>{{ message }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="handleCancel"
          >
            {{ cancelText }}
          </button>
          <button
            type="button"
            :class="`btn btn-${variant}`"
            @click="handleConfirm"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>