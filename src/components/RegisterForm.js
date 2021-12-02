import React from "react";
import { Form, Input, Button , Typography } from "antd";
import axios from 'axios';
const {Title} = Typography;
export default function RegisterForm() {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        await axios.post("https://61a6142d8395690017be902e.mockapi.io/api/users/",values);
        form.resetFields();
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
        <Title style={{textAlign:"center"}} mark={true}>Register</Title>
        <Form
            form={form}
            name='register-form'
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item
                label='Name'
                name='name'
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='Email'
                name='email'
                rules={[
                    {
                        required: true,
                        message: "Please input your email!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type='primary' htmlType='submit'>
                    Register
                </Button>
            </Form.Item>
        </Form>
        </>
    );
}
