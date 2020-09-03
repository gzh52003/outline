
import request from '../utils/request'
import {Notify} from 'vant'

const cart = {
    // 添加命名空间
    // namespaced:true,
    // 共享的数据：类似组件中的data
    state:{
        goodslist:[{
            _id: "5f3f986fa2711242f8100ab3",
            goods_id: "25572",
            goods_name:
              "瑞士艺术制表大师 爱宝时（EPOS）-Ladies女士系列 心跳时光 4314.133.20.50.10 机械女表",
            big_img_url: "/img/80b6a4d2175c4028999e3e2eab242d3f_big.jpg",
            category: "女士表",
            sales_price: "580",
            price: "6960",
            sales_qty: 968.0,
            img_url: "/img/80b6a4d2175c4028999e3e2eab242d3f.jpg",
            qty: 1,
            checked:false,
          },
          {
            _id: "5f3f986fa2711242f8100ab4",
            goods_id: "25578",
            goods_name:
              "瑞士艺术制表大师 爱宝时（EPOS）-Ladies女士系列 梦想家 4387.152.24.28.15 机械女表",
            big_img_url: "/img/9591bc752bdb4992bfa3c56bf56667ff_big.jpg",
            category: "女士表",
            sales_price: "613.3",
            price: "7360",
            sales_qty: 285.0,
            img_url: "/img/9591bc752bdb4992bfa3c56bf56667ff.jpg",
            qty: 5,
            checked:false,
          },
          {
            _id: "5f3f986fa2711242f8100ab5",
            goods_id: "42531",
            goods_name:
              "瑞士艺术制表大师 爱宝时（EPOS）-Ladies 女士系列 罗马假期 4390.152.20.16.30 机械女表",
            big_img_url: "/img/36c7dec6f3f44491a31ad99ad4338fea_big.jpg",
            category: "女士表",
            sales_price: "680",
            price: "8160",
            sales_qty: 179.0,
            img_url: "/img/36c7dec6f3f44491a31ad99ad4338fea.jpg",
            qty: 10,
            checked:false,
          }]
    },
    getters:{
        totalPrice(state, getters, rootState, rootGetters){
            // console.log('getters=',state, getters, rootState, rootGetters)
            return state.goodslist.reduce((pre,item)=>pre+item.sales_price*item.qty,0)*100;
        },
        test(){
            return 'cart'
        }
    },

    // 定义修改state的事件
    // 调用：this.$store.commit('add')
    mutations:{
        initCart(state,data){
            state.goodslist = data;
        },
        // 添加商品到购物车
        add(state,goods){
            state.goodslist.unshift(goods)
            console.log('add to cart',goods)
        },

        // 修改数量
        changeQty(state,{_id,qty}){
            state.goodslist = state.goodslist.map(item=>{
                if(item._id === _id){
                    item.qty = qty;
                }
                return item;
            });

            console.log(state.goodslist)
        },

        // 删除商品
        remove(state,_id){
            state.goodslist = state.goodslist.filter(item=>item._id!==_id)
        },

        // 清空购物车
        clear(state){
            state.goodslist = []
        }
        
    },

    actions:{
        // 根据库存数量来判断是否允许更改购物车商品数量
        async changeQtyAsync(context,{_id,qty}){
            console.log('context=',context);
            // 发起ajax请求，获取当前商品的库存数量
            // 库存>=qty：允许修改购物车商品数量
            // 库存<qty：不允许增加购物车商品数量
            const {data} = await request.get(`/goods/${_id}/kucun`)
            const kucun = data.data;
            console.log('kucun=',kucun)

            if(kucun<qty){
                Notify({ type: 'danger', message: '库存不足' })
                qty = kucun;
            }
            context.commit('changeQty',{_id,qty})
        },
        async getCart(){
            const {data} = await request.get(`/cart`);
            context.commit('initCart',data.data)
        }
    }
}

export default cart;