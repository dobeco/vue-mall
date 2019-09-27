import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* 
const originalPush = Router.prototype.push 
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = Router.prototype.replace 

Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}
 */


import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: ()=>import('./views/Category.vue'),
    meta: {
      title: '分类'
    },
    beforeEnter: (to, from, next) => {
      next()
      // eslint-disable-next-line no-console
      console.log('Category beforeEnter');
      
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./views/Cart.vue'),
    meta: {
      title: '购物车'
    }
  
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('./views/Profile.vue'),
    meta: {
      title: '我的'
    }

  }
 
]

const router = new Router({
 // mode: 'history',
  routes
})

// 前置守卫
router.beforeEach((to, from, next) => {
  // to 即将要进入的目标
  // from 当前导航要离开的路由
  // next 回调函数
  //document.title= to.matched[0].meta.title
  next()
})

router.afterEach((to, from) => {
  
})
export default router