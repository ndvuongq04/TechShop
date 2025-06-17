<script setup>
import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";

const modalRef = ref(null); // đúng phần tử modal
const myModal = ref(null);

onMounted(() => {
  if (modalRef.value) {
    myModal.value = new bootstrap.Modal(modalRef.value, {
      backdrop: "true",
      keyboard: false,
    });
  }
});

// mở modal
const openModal = () => {
  if (myModal.value) {
    myModal.value.show();
  }
};
const closeModal = () => {
  // Đưa focus ra ngoài trước khi ẩn modal
  document.activeElement?.blur(); // mất focus khỏi nút trong modal
  if (myModal.value) {
    myModal.value.hide(); // ẩn modal
  }
};

// props
const props = defineProps({
  ContentButton: {
    type: String,
    default: "Content Button",
  },
});

// cho phép cha gọi hàm đóng modal
defineExpose({
  closeModal,
});
</script>

<template>
  <!-- Nút mở modal -->
  <button type="button" class="btn btn-primary" @click="openModal">
    {{ ContentButton }}
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
      <div class="modal-content p-0 border-0 bg-transparent shadow-none">
        <div class="modal-body">
          <!-- Nội dung form -->
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
