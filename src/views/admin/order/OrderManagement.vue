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
        `Hiện tại đang sort cột ${key} -> theo chiều ${sortOrder.value === "asc" ? "tăng" : "giảm"
        }`
    );
}
</script>

<template>

    <main>
        <div class="container-fluid px-0">
            <!-- Card Header -->
            <div
                class="card-header custom-header d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 gap-md-0 mb-3">
                <div>
                    <h5 class="mb-1">Quản lý Đơn hàng</h5>

                    <small class="text-muted">
                        Trang này cho phép quản trị viên quản lý đơn hàng, bao gồm
                        tìm kiếm, lọc và xem chi tiết đơn hàng một cách hiệu quả.
                    </small>
                </div>
                <button class="btn btn-primary mt-2 mt-md-0">
                    <i class="bi bi-person-plus me-1"></i> Tạo mới đơn hàng
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
                        <input type="search" class="form-control form-control-sm" placeholder="Nhập tên, email..." />
                    </div>
                </div>

                <div class="table-responsive">
                    <table id="example" class="table table-fix-left table-striped table-bordered nowrap"
                        style="width: 100%">
                        <thead>
                            <tr>
                                <th v-for="col in columns" :key="col.key" @click="toggleSort(col.key)" class="sortable">
                                    {{ col.label }}
                                    <span v-if="sortColumn === col.key"
                                        class="material-symbols-outlined ms-1 align-middle">
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
                    class="row d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                    <!-- Info -->
                    <div class="col-md-5 mb-2 mb-md-0">
                        <div class="dataTables_info" role="status" aria-live="polite">
                            Hiển thị 1 đến 10 trong tổng số 30 người dùng
                        </div>
                    </div>

                    <!-- Pagination -->
                    <div class="col-md-7">
                        <div class="dataTables_paginate paging_simple_numbers">
                            <ul class="pagination justify-content-md-end justify-content-start mb-0">
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
    </main>
</template>
