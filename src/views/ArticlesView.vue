<template>
  <a-layout>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Articles</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
      >
        // your article thing
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
export default {
  name: "ArticlesView"
}
</script>

<style scoped>

</style>