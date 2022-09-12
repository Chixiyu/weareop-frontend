<template>
  <div>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
      >
        <router-link to="/">
          <a-menu-item key="1">视频</a-menu-item>
        </router-link>

        <router-link to="/articles">
          <a-menu-item key="2">文章</a-menu-item>
        </router-link>

        <router-link to="/streams">
          <a-menu-item key="3">直播</a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<script>
export default {
  name: "HeaderFrame",
  key: 1
}
</script>

<style scoped>

.site-layout-background {
  background: #fff;
}
</style>