<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/layout/admin/header.vue";
import Sidebar from "@/components/layout/admin/sidebar.vue";
import Footer from "@/components/layout/admin/footer.vue";

// Modal
import AddUser from "@/views/admin/user/AddUser.vue";
import ConfirmModal from "@/views/admin/user/DeleteUser.vue";

const isSidebarToggled = ref(false);

onMounted(() => {
  // Khôi phục trạng thái từ localStorage
  if (localStorage.getItem("sb|sidebar-toggle") === "true") {
    isSidebarToggled.value = true;
    document.body.classList.add("sb-sidenav-toggled");
  }
});

const handleSidebarToggle = () => {
  isSidebarToggled.value = !isSidebarToggled.value;
  document.body.classList.toggle("sb-sidenav-toggled");
  localStorage.setItem("sb|sidebar-toggle", isSidebarToggled.value);
};

import UserManagement from "@/views/admin/user/UserManagement.vue";
</script>

<template>
  <Header @toggle-sidebar="handleSidebarToggle"></Header>
  <div id="layoutSidenav">
    <div id="layoutSidenav_nav">
      <Sidebar :is-toggled="isSidebarToggled"></Sidebar>
    </div>
    <div id="layoutSidenav_content">
      <main>
        <router-view></router-view>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>
