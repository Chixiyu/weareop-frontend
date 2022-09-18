<template>
  <video :src="this.$route.query.videoid"></video>
  <div>{{this.$route.query.videoid}}</div>
</template>

<script lang="ts">
import {onMounted,ref} from "vue";
import router from "@/router";
export default {

  setup(){
    onMounted(()=>{
      const videoId=ref();
      videoId.value=router.currentRoute.value.query;
      console.log(router.currentRoute.value.query);
    })
  }
}

</script>

<style scoped>

</style>