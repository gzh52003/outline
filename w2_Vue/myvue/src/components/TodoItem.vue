<template>
  <tr :class="{'table-success':item.done}">
    <th scope="row">{{idx+1}}</th>
    <td>{{item.title}}</td>
    <td>{{item.done ? '是' : '否'}}</td>
    <td>
      <TodoButton class="btn-success" @click.native="complete(item.id)">完成</TodoButton>
      <TodoButton class="btn-danger" @click.native="remove(item.id)">
        <span>删除</span>
      </TodoButton>
    </td>
  </tr>
</template>
<script>
import TodoButton from './TodoButton.vue';
import Bus from './Bus';

export default {
  props: ["item", "idx"],
  methods: {
    remove(id) {
      Bus.$emit("remove", id);
    },
    complete(id) {
      Bus.$emit("complete", id);
    },
  },
  components:{
      TodoButton
  }
};
</script>