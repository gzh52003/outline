<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item v-for="item in recommend" :key="item._id">
        <img v-lazy="item.img_url" />
      </van-swipe-item>
    </van-swipe>

    <!-- 商品列表 -->
    <van-grid :border="false" :column-num="2" class="goodslist">
      <van-grid-item v-for="item in goodslist" :key="item._id" @click="gotoDetail(item._id)">
        <van-image :src="item.img_url" />
        <h4>{{item.goods_name}}</h4>
        <p class="price">
          <del>{{item.price}}</del>
          <span>{{item.sales_price}}</span>
        </p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, Grid, GridItem, Image } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Image);

export default {
  name: "Home",
  data() {
    return {
      recommend: [],
      goodslist: [],
    };
  },
  components: {},
  methods:{
    gotoDetail(id){
      // this.$router.push(`/goods/${id}`)
      this.$router.push({
        name:'Goods',
        params:{
          id
        }
      })
    }
  },
  async created() {
    // 轮播图数据
    // recommend === data.data
    const {
      data: { data: recommend },
    } = await this.$request.get("/goods", {
      params: {
        size: 5,
        sort: "sales_qty",
        total: 0,
      },
    });

    this.recommend = recommend;

    // 列表数据
    const {
      data: { data: goodslist },
    } = await this.$request.get("/goods", {
      params: {
        total: 0,
      },
    });
    this.goodslist = goodslist;
  },
};
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.my-swipe .van-swipe-item img {
  height: 100%;
}
.goodslist {
  img {
  }
  h4 {
    margin-bottom:0;
    font-size: 14px;
  }
}
</style>
