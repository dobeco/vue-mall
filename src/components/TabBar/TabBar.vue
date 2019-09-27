<template>
  <div id="tab-bar">
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {},
  data() {
    return {

    }

  },

}

</script>

<style scoped>
#tab-bar{
  display: flex;


  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #eae6e6;
}

</style>