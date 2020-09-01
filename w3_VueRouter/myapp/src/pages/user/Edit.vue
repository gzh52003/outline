<template>
  <div>
    <h1>用户编辑</h1>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-if="userid" v-bind:value="ruleForm.username" disabled></el-input>
        <el-input type="text" v-else v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="ruleForm.gender">
          <el-option label="男" value="male"></el-option>
          <el-option label="女" value="female"></el-option>
          <el-option label="保密" value="baomi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">{{userid ? '修改' : '添加'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name:'UserEdit',
  data() {
    var checkUsername = (rule, value, callback) => {
      console.log('value',value);
      if (value.trim() === '') {
        // 如果输入的值不符合规则，则提示信息
        return callback(new Error("用户名不能为空"));
      } else {
        this.$request.get('/reg/check',{
          params:{
            username:value
          }
        }).then(({data})=>{
          if(data.code === 0){
            callback(new Error("用户名已存在"))
          }else{
            // 规则通过后的回掉
            callback();
          }
        })
        
      }
    };

    var checkAge = (rule, value, callback) => {
      if (value < 18) {
        // 如果输入的值不符合规则，则提示信息
        return callback(new Error("未满18禁止浏览"));
      } else {
        // 规则通过后的回掉
        callback();
      }
    };
    return {
      userid: "1",
      ruleForm: {
        username: "",
        password: "",
        gender: "male",
        age: "",
      },
      rules: {
        age: [
          { required: true, message: "年龄必填", trigger: "change" },
          { type: "number", message: "只能输入数字", trigger: "change" },
          // 自定义校验规则
          {
            validator: checkAge,
            trigger: "change",
          },
        ],
        password: [
          {
            min: 6,
            max: 12,
            message: "密码长度必须在 6 到 12 个字符",
            trigger: "blur",
          },
        ],
        username:[
          {
            validator: checkUsername,
            trigger: "blur",
          }
        ]
      },
    };
  },
  watch:{
    // 监听实例属性，如果有变化则执行这里的代码
    userid:function(newVal,oldVal){
      // 监听userid，当userid有变化时，执行这里的代码
      console.log('userid change',newVal,oldVal)
    },

    // 深度监听
    'ruleForm.gender'(newVal,oldVal){
      console.log('gender',newVal,oldVal)
    },
    '$route.path'(newVal,oldVal){
      console.log('$route change',newVal,oldVal);
      if(newVal === '/user/add'){
        this.userid = '',
        this.ruleForm = {
          username: "",
          password: "",
          gender: "male",
          age: "",
        }
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(async (valid) => {
        console.log(13, valid);
        // valid为校验结果，全部校验通过是值为true,否则为false
        if (valid) {
          const { userid, ruleForm } = this;

          if(userid){
            // 编辑用户
            const { data } = await this.$request.put("/user/" + userid, {
              ...ruleForm,
            });
            if (data.code === 1) {
              this.$message({
                type: "success",
                message: "修改成功",
              });
            }
          }else{
            // 添加用户
            const { data } = await this.$request.post("/user", {
              ...ruleForm,
            });
            if (data.code === 1) {
              this.$message({
                type: "success",
                message: "添加成功",
              });
              this.$router.push({name:'UserList'})
            }
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
  async created() {
    console.log('$route',this.$route)
    const { id } = this.$route.params;
    if(id){
      const { data } = await this.$request.get("/user/" + id);
      this.userid = id;
      Object.assign(this.ruleForm, data.data);
    }

    // this.$watch('userid',function(){})
  },

  // 监听动态路由改变
  beforeRouteUpdate (to, from, next) {
      //to:目标路由
      //from:当前路由
      //一定要调用next()方法才可进入目标路由
      console.log('beforeRouteUpdate=',to,from)
      next();
  }
};
</script>