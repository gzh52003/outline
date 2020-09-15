import React from 'react';
import {Form, Input,Button,Checkbox} from 'antd';
import request from '@/utils/request';
import CryptoJS from 'crypto-js';
console.log('crypto=',CryptoJS);

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 18 },
  };
  

function Login(props){

    const onFinish = async ({username,password,mdl}) => {
        password = CryptoJS.SHA256(password);
        password = CryptoJS.enc.Hex.stringify(password)
        console.log(password)
        const data = await request.get('/user/login',{
            username,
            password,
            mdl
        });
        console.log('user=',data.data);
        if(data.status === 200){
            // 跳转到我的页面
            props.history.push('/mine')
            // 把用户信息存入本地（数据持久化）
            localStorage.setItem('currentUser',JSON.stringify(data.data));
        }
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      const rules = {
          username:[{ required: true, message: '用户名必填' }],
          password:[{ required: true, message: '密码必填' }]
      }

    return (
        <div className="container">
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={rules.username}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={rules.password}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="mdl" valuePropName="checked">
                <Checkbox>下次免登陆</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                登录
                </Button>
            </Form.Item>
            </Form>
        </div>
    )
}

export default Login;