
import { createRouter, createWebHistory } from "vue-router";
import Layout from '@/layout'


export const routes = [
  {
    path:'/',
    component: Layout,
    redirect: '/index',
    meta:{
      title:'首页',
      affix:true,
    },
    children:[
      {
        path:'index',
        name:"Index",
        component:() => import('@/views/index'),
        meta:{
          title:'首页',
          affix:true,
        }
      }
    ]
  },
  {
    path: "/login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/login"),
    hidden:true
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/erro/404.vue"),
    idden:true
  },
  {
    path: "/403",
    name: "403",
    component: () => import("../views/erro/403.vue"),
    idden:true
  }

]


export const asyncRoutes = [
  {
    path:'/',
    component: Layout,
    redirect: '/index',
    meta:{
      title:'首页',
      affix:true,
    },
    children:[
      {
        path:'index',
        name:"Index",
        component:() => import('@/views/index'),
        meta:{
          title:'首页',
          affix:true,
        }
      }
    ]
  }
]



const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// to路由去拿  from路由从哪结束  next通往下个路由的管道
router.beforeEach((to,from,next) =>{
  if(to.path === '/login'){
    next()
  }else{
    let token = localStorage.getItem('token')
    if(!token){
      next('/login')
    }else{
      next()
    }
  }
}) 


export default router;
