<template>
  <a-layout :style="{width: '100%'}">
    <a-layout style="padding: 0 24px 24px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>User Space</a-breadcrumb-item>
      </a-breadcrumb>
      <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '200px', width:'100%'}"
      >
        <div class="upProile">
          <img :src="avatar" class="avater"/>
          <p class="username">{{ upName }}</p>
          <!--          <div class="tag" :style="tagStyle(item.upTagColor)">-->
          <div class="tag">
            <p class="uptag">{{ upTagText }}</p>
          </div>
          <div class="sign_div">
            To be or not to be
          </div>
          <div class="total">
 <span role="img" aria-label="play-square" class="coin_icon" data-v-4ff0ada8=""><svg focusable="false"
                                                                                     class=""
                                                                                     data-icon="play-square"
                                                                                     width="2.5em"
                                                                                     height="2.5em"
                                                                                     fill="currentColor"
                                                                                     aria-hidden="true"
                                                                                     viewBox="64 64 896 896"><path
     d="M442.3 677.6l199.4-156.7a11.3 11.3 0 000-17.7L442.3 346.4c-7.4-5.8-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9z"></path><path
     d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg></span>
            <div class="coin_amount">{{ totalViewCount }}</div>

          </div>
          <!--          <div class="divde"></div>-->

          <div class="total">
            <span role="img" aria-label="like" class="coin_icon" data-v-4ff0ada8=""><svg focusable="false" class=""
                                                                                         data-icon="like" width="2.5em"
                                                                                         height="2.5em"
                                                                                         fill="currentColor"
                                                                                         aria-hidden="true"
                                                                                         viewBox="64 64 896 896"><path
                d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 00-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 00471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 016.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0142.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg></span>
            <div class="coin_amount">{{ totalLikeCount }}</div>

          </div>
          <!--          <div class="divde"></div>-->
          <div class="total">            <span role="img" aria-label="pay-circle" width="1em" height="1em"
                                               class="coin_icon" data-v-4ff0ada8=""><svg
              focusable="false" class="coin_svg" data-icon="pay-circle" width="2.5em" height="2.5em"
              fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 00-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8-.1-4.4-3.7-8-8.1-8z"></path></svg></span>


            <div class="coin_amount">{{ totalCoinCount }}</div>

          </div>
          <!--          <a-divider type="vertical" />-->
          <!--          <a href="#">Link</a>-->
          <!--          <a-divider type="vertical" />-->
          <!--          <a href="#">Link</a>-->
          <!--          <a-divider type="vertical" class="divde"/>-->
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
  <a-layout>
    <a-layout style="padding: 0 24px 24px">

      <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
          class="mainswich"
      >
        <!--        <p class="space_tit">投稿作品</p>-->
        <!--        <div class="swichbar"></div>-->
        <a-tabs v-model:activeKey="activeKey" class="swichbarbody">

          <a-tab-pane key="1" tab="我的视频" class="tabs">
            <a-list :grid="{ gutter:0, column: colums }" :data-source="videoData">
              <!--              <a-spin tip="Loading..." :spinning="spinning">-->
              <template #renderItem="{ item }">

                <a-list-item class="space_video_body">
                  <router-link to="{{item.video}}">
                    <div class="mainbody">
                      <img :src="item.cover" class="video_cover">
                      <div class="playnum">
                        <p class="playnum_word">{{ item.viewCount }}</p>
                        <PlaySquareOutlined class="playnum_icon"/>
                      </div>

                      <div class="video_info">
                        <p class="title">{{ item.name }}</p>
                        <!--                    <div class="upinfo">-->
                        <!--                      <div class="upname"><p class="name">{{ item.upName }}</p>-->
                        <!--                        <div class="tag" :style="tagStyle(item.upTagColor)">-->
                        <!--                          <p class="uptag">{{ item.upTagText }}</p>-->
                        <!--                        </div>-->
                        <!--                      </div>-->
                        <!--                      &lt;!&ndash;                    <p class="date">9-12</p>&ndash;&gt;-->
                        <!--                    </div>-->
                      </div>
                    </div>
                  </router-link>
                </a-list-item>
              </template>
              <!--              </a-spin>-->
            </a-list>
          </a-tab-pane>
          <a-tab-pane key="2" tab="我的收藏" class="tabs">


          </a-tab-pane>
        </a-tabs>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import {defineComponent, nextTick, onMounted, ref, h} from "vue";
