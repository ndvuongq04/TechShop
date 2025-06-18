<script setup>
defineProps({
  isToggled: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    <div class="sb-sidenav-menu">
      <div class="nav">
        <div class="sb-sidenav-menu-heading">Features</div>


        <!-- Dashboard -->
        <router-link class="nav-link" :to="{ name: 'admin-dashboard' }">
          <div class="sb-nav-link-icon">
            <i class="fas fa-tachometer-alt"></i>
          </div>
          Tổng quan
        </router-link>

        <!-- Users -->
        <router-link class="nav-link" :to="{ name: 'admin-user' }">
          <div class="sb-nav-link-icon">
            <i class="fas fa-users"></i>
          </div>
          Người dùng
        </router-link>

        <!-- Products -->
        <router-link class="nav-link" :to="{ name: 'admin-product' }">
          <div class="sb-nav-link-icon">
            <i class="fas fa-box"></i>
          </div>
          Sản phẩm
        </router-link>

        <!-- Orders -->
        <router-link class="nav-link" :to="{ name: 'admin-order' }">
          <div class="sb-nav-link-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          Đơn hàng
        </router-link>

        <!-- Brands -->
        <router-link class="nav-link" :to="{ name: 'admin-brand' }">
          <div class="sb-nav-link-icon">
            <i class="fas fa-trademark"></i>
          </div>
          Thương hiệu
        </router-link>

        <!-- Reviews -->
        <router-link class="nav-link" :to="{ name: 'admin-review' }">
          <div class="sb-nav-link-icon">
            <i class="fas fa-star"></i>
          </div>
          Đánh giá
        </router-link>

        <!-- Reports -->
        <router-link class="nav-link" :to="{ name: 'admin-report' }">
          <div class="sb-nav-link-icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          Báo cáo
        </router-link>


        <div class="sb-sidenav-menu-heading">Interface</div>
        <div class="sb-nav-link-icon"></div>

        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
          aria-expanded="false" aria-controls="collapsePages">
          <div class="sb-nav-link-icon">
            <i class="fas fa-book-open"></i>
          </div>
          Pages
          <div class="sb-sidenav-collapse-arrow">
            <i class="fas fa-angle-down"></i>
          </div>
        </a>
        <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
          <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth"
              aria-expanded="false" aria-controls="pagesCollapseAuth">
              Authentication
              <div class="sb-sidenav-collapse-arrow">
                <i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordionPages">
              <nav class="sb-sidenav-menu-nested nav">
                <a class="nav-link" href="login.html">Login</a>
                <a class="nav-link" href="register.html">Register</a>
                <a class="nav-link" href="password.html">Forgot Password</a>
              </nav>
            </div>
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError"
              aria-expanded="false" aria-controls="pagesCollapseError">
              Error
              <div class="sb-sidenav-collapse-arrow">
                <i class="fas fa-angle-down"></i>
              </div>
            </a>
            <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordionPages">
              <nav class="sb-sidenav-menu-nested nav">
                <a class="nav-link" href="401.html">401 Page</a>
                <a class="nav-link" href="404.html">404 Page</a>
                <a class="nav-link" href="500.html">500 Page</a>
              </nav>
            </div>
          </nav>
        </div>
        <div class="sb-sidenav-menu-heading">Addons</div>
        <a class="nav-link" href="charts.html">
          <div class="sb-nav-link-icon">
            <i class="fas fa-chart-area"></i>
          </div>
          Charts
        </a>
        <a class="nav-link" href="tables.html">
          <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
          Tables
        </a>
      </div>
    </div>
    <div class="sb-sidenav-footer">
      <div class="small">Logged in as:</div>
      Vượng Đình 04
    </div>
  </nav>
</template>
