<template>

  <tab-bar>
      <tab-bar-item link="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text" class="tabbar-item__text">首页</div>
      </tab-bar-item>

      <tab-bar-item link="/category">
      <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text" class="tabbar-item__text">分类</div>
      </tab-bar-item>

      <tab-bar-item link="/cart">
      <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text" class="tabbar-item__text">购物车</div>
      </tab-bar-item>

      <tab-bar-item link="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text" class="tabbar-item__text">我的</div>
      </tab-bar-item>
  </tab-bar>

</template>

<script>
import TabBar from '@/components/TabBar/TabBar.vue'
import TabBarItem from '@/components/TabBar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
  