import axios from "axios";
import {PlaySquareOutlined, PayCircleOutlined, LikeOutlined} from "@ant-design/icons-vue";
import {message} from "ant-design-vue";
import {LoadingOutlined} from '@ant-design/icons-vue';
import 'element-plus/dist/index.css'

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
    PlaySquareOutlined,
    // PayCircleOutlined
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
    let userdata: UserData;
    const token = ref();
    const videoData = ref();
    const colums = ref(7);
    const upName = ref()
    const upTagText = ref()
    const upTagColor = ref()
    const totalCoinCount = ref()
    const subscribe = ref()
    const totalViewCount = ref()
    const totalLikeCount = ref()
    const totalCollectCount = ref()
    const spinning = ref(true);
    const avatar = ref()
    // videoData.value[0] = {id: 1, video: 'test', cover: 'http://1.com', viewCount: 100, name: 'test', upName: 'test', upTagColor: 'purple', upTagText: 'test'}
    onMounted(() => {
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
      });
      token.value = localStorage.getItem('token');
      axios.get('/videos', {headers: {'token': token.value}}).then((response) => {
        videoData.value = response.data;
        spinning.value = false;
        // console.log(response.data);
        console.log(videoData.value);
      }).catch((error) => {
        console.log(error.response.status);
        if (error.response.status == 401) {
          localStorage.clear();
          setInterval(function () {
            window.location.href = '/';

          }, 500)

        }
      });
      axios.post('/tokenlogin', 0, {
        headers: {'token': token.value},
        params: {'token': token.value}
      }).then((userdatatemp) => {
        // userdata = {
        //   id: userdatatemp.data.id,
        //   upName: userdatatemp.data.upName,
        //   upTagColor: userdatatemp.data.upTagColor,
        //   upTagText: userdatatemp.data.upTagText,
        //   subscribe: userdatatemp.data.subscribe,
        //   totalViewCount: userdatatemp.data.totalViewCount,
        //   totalLikeCount: userdatatemp.data.totalLikeCount,
        //   totalCoinCount: userdatatemp.data.totalCoinCount,
        //   totalCollectCount: userdatatemp.data.totalCollectCount,
        //   password: userdatatemp.data.password
        // }
        // console.log(response.data);
        upName.value = userdatatemp.data.upName;
        upTagText.value = userdatatemp.data.upTagText;
        upTagColor.value = userdatatemp.data.upTagColor;
        totalCoinCount.value = userdatatemp.data.totalCoinCount;
        subscribe.value = userdatatemp.data.subscribe;
        totalCollectCount.value = userdatatemp.data.totalCollectCount
        totalLikeCount.value = userdatatemp.data.totalLikeCount;
        totalViewCount.value = userdatatemp.data.totalViewCount;
        avatar.value = userdatatemp.data.avatar;
        console.log(userdata);
      }).catch((error) => {
        console.log(error.response.status);
        if (error.response.status == 401) {
          localStorage.clear();
          setInterval(function () {
            window.location.href = '/';

          }, 500)
        }
      });
    })


    return {
      videoData,
      token,
      activeKey: ref('1'),
      colums,
      // userdata,
      upName,
      upTagText,
      totalCoinCount,
      subscribe,
      totalViewCount,
      totalLikeCount,
      totalCollectCount,
      spinning,
      avatar,

    }
  },
  name: "SpacesView"
})
</script>

<style scoped>
.swichbarbody{
  margin: 0 auto;
}
.sign_div {
  position: relative;
  right: 150px;
  top: 10px;
  font-family: MiSans;
  display: inline-block;
  height: fit-content;
  width: 400px;
  word-break: break-all;
}

.tabs {
  position: relative;
  left: 0;
}

.total {
  display: inline-block;
  width: 100px;
  text-align: center;
  position: relative;
  top: 10px;
  float: right;
}

.swichbar {
  width: 100px;
  height: 3px;
  background-color: #9964cd;
  position: relative;
  bottom: 25px;
  left: 34px;
}

.coin_amount {

  font-family: MiSans;
  display: inline-block;
  position: relative;
  margin-top: 0px;
  top: 10px;


}

.mainswich {
  position: relative;

}

.divde {
  width: 1px;
  height: 80px;
  display: inline-block;
  background-color: lightgray;
  position: relative;
  right: 95px;
  top: 80px;
  margin-right: 10px;
  float: right;

}

.coin_icon {
  position: relative;
  display: block;
}

.avater {
  display: inline-block;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: purple;

}

/*.space_video_body{*/
/*  padding-left: 100px;*/
/*}*/
.mainbody {
  width: 275px;
  font-family: MiSans;
  margin: 0 auto;
}

.avater:hover {
  box-shadow: 0px 0px 10px rgba(100, 235, 255, 0.8);
}

.coin_svg:hover {
  box-shadow: 0px 0px 10px rgba(100, 235, 255, 0.8);
}

/*@font-face {*/
/*  font-family: 'MiSans';*/
/*  local*/
/*}*/
.space_tit {
  font-family: MiSans;
  font-size: 25px;
  margin-left: 34px;
  font-weight: bold;
  width: fit-content;

}

.uptag {
  font-size: 13px;
  font-family: MiSans;
}

.video_info {
  height: 50px;
  width: 275px;
  margin-left: 38px;
  font-family: MiSans;
  margin-top: 10px;
}

.tag {
  width: fit-content;
  display: inline-block;
  height: 25px;
  position: relative;
  left: 50px;
  bottom: 53px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 5px;
  background-color: purple;
  /*background-color: purple;*/
  /*margin-bottom: 100px;*/
}

.username {
  display: inline-block;
  position: relative;
  bottom: 50px;
  left: 40px;
  font-size: 25px;
  font-weight: bold;
  font-family: MiSans;

}

.title {
  color: black;
  width: fit-content;
  height: fit-content;
  position: relative;
  right: 30px;
}

.date {
  float: right;
}

.ant-card ant-card-bordered {
  display: none;
}

.playnum_icon {
  position: relative;
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

.space_video_body {
  margin: 0 auto;
  width: 275px;
  height: 200px;
  text-align: center;
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