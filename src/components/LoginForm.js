import React from "react";
import { Form, Input, Button , Typography  } from "antd";
import { UserContext } from '../context/UserContext';
const {Title} = Typography;

export default function LoginForm() {
    const [form] = Form.useForm();
    const {login} = React.useContext(UserContext);
    const onFinish = (values) => {
        login(values.email);
        form.resetFields();
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
        <Title style={{textAlign:"center"}} mark={true}>Login</Title>
        <Form
            form={form}
            name='login-form'
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
                    Login
                </Button>
            </Form.Item>
        </Form>
        </>
    );
}
