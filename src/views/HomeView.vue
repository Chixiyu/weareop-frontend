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

          <a-list :grid="{ gutter:0, column: 6 }" :data-source="videoData">
            <template #renderItem="{ item }">
              <a-list-item class="main_video_body">
                <router-link to="{{item.video}}">
                  <div>
                    <img :src="item.cover" class="video_cover">
                    <div class="playnum">
                      <p class="playnum_word">{{item.viewCount}}</p>
                      <PlaySquareOutlined class="playnum_icon"/>
                    </div>

                  <div class="video_info">
                    <p class="title">{{item.name}}</p>
                    <div class="upinfo">
                    <div class="upname"><p class="name">{{item.upName}}</p>
                      <div class="tag" :style="tagStyle(item.upTagColor)">

                        <p class="uptag">{{item.upTagText}}</p>
                      </div>
                    </div>

<!--                    <p class="date">9-12</p>-->

                  </div>
                  </div>
                  </div>
                </router-link>
              </a-list-item>
            </template>
          </a-list>
          
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script lang="ts">

import {defineComponent, ref, toRaw} from 'vue';
import {PlaySquareOutlined } from '@ant-design/icons-vue'
import axios from "axios";
import {onMounted} from "vue";

export default defineComponent({
  components:{
    PlaySquareOutlined
  },
  methods:{
    tagStyle (tagColor:any){
      return {
        // background: 'purple'
        background: tagColor,
      };
    }
  },
  setup() {
    const videoData=ref();
    onMounted(()=>{
      axios.get('http://192.168.1.102:1000/videos',{
      }).then((response)=>{
        videoData.value=response.data;
      })
    })
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
.uptag{
  color: white;
  font-size: 10px;
  margin-bottom: -10px;
  width: fit-content;
}
.name{
  width: fit-content;
  display: inline-block;
}
.tag{
  width: fit-content;
  height: 17px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  margin-left: 10px;
  /*background-color: purple;*/
  /*margin-bottom: 100px;*/
  display: inline-block;
}
.video_info{
  height: 130px;
}
.upname{
  width: 200px;
  color: black;
}
.title{
  color: black;
  width: fit-content;
  height: fit-content;

}
.date{
  float: right;
}
.ant-card ant-card-bordered{
  display: none;
}
.playnum_icon{
  position: relative;
  bottom: 35px;
}
.playnum_word{
  position: relative;
  left: 20px;
}
.video_cover_big{
  /*clear: both;*/

}
.playnum{
  position: relative;
  bottom: 30px;
  height: 14px;
  color: white;
  left: 10px;
}
.main_video_body{
  margin: 0 auto;
  width: 275px;
  height: 154px;
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