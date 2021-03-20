<template>
  <div class="login-box">
    <div class="login-logo">
      <svg-icon icon-class="logo" />
<!--      <img src="~@/assets/images/logo.png" alt="">-->
      <h1>Diary Admin</h1>
    </div>
    <a-form layout="horizontal" >
      <a-form-item>
        <a-input size="large" placeholder="admin" v-model:value="form.userName" >
          <template v-slot:prefix><user-outlined type="user"/></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input  size="large" type="password" placeholder="123456" autocomplete="new-password" v-model:value="form.passWord" >
          <template v-slot:prefix><lock-outlined type="user"/></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
            type="primary"
            html-type="submit"
            size="large"
            @click="handleSubmit"
            :loading="loading"
            block
        >
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script >
import {UserOutlined,LockOutlined} from  '@ant-design/icons-vue'
import {defineComponent,reactive,toRefs} from 'vue'
import{useRoute,useRouter} from 'vue-router'
import {message} from 'ant-design-vue'
import {useStore} from 'vuex'
export default defineComponent({
  name:'Login',
  components:{
    UserOutlined,
    LockOutlined
  },


  setup(){
    const state = reactive({
      loading: false,
      form:{
        userName:"",
        passWord:""
      }
    })

    const store = useStore()
    const route = useRoute()
    const router = useRouter()

    const handleSubmit = async() =>{
      const {userName,passWord} = state.form
      if(userName.trim() === '' || passWord.trim() === '') return message.warning('用户名或密码不能为空')
      state.loading = true
      const res = await store.dispatch('LoginResult',state.form)
      console.log(res)
      if(!res.success){
        return message.error('用户名或密码错误')
      }
      state.loading = false
      console.log(store.state.token)
      message.success('登录成功！')
      const toPath = decodeURIComponent((route.query?.redirect || '/')).trim()
      router.replace(toPath).then(()=>{
        if(route.name === 'login'){
          router.replace('/')
        }
      })
    }

    return{
      ...toRefs(state),
      handleSubmit
    }

  }


})


</script>

<style lang="scss" scoped>
.login-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 240px;
  flex-direction: column;
  align-items: center;
  background: url("~@/assets/login.svg");
  background-size: 100%;
  .login-logo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .svg-icon {
      font-size: 48px;
    }
    img {
      height: 48px;
    }
    h1 {
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
    ::v-deep(.ant-form) {
      width: 400px;
      .ant-col {
        width: 100%;
      }
      .ant-form-item-label {
        padding-right: 6px;
      }
  }
}
</style>