<template>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">待办事项</th>
        <th scope="col">是否完成</th>
        <th scope="col">操作</th>
      </tr>
    </thead>
    <tbody>
      <!-- <todo-item></todo-item> -->
      <tr is="todo-item" :key="item.id" v-for="(item,idx) in datalist" :item="item" :idx="idx"></tr>
    </tbody>
  </table>
</template>
<script>
import TodoItem from './TodoItem'
export default {
  // 接收父组件传入的数据
  props: ["datalist"],
  data() {
    return {
      
    };
  },
  components: {
    TodoItem,
  },
};
</script>