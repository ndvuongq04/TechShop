<script setup>
import loginView from "@/views/client/auth/LoginView.vue";
import registerView from "@/views/client/auth/RegisterView.vue";
</script>
<template>
  <div
    class="container bg-light vh-100 d-flex flex-column justify-content-center align-items-center"
  >
    <div class="row">
      <div class="col">Client Layout</div>
      <div class="mt-5">
        <registerView></registerView>
        <loginView></loginView>
      </div>
    </div>
  </div>
</template>
