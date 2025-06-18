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
        <div class="container-fluid px-4">
          <h1 class="mt-4">Dashboard</h1>
          <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item active">Dashboard</li>
          </ol>
          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card bg-primary text-white mb-4">
                <div class="card-body">Primary Card</div>
                <div
                  class="card-footer d-flex align-items-center justify-content-between"
                >
                  <a class="small text-white stretched-link" href="#"
                    >View Details</a
                  >
                  <div class="small text-white">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card bg-warning text-white mb-4">
                <div class="card-body">Warning Card</div>
                <div
                  class="card-footer d-flex align-items-center justify-content-between"
                >
                  <a class="small text-white stretched-link" href="#"
                    >View Details</a
                  >
                  <div class="small text-white">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card bg-success text-white mb-4">
                <div class="card-body">Success Card</div>
                <div
                  class="card-footer d-flex align-items-center justify-content-between"
                >
                  <a class="small text-white stretched-link" href="#"
                    >View Details</a
                  >
                  <div class="small text-white">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card bg-danger text-white mb-4">
                <div class="card-body">Danger Card</div>
                <div
                  class="card-footer d-flex align-items-center justify-content-between"
                >
                  <a class="small text-white stretched-link" href="#"
                    >View Details</a
                  >
                  <div class="small text-white">
                    <i class="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6">
              <div class="card mb-4">
                <div class="card-header">
                  <i class="fas fa-chart-area me-1"></i>
                  Area Chart Example
                </div>
                <div class="card-body">
                  <canvas id="myAreaChart" width="100%" height="40"></canvas>
                </div>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="card mb-4">
                <div class="card-header">
                  <i class="fas fa-chart-bar me-1"></i>
                  Bar Chart Example
                </div>
                <div class="card-body">
                  <canvas id="myBarChart" width="100%" height="40"></canvas>
                </div>
              </div>
            </div>
          </div>
          <!-- modal test -->
          <AddUser></AddUser> <br />
          <ConfirmModal></ConfirmModal> <br />

          <!-- end modal test -->
          <div class="mt-5">
            <UserManagement />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  </div>
</template>
