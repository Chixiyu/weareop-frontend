<template>
  <div class="title" :style="titlestyle"><p>{{videoName}}</p></div>
  <div class="videomonitor-container" id="video_container">
    <video id="video" class="video-js vjs-default-skin" :style="style" controls autoplay :src="videoUrl"></video>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

import router from "@/router";
import axios from "axios";
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import {nextTick} from "vue";
export default defineComponent({

  setup() {

    const videoUrl = ref()
    const videoId = ref();
    const videoName = ref();
    const width = ref();
    const height = ref();
    const tempwidth = ref();
    const tempheight = ref();
    const temptitlesize=ref();
    const titlestyle = ref();
    const style =ref();
    onMounted(() => {
      style.value='width: 1600px; height: 900px;'
      titlestyle.value = 'font-size: 30px;'
      const windowwidth = ref(document.documentElement.clientWidth);
      const windowheight = ref(document.documentElement.clientHeight);
      console.log(windowheight.value)
      console.log(windowwidth.value)
      tempwidth.value = windowwidth.value * 0.625;
      tempheight.value = windowheight.value *0.699;
      temptitlesize.value = windowheight.value * 0.02;
      titlestyle.value = 'font-size: '+ temptitlesize.value + 'px;';

      style.value = 'width: ' + tempwidth.value + 'px; height: ' + tempheight.value + 'px;'
      videoId.value = router.currentRoute.value.query.videoId;
      console.log(router.currentRoute.value.query.videoId);
      axios.get('/oneVideo?videoId=' + videoId.value).then((response) => {
        console.log(response.data);
        videoUrl.value = response.data.video;
        videoName.value = response.data.name;
        nextTick(()=>{
          window.onresize=()=>{
            const windowwidth = ref(document.documentElement.clientWidth);
            const windowheight = ref(document.documentElement.clientHeight);
            console.log(windowheight.value)
            console.log(windowwidth.value)
            tempwidth.value = windowwidth.value * 0.625;
            tempheight.value = windowheight.value *0.699;
            temptitlesize.value = windowheight.value * 0.02;

            style.value = 'width: ' + tempwidth.value + 'px; height: ' + tempheight.value + 'px;'
            titlestyle.value = 'font-size: '+ temptitlesize.value + 'px;';

          }
        })
        // if (windowwidth)

      })
    })
    return{
      videoUrl,
      videoName,
      width,
      height,
      style,
      titlestyle,

    }

  },
})
</script>

<style scoped>
.video-js{
  width: 1600px;
  height: 900px;
  margin-left: 10%;
}
.title{
  margin-left: 10%;
  /*font-size: 30px;*/
  font-family: MiSans;
  margin-top:  2%;
}
</style>