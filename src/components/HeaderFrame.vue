<template>
  <div>
    <a-layout-header class="header">
      <div class="logo"/>

      <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          class="menu"
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
<!--        <a-menu-item key="4" class="userspace">-->
        <router-link to="/spaces" @click="key4">
          <a-popover placement="bottomRight" class="body_menu_hover">
            <template #content>
              <div class="hover_menu">
                <!--            <template>-->
                <!--              <a-popconfirm-->
                <!--                  title="Are you sure delete this task?"-->
                <!--                  ok-text="Yes"-->
                <!--                  cancel-text="No"-->
                <!--                  @confirm="confirm"-->
                <!--                  @cancel="cancel"-->
                <!--              >-->
                <div class="logout" @click="showConfirm">
                  <p class="logoutword">Logout</p>
                  <span role="img" aria-label="close-circle" class="logouticon"><svg focusable="false" class=""
                                                                                     data-icon="close-circle" width="2em"
                                                                                     height="2em" fill="currentColor"
                                                                                     aria-hidden="true"
                                                                                     viewBox="64 64 896 896"><path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></span>
                </div>
                <!--              </a-popconfirm>-->
                <!--            </template>-->
              </div>
            </template>
            <img srcset="http://192.168.1.102:2000/chfs/shared/hutao.jpeg" class="avater" v-show="isTokenFalse"/>

          </a-popover>
          <p class="username" v-show="isTokenFalse">ALing</p>

        </router-link>
<!--        </a-menu-item>-->

        <!--        </router-link>-->
      </a-menu>
<!--      <router-link to="/spaces">-->
<!--        <a-popover placement="bottomRight" class="body_menu_hover">-->
<!--          <template #content>-->
<!--            <div class="hover_menu">-->
              <!--            <template>-->
              <!--              <a-popconfirm-->
              <!--                  title="Are you sure delete this task?"-->
              <!--                  ok-text="Yes"-->
              <!--                  cancel-text="No"-->
              <!--                  @confirm="confirm"-->
              <!--                  @cancel="cancel"-->
              <!--              >-->
<!--              <div class="logout" @click="showConfirm">-->
<!--                <p class="logoutword">Logout</p>-->
<!--                <span role="img" aria-label="close-circle" class="logouticon"><svg focusable="false" class=""-->
<!--                                                                                   data-icon="close-circle" width="2em"-->
<!--                                                                                   height="2em" fill="currentColor"-->
<!--                                                                                   aria-hidden="true"-->
<!--                                                                                   viewBox="64 64 896 896"><path-->
<!--                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"></path></svg></span>-->
<!--              </div>-->
<!--              &lt;!&ndash;              </a-popconfirm>&ndash;&gt;-->
<!--              &lt;!&ndash;            </template>&ndash;&gt;-->
<!--            </div>-->
<!--          </template>-->
<!--          <img srcset="http://192.168.1.102:2000/chfs/shared/hutao.jpeg" class="avater" v-show="isTokenFalse"/>-->

<!--        </a-popover>-->
<!--        <p class="username" v-show="isTokenFalse">ALing</p>-->

<!--      </router-link>-->
      <div>
        <!--       <router-link to="/spaces">-->
        <!--        <img srcset="http://192.168.1.102:2000/chfs/shared/hutao.jpeg" class="avater"/>-->
        <!--       </router-link>-->
      </div>
    </a-layout-header>
  </div>
  <a-button type="primary" @click="showDrawer" class="loginbutton" v-show="!isTokenFalse">登录</a-button>
  <a-drawer
      v-model:visible="visible"
      class="custom-class"
      style="color: red"
      title="登录/注册"
      placement="top"
      @after-visible-change="afterVisibleChange"
  >
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinish"
        class="mainform"
        @finishFailed="onFinishFailed"
        v-show="isActive"
    >
      <a-form-item
          label="用户名"
          name="username"

          :rules="[{ required: true, message: 'Please input your username!' }]"

      >
        <a-input v-model:value="formState.username"/>
      </a-form-item>

      <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"

      >
        <a-input-password v-model:value="confirm"/>

      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">记住密码</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" style="border-radius: 20px">登录</a-button>
        <a-button style="margin-left: 10px; border-radius: 20px" @click="edit">注册</a-button>

      </a-form-item>
    </a-form>
    <a-form
        :model="formState"
        name="basic"
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="onFinishRegister"
        class="mainform"
        @finishFailed="onFinishFailed"
        v-show="!isActive">
      <a-form-item
          label="用户名"
          name="register_username"

          :rules="[{ required: true, message: 'Please input your username!' }]"

      >
        <a-input v-model:value="formState.username"/>
      </a-form-item>

      <a-form-item
          label="密码"
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"

      >
        <a-input-password v-model:value="formState.password"/>
      </a-form-item>
      <a-form-item
          label="确认密码"
          name="password"
          :rules="[{equals: 'password', message: 'Please input your password!' }]"

      >
        <a-input-password v-model:value="formState.passwordc"/>

      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" style="border-radius: 20px">注册</a-button>
        <a-button style="margin-left: 10px; border-radius: 20px" @click="edit">返回登录</a-button>

      </a-form-item>
    </a-form>

  </a-drawer>
