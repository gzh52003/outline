<template>
  <div class="todolist">
    <TodoForm v-on:add="addItem" />
    <TodoContent :datalist="datalist" />

    <div>待办事项:{{datalist.length}}，完成：{{doneList.length}}，未完成：{{unDoneList.length}}</div>
  </div>
</template>
<script>
// 引入模块
import TodoForm from "./TodoForm.vue";
import TodoContent from "./TodoContent.vue";

import Bus from './Bus';

export default {
  data() {
    return {
      name: "todoList",
      datalist: [
        {
          id: 1,
          title: "实现个小目标，月薪过万",
          done: false, // 是否完成
          addtime: Date.now(),
        },
        {
          id: 2,
          title: "实现第二个小目标，赚他一个亿",
          done: false,
          addtime: Date.now() + 100,
        },
        {
          id: 3,
          title: "迎娶白富美，达到疯癫状态",
          done: false,
          addtime: Date.now() + 100,
        },
      ],
    };
  },
  computed: {
    // 这里为属性getter&setter
    doneList() {
      return this.datalist.filter((item) => item.done);
    },
    unDoneList() {
      return this.datalist.filter((item) => !item.done);
    },
  },
  methods: {
    addItem(title) {
      const data = {
        id: this.datalist.length + 1,
        title,
        done: false,
        addtime: Date.now(),
      };
      this.datalist.unshift(data);
    },
    completeItem(id) {
      this.datalist = this.datalist.map((item) => {
        if (item.id === id) {
          item.done = true;
        }
        return item;
      });
    },
    removeItem(id) {
      this.datalist = this.datalist.filter((item) => item.id !== id);
    },
    changeName(name) {
      this.name = name;
    },
  },

  mounted() {
    // mounted生命周函数在组件渲染后执行
    Bus.$on("complete", (id) => {
      this.completeItem(id);
    });
    Bus.$on("remove", (id) => {
      this.removeItem(id);
    });
  },
  components: {
    TodoForm,
    TodoContent,
  },
};
</script>
