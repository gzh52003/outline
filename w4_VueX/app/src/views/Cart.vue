<template>
  <div>
    <van-steps :active="active">
      <van-step>购物车</van-step>
      <van-step>提交订单</van-step>
      <van-step>付款</van-step>
      <van-step>购买完成</van-step>
    </van-steps>
    <van-card
      :price="item.sales_price"
      :title="item.goods_name"
      :thumb="item.img_url"
      v-for="item in goodslist"
      :key="item._id"
      @click="gotoDetail(item._id)"
    >
      <template #tag>
        <van-checkbox v-model="item.checked"></van-checkbox>
      </template>
      <template #price>
        <p class="price">
          <del>{{item.price}}</del>
          <span>{{item.sales_price}}</span>
          &times; {{item.qty}}
        </p>
      </template>
      <template #footer>
        <van-button plain size="mini" type="danger" icon="cross"></van-button>
      </template>
    </van-card>
    <van-submit-bar :price="totalPrice" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span>修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
import Vue from "vue";
import { Card, Step, Steps, SubmitBar } from "vant";

Vue.use(Card);
Vue.use(Step);
Vue.use(Steps);
Vue.use(SubmitBar)

export default {
  name: "Cart",
  data() {
    return {
      active: 0,
      // checkAll:false,
      selecteds:[],
      // goodslist: [
      //   {
      //     _id: "5f3f986fa2711242f8100ab3",
      //     goods_id: "25572",
      //     goods_name:
      //       "瑞士艺术制表大师 爱宝时（EPOS）-Ladies女士系列 心跳时光 4314.133.20.50.10 机械女表",
      //     big_img_url: "/img/80b6a4d2175c4028999e3e2eab242d3f_big.jpg",
      //     category: "女士表",
      //     sales_price: "580",
      //     price: "6960",
      //     sales_qty: 968.0,
      //     img_url: "/img/80b6a4d2175c4028999e3e2eab242d3f.jpg",
      //     qty: 1,
      //     checked:false,
      //   },
      //   {
      //     _id: "5f3f986fa2711242f8100ab4",
      //     goods_id: "25578",
      //     goods_name:
      //       "瑞士艺术制表大师 爱宝时（EPOS）-Ladies女士系列 梦想家 4387.152.24.28.15 机械女表",
      //     big_img_url: "/img/9591bc752bdb4992bfa3c56bf56667ff_big.jpg",
      //     category: "女士表",
      //     sales_price: "613.3",
      //     price: "7360",
      //     sales_qty: 285.0,
      //     img_url: "/img/9591bc752bdb4992bfa3c56bf56667ff.jpg",
      //     qty: 5,
      //     checked:false,
      //   },
      //   {
      //     _id: "5f3f986fa2711242f8100ab5",
      //     goods_id: "42531",
      //     goods_name:
      //       "瑞士艺术制表大师 爱宝时（EPOS）-Ladies 女士系列 罗马假期 4390.152.20.16.30 机械女表",
      //     big_img_url: "/img/36c7dec6f3f44491a31ad99ad4338fea_big.jpg",
      //     category: "女士表",
      //     sales_price: "680",
      //     price: "8160",
      //     sales_qty: 179.0,
      //     img_url: "/img/36c7dec6f3f44491a31ad99ad4338fea.jpg",
      //     qty: 10,
      //     checked:false,
      //   },
      // ],
    };
  },
  computed:{
    goodslist(){
      return this.$store.state.goodslist
    },
    checkAll:{
      get(){
        return this.goodslist.every(item=>item.checked);
      },
      set(val){
        this.goodslist = this.goodslist.map(item=>{
          item.checked = val;
          return item;
        });
      }
    },
    totalPrice(){
      return this.goodslist.reduce((pre,item)=>pre+item.sales_price*item.qty,0)*100;
    }
  },
  methods:{
    onSubmit(){
      
    },
    gotoDetail(id){
      this.$router.push('/goods/'+id);
    }
  },
  created(){
    this.$parent.showMenu = false;
    console.log('goodslist=',this.$store.state)
  },
  beforeDestroy(){
    this.$parent.showMenu = true;
     console.log('cart.destroyed',this.$parent.showMenu)
  }
};
</script>