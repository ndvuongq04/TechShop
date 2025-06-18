<script setup>
// Modal
import AddUser from "@/views/admin/user/AddUser.vue";
import ConfirmModal from "@/views/admin/user/DeleteUser.vue";
import { ref } from "vue";

// columns của table
const columns = [
  { key: "name", label: "Name" },
  { key: "position", label: "Position" },
  { key: "office", label: "Office" },
  { key: "age", label: "Age" },
  { key: "startDate", label: "Start date" },
  { key: "salary", label: "Salary" },
];

// Biến lưu trạng thái sắp xếp
const sortColumn = ref("");
const sortOrder = ref("asc"); // mặc định là tăng dần

function toggleSort(key) {
  if (sortColumn.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = key;
    sortOrder.value = "asc";
  }

  console.log(
    `Hiện tại đang sort cột ${key} -> theo chiều ${
      sortOrder.value === "asc" ? "tăng" : "giảm"
    }`
  );
}
</script>

<template>
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
            <a class="small text-white stretched-link" href="#">View Details</a>
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
            <a class="small text-white stretched-link" href="#">View Details</a>
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
            <a class="small text-white stretched-link" href="#">View Details</a>
            <div class="small text-white">
              Add commentMore actions
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
            <a class="small text-white stretched-link" href="#">View Details</a>
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
    <!-- test modal  -->
    <AddUser></AddUser> <br />
    <ConfirmModal></ConfirmModal> <br />
  </div>
</template>
