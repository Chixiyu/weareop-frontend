<template>
  <a-layout>
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Videos</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout style="padding-bottom: 24px">

      <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '100px', display: 'inline' }"
      >
      </a-layout-content>
      </a-layout>
      <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px', display: 'inline' }"
      >
        <!--          <div class="test" v-show="testShow">test</div>-->
        <!--          <div class="test" @click="testClick">button</div>-->
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

        <a-list :grid="{ gutter:0, column: colums }" :data-source="videoData">
          <template #renderItem="{ item }">
            <a-list-item class="main_video_body">
              <router-link to="{{item.video}}">
                <div>
                  <img :src="item.cover" class="video_cover">
                  <div class="playnum">
                    <p class="playnum_word">{{ item.viewCount }}</p>
                    <PlaySquareOutlined class="playnum_icon"/>
                  </div>

                  <div class="video_info">
                    <p class="title">{{ item.name }}</p>
                    <div class="upinfo">
                      <div class="upname"><p class="name">{{ item.upName }}</p>
                        <div class="tag" :style="tagStyle(item.upTagColor)">
                          <p class="uptag">{{ item.upTagText }}</p>
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

import boolean, {defineComponent, ref, toRaw} from 'vue';
import {PlaySquareOutlined} from '@ant-design/icons-vue'
import {nextTick} from "vue";
import axios from "axios";
import {onMounted} from "vue";
import router from "@/router";
import {getClientSize} from "ant-design-vue/es/vc-util/Dom/css";
import { message } from 'ant-design-vue';

interface UserData {
  id: number;
  upName: string;
  upTagColor: string;
  upTagText: string;
  subscribe: number;
  totalViewCount: number;
  totalLikeCount: number;
  totalCoinCount: number;
  totalCollectCount: number;
  password: string;


}

export default defineComponent({

  components: {
    PlaySquareOutlined
  },
  methods: {
    tagStyle(tagColor: any) {
      return {
        // background: 'purple'
        background: tagColor,
      };
    },

  },
  setup() {
    const colums = ref(7);
    const videoData = ref();
    const testShow = ref<boolean>(true);
    const token = ref();

    let userdata: UserData;
    const clientwidth = ref();
    onMounted(() => {

      token.value = sessionStorage.getItem('token');

      nextTick(() => {
        const windowwidth = ref(document.documentElement.clientWidth);
        if (windowwidth.value >= 1822 && windowwidth.value < 2119) {
          colums.value = 6;
        } else if (windowwidth.value >= 2119 && windowwidth.value < 3179) {
          colums.value = 7;
        } else if (windowwidth.value >= 3179 && windowwidth.value < 4267) {
          colums.value = 8;
        } else if (windowwidth.value >= 4267) {
          colums.value = 9;
        } else if (windowwidth.value >= 1611 && windowwidth.value < 1822) {
          colums.value = 5;
        } else if (windowwidth.value >= 1483 && windowwidth.value < 1611) {
          colums.value = 4;
        } else if (windowwidth.value >= 1017 && windowwidth.value < 1483) {
          colums.value = 3;
        } else if (windowwidth.value < 1272) {
          colums.value = 2;
        }
        window.onresize = () => {
          const windowwidth = ref(document.documentElement.clientWidth);
          console.log(windowwidth.value)
          if (windowwidth.value >= 1822 && windowwidth.value < 2119) {
            colums.value = 6;
          } else if (windowwidth.value >= 2119 && windowwidth.value < 3179) {
            colums.value = 7;
          } else if (windowwidth.value >= 3179 && windowwidth.value < 4267) {
            colums.value = 8;
          } else if (windowwidth.value >= 4267) {
            colums.value = 9;
          } else if (windowwidth.value >= 1611 && windowwidth.value < 1822) {
            colums.value = 5;
          } else if (windowwidth.value >= 1483 && windowwidth.value < 1611) {
            colums.value = 4;
          } else if (windowwidth.value >= 1272 && windowwidth.value < 1483) {
            colums.value = 3;
          } else if (windowwidth.value < 1272) {
            colums.value = 2;
          }
        }
      })
      axios.get('/videos', {headers: {'token': token.value}}).then((response) => {
        videoData.value = response.data;
        // console.log(response.data);
        console.log(videoData.value);
      }).catch((error) => {
        console.log(error.response.status);
        if (error.response.status == 401) {
          sessionStorage.clear();
          // message.info('登录已过期 请重新登录');
        }
      });
      if (sessionStorage.getItem('token') != null) {
        axios.post('/login?token=' + token.value).then((userdatatemp) => {
          userdata = {
            id: userdatatemp.data.id,
            upName: userdatatemp.data.upName,
            upTagColor: userdatatemp.data.upTagColor,
            upTagText: userdatatemp.data.upTagText,
            subscribe: userdatatemp.data.subscribe,
            totalViewCount: userdatatemp.data.totalViewCount,
            totalLikeCount: userdatatemp.data.totalLikeCount,
            totalCoinCount: userdatatemp.data.totalCoinCount,
            totalCollectCount: userdatatemp.data.totalCollectCount,
            password: userdatatemp.data.password
          }
          console.log(userdatatemp)
        });
      }
      // sessionStorage.setItem('token','testr');
      console.log(sessionStorage.getItem('token'));
    })
    return {
      selectedKeys1: ref<string[]>(['2']),
      selectedKeys2: ref<string[]>(['1']),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(['sub1']),
      // imagelink,
      videoData,
      testShow,
      colums,

    };

  },

});

</script>

<style>

.test {
  width: 100px;
  height: 100px;
  color: black;
  border-color: black;
  border-bottom-width: 1px;
  background-color: red;

}

.uptag {
  color: white;
  font-size: 10px;
  margin-bottom: -10px;
  width: fit-content;
}

.name {
  width: fit-content;
  display: inline-block;
}

.tag {
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

.video_info {
  height: 130px;
}

.upname {
  width: 200px;
  color: black;
}

.title {
  color: black;
  width: fit-content;
  height: fit-content;

}

.date {
  float: right;
}

.ant-card ant-card-bordered {
  display: none;
}

.playnum_icon {
  position: relative;
  bottom: 35px;
}

.playnum_word {
  position: relative;
  left: 20px;
}

.video_cover_big {
  /*clear: both;*/

}

.playnum {
  position: relative;
  bottom: 30px;
  height: 14px;
  color: white;
  left: 10px;
}

.main_video_body {
  margin: 0 auto;
  width: 275px;
  height: 250px;
  font-family: MiSans;

}

.card_body {
  justify-content: center;
}

div {
  word-break: break-all;
}

.video_cover {
  width: 275px;
  height: 154px;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
}

.main_row {
  height: 250px;
  justify-content: center;
}


.video_div {
  background-color: black;
}

</style>