<template>
  <div>Order</div>
</template>
<script>
export default {
  // 组件内路由守卫
  beforeRouteEnter(to, from, next) {
      console.log('Order.beforeRouteEnter');
      next();
  },
  beforeRouteUpdate(to, from, next) {
      console.log('Order.beforeRouteUpdate');
      next();
  },
  beforeRouteLeave(to, from, next) {
      console.log('Order.beforeRouteLeave');
      next();
  },
};
</script>