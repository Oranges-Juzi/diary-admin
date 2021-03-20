<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-row>
        <a-col>
          <a-menu
            theme="dark"
            mode="horizontal"
            class="menu"
            v-model:selectedKeys="selectedKeys"
            :style="{ lineHeight: '64px' }"
          >
            <a-menu-item key="1">
              <DashboardOutlined />
              仪表盘</a-menu-item
            >
            <a-sub-menu key="2">
              <template #title>
                <span class="submenu-title-wrapper">
                  <FormOutlined />
                  文章
                </span>
              </template>
              <a-menu-item key="setting:1">所有文章</a-menu-item>
              <a-menu-item key="setting:2">写文章</a-menu-item>
              <a-menu-item key="setting:3">分类目录</a-menu-item>
              <a-menu-item key="setting:4">标签</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="3">
              <template #title>
                <span class="submenu-title-wrapper">
                  <ReadOutlined />
                  页面
                </span>
              </template>
              <a-menu-item key="setting:1">所有页面</a-menu-item>
              <a-menu-item key="setting:2">新建页面</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="4">
              <PictureOutlined />
              附件</a-menu-item
            >
            <a-menu-item key="5">
              <MessageOutlined />
              评论</a-menu-item
            >
            <a-sub-menu key="6">
               <template #title>
                <span class="submenu-title-wrapper">
                  <SkinOutlined />
                  外观
                </span>
              </template>
              <a-menu-item key="setting:1">主题</a-menu-item>
              <a-menu-item key="setting:2">菜单</a-menu-item>
              <a-menu-item key="setting:3">主题编辑</a-menu-item>
              </a-sub-menu
            >
            <a-menu-item key="7">
              <UserOutlined />
              用户</a-menu-item
            >
            <a-sub-menu key="8">
              <template #title>
                <span class="submenu-title-wrapper">
                  <SettingOutlined />
                  系统
                </span>
              </template>
              <a-menu-item key="setting:1">博客设置</a-menu-item>
              </a-sub-menu
            >
          </a-menu>
        </a-col>
        <a-col>
          <!-- 头像部分 -->
          <app-header />
        </a-col>
      </a-row>
    </a-layout-header>
    <a-breadcrumb separator=">" class="breadcrumb" style="line-height: 50px">
      <a-breadcrumb-item style="margin-left: 80px">首页</a-breadcrumb-item>
      <a-breadcrumb-item>仪表盘</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content style="padding: 0 50px"> 内容 </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>
<script>
import {
  DashboardOutlined,
  FormOutlined,
  ReadOutlined,
  PictureOutlined,
  MessageOutlined,
  SkinOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import AppHeader from "./header/index";
export default defineComponent({
  components: {
    AppHeader,
    DashboardOutlined,
    FormOutlined,
    ReadOutlined,
    PictureOutlined,
    MessageOutlined,
    SkinOutlined,
    UserOutlined,
    SettingOutlined,
  },

  setup() {
    return {
      selectedKeys: ref(["1"]),
    };
  },
});
</script>
<style>
.ant-row {
  display: flex;
  justify-content: space-between;
}

.breadcrumb {
  height: 50px;
  background-color: #fff;
}

.menu .ant-menu-item {
  padding: 0 30px;
}

.layout {
  left: 0px;
  height: 100vh;
  overflow: auto;
}

.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
</style>