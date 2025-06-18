<script setup>
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
  <div class="container-fluid px-0">
    <!-- Card Header -->
    <div
      class="card-header custom-header d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 gap-md-0 mb-3"
    >
      <div>
        <h5 class="mb-1">Quản lý người dùng</h5>

        <small class="text-muted">
          Trang này cho phép quản trị viên quản lý tài khoản người dùng, bao gồm
          tìm kiếm, lọc và xem chi tiết người dùng một cách hiệu quả.
        </small>
      </div>
      <button class="btn btn-primary mt-2 mt-md-0">
        <i class="bi bi-person-plus me-1"></i> Tạo mới người dùng
      </button>
    </div>

    <!-- Table DataTable với search, phân trang, và dòng entries -->
    <div class="mt-4">
      <div class="row g-3 mb-3 align-items-center">
        <!-- Hiển thị bao nhiêu -->
        <div class="col-md-2 col-sm-6">
          <label class="form-label mb-1">Hiển thị</label>
          <select class="form-select form-select-sm">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>

        <!-- Vai trò -->
        <div class="col-md-2 col-sm-6">
          <label class="form-label mb-1">Vai trò</label>
          <select class="form-select form-select-sm">
            <option value="">Tất cả</option>
            <option value="user">Người dùng</option>
            <option value="admin">Người quản trị</option>
          </select>
        </div>

        <!-- Trạng thái -->
        <div class="col-md-2 col-sm-6">
          <label class="form-label mb-1">Trạng thái</label>
          <select class="form-select form-select-sm">
            <option value="">Tất cả</option>
            <option value="active">Hoạt động</option>
            <option value="inactive">Ngừng hoạt động</option>
          </select>
        </div>

        <!-- Ngày tạo -->
        <div class="col-md-2 col-sm-6">
          <label class="form-label mb-1">Ngày tạo</label>
          <select class="form-select form-select-sm">
            <option value="">Tất cả</option>
            <option value="today">Hôm nay</option>
          </select>
        </div>

        <!-- Sắp xếp -->
        <div class="col-md-2 col-sm-6">
          <label class="form-label mb-1">Sắp xếp</label>
          <select class="form-select form-select-sm">
            <option value="">Tất cả</option>
            <option value="ordersAsc">Đơn hàng, thấp → cao</option>
            <option value="ordersDesc">Đơn hàng, cao → thấp</option>
            <option value="amountAsc">Số tiền, thấp → cao</option>
            <option value="amountDesc">Số tiền, cao → thấp</option>
          </select>
        </div>

        <!-- Tìm kiếm -->
        <div class="col-md-2 col-sm-12">
          <label class="form-label mb-1 d-block">Tìm kiếm</label>
          <input
            type="search"
            class="form-control form-control-sm"
            placeholder="Nhập tên, email..."
          />
        </div>
      </div>

      <div class="table-responsive">
        <table
          id="example"
          class="table table-fix-left table-striped table-bordered nowrap"
          style="width: 100%"
        >
          <thead>
            <tr>
              <th
                v-for="col in columns"
                :key="col.key"
                @click="toggleSort(col.key)"
                class="sortable"
              >
                {{ col.label }}
                <span
                  v-if="sortColumn === col.key"
                  class="material-symbols-outlined ms-1 align-middle"
                >
                  {{ sortOrder === "asc" ? "expand_less" : "expand_more" }}
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2015/04/25</td>
              <td>$320,800</td>
            </tr>
            <tr>
              <td>Garrett Winters</td>
              <td>Accountant</td>
              <td>Tokyo</td>
              <td>63</td>
              <td>2015/07/25</td>
              <td>$170,750</td>
            </tr>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2015/04/25</td>
              <td>$320,800</td>
            </tr>
            <!-- ...thêm dữ liệu nếu muốn... -->
          </tbody>
        </table>
      </div>
      <!-- table footer -->
      <div
        class="row d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center"
      >
        <!-- Info -->
        <div class="col-md-5 mb-2 mb-md-0">
          <div class="dataTables_info" role="status" aria-live="polite">
            Hiển thị 1 đến 10 trong tổng số 30 người dùng
          </div>
        </div>

        <!-- Pagination -->
        <div class="col-md-7">
          <div class="dataTables_paginate paging_simple_numbers">
            <ul
              class="pagination justify-content-md-end justify-content-start mb-0"
            >
              <li class="paginate_button page-item previous disabled">
                <a href="#" class="page-link">Trước</a>
              </li>
              <li class="paginate_button page-item active">
                <a href="#" class="page-link">1</a>
              </li>
              <li class="paginate_button page-item">
                <a href="#" class="page-link">2</a>
              </li>
              <li class="paginate_button page-item">
                <a href="#" class="page-link">3</a>
              </li>
              <li class="paginate_button page-item next">
                <a href="#" class="page-link">Sau</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.custom-header {
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 1.25rem 1rem 1rem 1rem;
  margin-bottom: 1rem;
}
.custom-header h5 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #212529;
}
.custom-header small {
  display: block;
  color: #6c757d;
  font-size: 1.05rem;
  margin-top: 0.25rem;
}
/* Table style */
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}
.table th,
.table td {
  padding: 0.5rem 0.75rem;
  vertical-align: middle;
  border-top: 1px solid #dee2e6;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  background: #f8f9fa;
  font-weight: 600;
}
.table-striped tbody tr:nth-of-type(odd) {
  background-color: #f2f2f2;
}
.table-bordered {
  border: 1px solid #dee2e6;
}
.table-bordered th,
.table-bordered td {
  border: 1px solid #dee2e6;
}
/* Search box */
.dataTables_filter {
  float: right;
  margin-bottom: 1rem;
}
.dataTables_filter label {
  font-weight: 500;
}
.dataTables_filter input[type="search"] {
  margin-left: 0.5em;
  display: inline-block;
  width: auto;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
}
/* Entries select */
.dataTables_length {
  float: left;
  margin-bottom: 1rem;
}
.dataTables_length label {
  font-weight: 500;
}
.dataTables_length select {
  margin: 0 0.5em;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.2rem;
}
/* Info text */
.dataTables_info {
  margin-top: 0.5rem;
  font-size: 0.95em;
  color: #555;
}
/* Pagination */
.dataTables_paginate {
  float: right;
  margin-top: 0.5rem;
}
.dataTables_paginate .pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
  margin-bottom: 0;
}
.dataTables_paginate .page-item {
  margin: 0 2px;
}
.dataTables_paginate .page-link {
  position: relative;
  display: block;
  padding: 0.25rem 0.75rem;
  color: #0d6efd;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.2rem;
  text-decoration: none;
  transition: background 0.2s;
}
.dataTables_paginate .page-link:hover {
  background: #e9ecef;
  color: #0a58ca;
}
.dataTables_paginate .page-item.active .page-link {
  z-index: 1;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.dataTables_paginate .page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}
/* Responsive helper */
@media (max-width: 576px) {
  .dataTables_length,
  .dataTables_filter,
  .dataTables_info,
  .dataTables_paginate {
    float: none !important;
    text-align: left;
    margin-bottom: 0.5rem;
  }
}

/* Đảm bảo table sát lề trái */
.table-container {
  padding-left: 0;
  margin-left: 0;
}

/* ...existing code... */

/* Sửa lỗi select số bản ghi bị dính số và icon */
.datatable-selector,
.dataTables_length select,
.table-responsive select {
  padding-right: 2rem !important;
  min-width: 60px;
  background-position: right 0.75rem center;
  background-repeat: no-repeat;
  background-size: 1rem 1rem;
}

@media (max-width: 767px) {
  .dataTables_paginate .pagination {
    justify-content: start !important;
    flex-wrap: wrap;
    gap: 4px;
  }
}
</style>
