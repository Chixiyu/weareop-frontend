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
<!--          <div class="main_row">-->
<!--            <div class="leftone">-->
<!--              <div class="video_cover" >-->
<!--&lt;!&ndash;                <img :src=item class="video_cover" v-for="(item,index) in imagelink" :key="index"/>&ndash;&gt;-->
<!--                <img :src=item class="video_cover"/>-->
<!--                <img :src=item class="video_cover"/>-->
<!--                <img :src=item class="video_cover"/>-->
<!--                <img :src=item class="video_cover"/>-->

<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

<!--          <a-space direction="horizontal" v-for="(item,index) in imagelink" :key="index">-->
<!--            <a-card style="width: 300px" :bordered="false" :size="0">-->
<!--              <img :src="item" class="video_cover">-->
<!--            </a-card>-->
<!--            <a-card style="width: 300px">-->

<!--            </a-card>-->
<!--          </a-space>-->
<!--          <a-space direction="horizontal">-->
<!--            <table>-->

<!--            <div v-for="(item,index) in imagelink" :key="index" class="video_cover_big">-->
<!--              <a-card style="width: 300px" :bordered="false">-->
<!--                <img :src="item" class="video_cover">-->
<!--              </a-card>-->
<!--            </div>-->
<!--            </table>-->
<!--          </a-space>-->

          <a-list :grid="{ gutter:0, column: 6 }" :data-source="imagelink">
            <template #renderItem="{ item }">
              <a-list-item class="main_video_body">
                  <img :src="item" class="video_cover">
              </a-list-item>
            </template>
          </a-list>
          
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';



export default defineComponent({
  setup() {
    const imagelink=ref<string[]>([]);
    for (var i = 0; i < 48; i ++){
        imagelink.value.push('http://192.168.1.102:2000/chfs/shared/1d06036458e8722deb147e3c6ec71b7f2be9b5b4.jpg');
    }
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
      imagelink,
    };

  },

});


</script>

<style>
.ant-card ant-card-bordered{
  display: none;
}
.video_cover_big{
  /*clear: both;*/

}
.main_video_body{
  margin: 0 auto;
  width: 275px;
}
.card_body{
  justify-content: center;
}
div{word-break:break-all;}
.video_cover{
  width: 275px;
  height: 154px;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
}
.main_row{
  height: 250px;
  justify-content: center;
}


.video_div{
  background-color: black;
}

</style>