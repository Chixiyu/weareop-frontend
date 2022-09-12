<template>
  <div>
    <a-layout-header class="header">
      <div class="logo"/>

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
<!--        <router-link to="/spaces">-->
        <router-link to="/spaces">
          <img srcset="http://192.168.1.102:2000/chfs/shared/hutao.jpeg" class="avater"/>
          <p class="username">ALing</p>
        </router-link>
<!--        </router-link>-->

      </a-menu>
     <div>
<!--       <router-link to="/spaces">-->
<!--        <img srcset="http://192.168.1.102:2000/chfs/shared/hutao.jpeg" class="avater"/>-->
<!--       </router-link>-->
      </div>
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
.username{
  position: fixed;
  right: 0;
  top: 0;
  margin-right: 80px;
  color: white;
}
.avater{
  width: 50px;
  height: 50px;
  float: right;
  position: fixed;

  right: 0;
  top: 0;
  margin-top: 5px;

  /*bottom: 55px;*/
  margin-right: 10px;
  border-radius: 50%;

}
.site-layout-background {
  background: #fff;
}
</style>