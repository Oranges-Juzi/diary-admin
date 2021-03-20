<template>
  <div class="app-avatar">
    <a-row :gutter="24">
      <a-col>
        <a-button type="link" size="small">
          <template #icon>
            <LinkOutlined style="color: #fff" />
          </template>
        </a-button>
      </a-col>
      <a-col>
          <a-badge :count="99" dot>
            <bell-outlined style="color: #fff" />
          </a-badge>
      </a-col>
      <a-col>
        <a-dropdown>
          <span class="ant-dropdown-link">
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <DownOutlined />
          </span>
          <!-- 下拉部分 -->
          <template #overlay>
            <a-menu>
              <a-menu-item>用户资料</a-menu-item>
              <a-menu-item @click="Logout">退出登录</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import {
  DownOutlined,
  LinkOutlined,
  BellOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    DownOutlined,
    LinkOutlined,
    BellOutlined,
  },
  setup() {
    const router = useRouter();
    //退出登录
    const Logout = async () => {
      localStorage.removeItem("token");
      let token = localStorage.getItem("token");
      if (!token) {
        router.go("/");
      } else {
        return message.error("退出失败！");
      }
    };

    return {
      Logout,
    };
  },
});
</script>

<style  scoped>
.app-avatar .ant-dropdown-link {
  display: block;
  min-height: 64px;
  cursor: pointer;
}

#components-badge-demo-dot .anticon-notification {
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
}
</style>