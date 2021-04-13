<template>
  <div class="container mt-4">
    <div class="mb-4">
      <router-link to="/admin">
        <b-icon icon="house-door"></b-icon>文章列表
      </router-link>
      <router-link to="/admin/add">
        <b-icon icon="plus-circle"></b-icon>新增文章
      </router-link>
    </div>
    <!-- 這個router-view會產生在App.vue這個component內 -->
    <router-view />
  </div>
</template>