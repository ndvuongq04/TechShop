<script setup>
import BaseModal from "@/components/ui/modal/BaseModal.vue";
import { ref } from "vue";

const modalRef = ref(null); // chứa Dom của modal

// Hàm xử lý thêm user
function handleSaveUser() {
  console.log("User saved successfully!");
  modalRef.value.closeModal(); // Đóng modal sau khi lưu
}
</script>
<template>
  <BaseModal
    ref="modalRef"
    modalTitle="Add User"
    contentButton="Add User"
    handleButton="Add User"
    mode="static"
    @submit="handleSaveUser"
  >
    <!-- nội dung của modal addUser -->
    <div class="input-group flex-nowrap">
      <span class="input-group-text" id="addon-wrapping">@</span>
      <input
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
    </div>
  </BaseModal>
</template>
