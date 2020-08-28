<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="goodslist"
      tooltip-effect="dark"
      style="width: 100%"
      class="goodslist"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column type="index" label="#" width="40"></el-table-column>
      <el-table-column prop="img_url" label="商品图片" width="60">
        <template v-slot:default="scope">
          <img :src="scope.row.img_url" />
        </template>
      </el-table-column>
      <el-table-column prop="goods_name" label="商品名称">
        <template v-slot:default="{row}">
          <h4>{{row.goods_name}}</h4>
          <p class="price">
            <del>{{row.price}}</del>
            <span>{{row.sales_price}}</span>
          </p>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="分类" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" width="120">
        <!-- 需要获取数据id -->
        <!-- <slot name="title"></slot>
        <slot :row="item"/>-->
        <template v-slot:default="scope">
          <el-button
            size="small"
            plain
            type="success"
            icon="el-icon-edit"
            circle
            @click="goto(scope.row._id)"
          ></el-button>

          <el-button
            size="small"
            plain
            type="danger"
            icon="el-icon-delete"
            circle
            @click="deleteUser(scope.row._id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
    layout="prev, pager, next"
    :page-size="size"
    :total="total"
    @current-change="changePage"
    @prev-click="prevPage"
    @next-click="nextPage"
    >
  </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page:1,
      size:5,
      total:0,
      goodslist: [],
      currentId: "",
    };
  },
  methods: {
    async deleteUser(id) {
      this.$confirm("你确认要删除这条数据吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const { data } = await this.$request.delete("/goods/" + id);

        if (data.code === 1) {
          this.goodslist = this.goodslist.filter((item) => item._id !== id);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        }
      });
    },
    goto(id) {
      // 跳转路由传参
      //   this.$router.push("/goods/edit/"+id + '?a=10');
      this.$router.push({
        name: "userEdit",
        params: { id },
        query: {
          a: 10,
          b: 20,
        },
      });
    },
    changePage(page){
      console.log('changePage',page);
      this.page = page;
      this.getData();
    },
    // prevPage(page){
    //   console.log('prevPage',page)
    // },
    // nextPage(page){
    //   console.log('nextPage',page)
    // },
    async getData(){
      const {page,size} = this;
      // {code,msg,data:{total,data}}
      const { data } = await this.$request.get("/goods",{
        params:{
          page,
          size
        }
      });

      this.total = data.data.total;
      this.goodslist = data.data.data;
    }
  },
  async created() {
    console.log("List=", this);
    // axios({
    //     url:'http://localhost:2003/api/goods',
    //     method:'get',
    //
    // })
    this.getData()
  },
};
</script>
<style lang="scss" scoped>
// scoped：添加scoped属性后，样式只在当前组件生效
// /deep/ or >>> 告诉编译器编译时不添加css属性选择器
.goodslist {
  img {
    width: 50px;
  }
  // /deep/ .el-icon-edit{color:#f00;}
}
h4{margin:5px 0;}
.price {
  margin:5px 0;
  del {
    margin-right: 5px;
    color: #888;
    &::before {
      content: "￥";
    }
  }
  span {
    color: #f00;
    &::before {
      content: "￥";
    }
  }
}
</style>