</template>

<script lang="ts">

import {nextTick, reactive} from "vue";
import {onMounted} from "vue";
import router from "@/router";
import {defineComponent, ref} from 'vue';
import boolean from 'vue'
import DrawerProps from 'ant-design-vue';
import axios from "axios";
import Vue from 'vue'
import {createVNode} from 'vue';
import {Modal} from 'ant-design-vue';
import Vuex from 'vuex'
import {message} from 'ant-design-vue';
// import store from "@/store";
import {ExclamationCircleOutlined} from '@ant-design/icons-vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

export default {


  isLoginedLoginbutt(istoken: boolean) {
    if (istoken == false) {
      return {
        display: 'block',

      }
    } else {
      return {
        display: 'none',
      }
    }
  },
  isLoginedAvater(istoken: boolean) {
    if (istoken == false) {
      return {
        display: 'none',

      }
    } else {
      return {
        display: 'block',
      }
    }
  },


  setup() {
    const token = ref();

    const isTokenFalse = ref<boolean>(true);
    const isActive = ref<boolean>(true);
    onMounted(() => {
      token.value = sessionStorage.getItem('token');

      if (token.value == null) {
        isTokenFalse.value = false;
      } else if (token.value != null) {
        isTokenFalse.value = true;
      }


    })

    const showConfirm = () => {
      Modal.confirm({
        title: '确定要登出吗',
        icon: createVNode(ExclamationCircleOutlined),
        // content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
        onOk() {
          sessionStorage.clear();
          axios.get('/logout', {headers: {'token': token.value}})
          setInterval(function () {
            window.location.href = '/';

          }, 500)
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    };

    const confirm = (e: MouseEvent) => {
      console.log(e);
      message.success('Click on Yes');
    };
    const cancel = (e: MouseEvent) => {
      console.log(e);
      message.error('Click on No');
    };
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    //methods
    const edit = () => {
      isActive.value = !isActive.value;
    };

    const onFinish = (values: any) => {
      axios.post('/login', 0, {
        params: {
          upName: values.username,
          password: values.password
        }
      }).then((response) => {
        console.log(sessionStorage.getItem('token'))
        sessionStorage.setItem('token', response.data.token);
        console.log(response);
        console.log(sessionStorage.getItem('token'))

      })
      console.log('Success:', values);
      setInterval(function () {
        window.location.href = '/';

      }, 500)
    };
    // const logout = () => {
    //   sessionStorage.clear();
    //   axios.get('/logout',{headers:{'token': token.value}})
    //   setInterval(function (){
    //     window.location.href='/';
    //
    //   },500)
    // }
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };

    const visible = ref<boolean>(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };
    return {
      afterVisibleChange,
      visible,
      showDrawer,
      formState,
      onFinish,
      onFinishFailed,
      isTokenFalse,
      isActive,
      edit,
      // logout,
      confirm,
      cancel,
      showConfirm,

    }

  },

}

function isLogined() {
  throw new Error("Function not implemented.");
}
</script>

<style scoped>
/*.custom-class{*/
/*  background: url("../1.jpeg");*/
/*  background-size: 100% 100%;*/
/*}*/
/*.userspace{*/
/*  float: right;*/
/*  position: relative;*/
/*  right: 0;*/
/*}*/
.logoutword {
  display: inline-block;
  font-family: MiSans;
  font-weight: bold;
}

.logouticon {
  display: inline-block;
  margin-left: 90px;
  position: relative;
  top: 10px;

}

#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}

.hover_menu {
  width: 200px;
  height: fit-content;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
  padding-bottom: 10px;
}
.body_menu_hover{
}
.logout:hover {
  box-shadow: 0px 0px 0px 2px #c8c8ff,
  0px 0px 0px 4px #9964cd;

}
.logout{
  border-radius: 20px;

}
.loginbutton {
  float: right;
  position: absolute;
  top: 15px;
  right: 15px;
  width: fit-content;
  border-radius: 30px;
  display: inline-block;
  font-family: MiSans;

}

.mainform {

  justify-content: center;
  width: 700px;
  font-family: MiSans;
  margin: 0 auto;
  right: 100px;
  position: relative;

}

.username {
  position: absolute;
  color: white;
  float: right;
  margin: 0;
  top: 0;
  right: 80px;

}

.avater {
  width: 50px;
  height: 50px;
  float: right;

  position: absolute;
  display: inline-block;
  top: 8px;
  right: 15px;


  /*bottom: 55px;*/
  border-radius: 50%;

}

.avater:hover {
  box-shadow: 0px 0px 0px 2px #c8c8ff,
  0px 0px 0px 4px #9964cd;
}

.menu {
  width: 90%;
}

.header {
  font-family: MiSans;
  border-radius: 70px;

}

.site-layout-background {
  background: #fff;
}
</style>