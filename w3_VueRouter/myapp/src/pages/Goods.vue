<template>
  <div>Goods</div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("Goods.beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Goods.beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("Goods.beforeRouteLeave");
    next();
  },
};
</script>