<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="vcode">
        <el-input v-model="ruleForm.vcode">
          <template v-slot:append>
              <div v-html="vcodeSvg" class="vcode" @click="getVcode"></div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="下次免登陆" v-model="ruleForm.mdl"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        vcode: "",
        mdl:true
      },
      vcodeSvg:'',
      rules: {
        password: [
          {
            required: true,
            message: "密码必填",
            trigger: "blur",
          },
        ],
        username: [
          {
            required: true,
            message: "用户名必填",
            trigger: "blur",
          },
        ],
        vcode: [
          {
            required: true,
            message: "请填写验证码",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["ruleForm"].validate(async (valid) => {
        console.log(13, valid);
        // valid为校验结果，全部校验通过是值为true,否则为false
        if (valid) {
            const {data} = await this.$request.get('/login',{
                params:{
                    ...this.ruleForm
                }
            });
            if(data.code === 1){
                this.$message({
                    message:'登录成功',
                    type:'success'
                })
                localStorage.setItem('userInfo',JSON.stringify(data.data));

                const {redirectTo='/home'} = this.$route.query;
                console.log('redirectTo=',redirectTo);
                this.$router.replace(redirectTo);

                // 把用户信息写入本地存储
            }
        }else{

        }
      });
    },
    async getVcode(){
        const {data} = await this.$request.get('/vcode');
        this.vcodeSvg = data.data;
    }
  },
  created(){
      this.getVcode();
  }
};
</script>
<style>
    .el-input .el-input-group__append{padding:0}
    .vcode{position:relative;overflow: hidden;width:120px;height:40px;padding:0 10px;background-color:#58bc58;}
    .vcode svg{position: absolute;top:-3px;left:0;height:43px}
</style>