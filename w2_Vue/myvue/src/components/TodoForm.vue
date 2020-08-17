<template>
  <div class="input-group mb-3">
    <input
      type="search"
      class="form-control"
      ref="search"
      v-model="todoTitle"
      @keyup.enter="confirm"
    />
    <div class="input-group-append">
      <!-- <button class="btn btn-success" v-on:click="confirm">添加</button> -->
      <todo-button class="btn-success" v-on:click.native="confirm">添加</todo-button>
    </div>
  </div>
</template>
<script>
import TodoButton from './TodoButton.vue';

export default {
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    confirm() {
      console.log(this.$parent, this.$root);
      // 在子组件中触发自定义事件，并传递参数
      this.$emit("add", this.todoTitle);

      // 简单数据的修改
      // this.$emit('update:changename','laoxie');
      // 等效于v-on:add="事件处理函数"
      // this.$on('add',()=>{

      // })

      this.todoTitle = "";
      this.$refs.search.focus();
    },
  },
  components:{
    TodoButton
  }
};
</script>