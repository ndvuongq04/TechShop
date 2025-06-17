<script setup>
import ConfirmModal from "@/components/ui/modal/ConfirmModal.vue";
import { ref } from "vue";

const confirmModalRef = ref(null);

// Xử lý khi user xác nhận xóa
const handleConfirm = () => {
  console.log("Delete user successfully!");
  confirmModalRef.value.closeModal(); // Đóng modal sau khi xóa
};

// Xử lý khi user hủy xóa 
const handleCancel = () => {
  console.log("Hủy xóa user");
};
</script>

<template>
  <ConfirmModal
    ref="confirmModalRef"
    title="Xác nhận xóa"
    message="Bạn có chắc chắn muốn xóa người dùng này?"
    confirm-text="Xóa"
    cancel-text="Hủy"
    variant="danger"
    button-text="Delete User"
    @confirm="handleConfirm"
    @cancel="handleCancel"
  />
</template>