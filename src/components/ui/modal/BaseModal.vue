<script setup>
import { ref, onMounted } from "vue";
import * as bootstrap from "bootstrap";

// cấu hình modal
const modalRef = ref(null); // chứa Dom của modal
const myModal = ref(null); // chứa instance của modal
onMounted(() => {
  // khởi tạo model
  myModal.value = new bootstrap.Modal(modalRef.value, {
    backdrop: "static", // không cho phép đóng modal khi click ra ngoài >< true : cho phép
    keyboard: false, // không cho phép đóng modal khi nhấn phím ESC
  });
});

// đóng mở modal
const openModal = () => {
  if (myModal.value) {
    myModal.value.show(); // hiển thị modal
  }
};

const closeModal = () => {
  // Đưa focus ra ngoài trước khi ẩn modal
  document.activeElement?.blur(); // mất focus khỏi nút trong modal
  if (myModal.value) {
    myModal.value.hide(); // ẩn modal
  }
};

// cấu hình props cho modal
const props = defineProps({
  modalTitle: {
    type: String,
    default: "Modal title",
  },
  contentButton: {
    type: String,
    default: "Modal button",
  },
  handleButton: {
    type: String,
    default: "Handle button",
  },
  mode: {
    type: String,
    default: "static",
  },
});

// thông báo cho cha biết khi nút (submit) được nhấn
const emit = defineEmits(["submit"]); // tên sự kiện được gửi lên cha là submit
function handleButtonFunc() {
  console.log("Button clicked forward to modal");
  // gửi sự kiện lên cha
  emit("submit");
}

// cho phép cha gọi hàm đóng modal
defineExpose({
  closeModal,
});
</script>
<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    @click="openModal"
    data-bs-target="#staticBackdrop"
  >
    {{ contentButton }}
  </button>

  <!-- Modal -->
  <div
    ref="modalRef"
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            {{ modalTitle }}
          </h1>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Nội dung của modal được map từ cha ( add , update , delete ) vào đây -->
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeModal">
            Close
          </button>
          <button
            @click="handleButtonFunc"
            type="button"
            class="btn btn-primary"
          >
            {{ handleButton }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
