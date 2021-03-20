
import { createStore } from "vuex";
import { Login } from "../api/user";

export default createStore({
  //缓存属性
  state: {
    token:''
  },
  //存放改变state中属性的函数
  mutations: {
    SET_TOKEN:(state,token) =>{
      state.token = token
    }
  },
  //使用mutations中的函数
  actions: {
    LoginResult({commit},userInfo){
      return new Promise((resolve,reject) =>{
        Login(userInfo).then(res =>{
          const {code,token} = res
          if(code === 200){
            localStorage.setItem('token',token)
            commit('SET_TOKEN',token)
          }
          resolve(res)
        }).catch(error =>{
          reject(error)
        })
      })
    }
  },
  //
  modules: {},
  //计算state属性值的更新
  getters:{

  }
});
