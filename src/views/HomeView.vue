<template>
    <a-layout>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Videos</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
<!--          <a-row class="main_row">-->
<!--            <a-col :span="6" class="leftone"></a-col>-->
<!--            <a-col :span="6" class="leftone"></a-col>-->
<!--            <a-col :span="6" class="leftone"></a-col>-->
<!--            <a-col :span="6" class="leftone"></a-col>-->


<!--          </a-row>-->
          <div class="main_row">
            <div class="leftone">
              <div class="video_cover">
              <img :src="imagelink" class="video_cover"/>
              </div>
            </div>
            <div class="leftone">
              <div class="video_cover">
                <img :src="imagelink" class="video_cover"/>
              </div>
            </div>
            <div class="leftone">
              <div class="video_cover">
                <img :src="imagelink" class="video_cover"/>
              </div>
            </div>
            <div class="leftone">
              <div class="video_cover">
                <img :src="imagelink" class="video_cover"/>
              </div>
            </div>
          </div>
            <div class="main_row">
              <div class="leftone">
                <div class="video_cover">
                  <img :src="imagelink" class="video_cover"/>
                </div>
              </div>
              <div class="leftone">
                <div class="video_cover">
                  <img :src="imagelink" class="video_cover"/>
                </div>
              </div>
              <div class="leftone">
                <div class="video_cover">
                  <img :src="imagelink" class="video_cover"/>
                </div>
              </div>
              <div class="leftone">
                <div class="video_cover">
                  <img :src="imagelink" class="video_cover"/>
                </div>
              </div>
          </div>

        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const x=ref();
    const imagelink=ref();
    imagelink.value='http://192.168.1.102:2000/chfs/shared/1d06036458e8722deb147e3c6ec71b7f2be9b5b4.jpg'
    x.value=10;
    return {
      x,
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
      imagelink
    };
  },
});
</script>

<style>
.video_cover{
  width: 275px;
  height: 154px;
  border-radius: 10px;
  display: block;
}
.main_row{
  height: 250px;
  display: flex;
  justify-content: center;
}
.leftone{
  background-color: white;
  /*margin-left: 10px;*/
  /*float: right;*/
  /*margin-right:75px;*/
  /*list-style:none;*/
  flex: 1;
  margin-left: 93.5px;
  margin-right: 93.5px;
}

.video_div{
  background-color: black;
}
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}


</style>