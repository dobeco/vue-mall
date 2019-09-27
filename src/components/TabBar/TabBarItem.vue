<template>
  <div class="tabbar-item" @click="itemClick">
    <div class="item-icon" v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div class="item-icon-active" v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="activeStyle">
        <slot name="item-text"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name:'TabBarItem',
  props: {
    link:String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      //isActive: true,
      
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !==-1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      console.log('itemclick');
      this.$router.replace(this.link)
      
    }
  }

}
</script>

<style scoped>
.tabbar-item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 3px;
}
.tabbar-item-active {
  color: red;
}
</style>