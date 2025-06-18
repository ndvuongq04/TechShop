<script setup>
import AdminLayout from "./layouts/admin/AdminLayout.vue";
import ClientLayout from "./layouts/client/ClientLayout.vue";
import loginView from "@/views/client/auth/LoginView.vue";
import registerView from "@/views/client/auth/RegisterView.vue";
import UserManagement from "@/views/admin/user/UserManagement.vue";
</script>

<template>
  <!-- <AdminLayout /> -->
  <!-- <ClientLayout /> -->
  <!-- <loginView /> -->
  <!-- <UserManagement /> -->

  <router-view></router-view> <!-- Đây là nơi hiển thị component -->

</template>
