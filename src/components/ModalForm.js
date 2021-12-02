import React from 'react'
import {Form,Input,Button} from 'antd';
import axios from 'axios';
export default function ModalForm({selectedUser,setIsModalVisible}) {
    const [form] = Form.useForm();
    const onFinish = async (values) => {
       await axios.put(`https://61a6142d8395690017be902e.mockapi.io/api/users/${selectedUser.id}`,values);
        form.resetFields();
        setIsModalVisible(false);
      };
    return (
        <div>
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
            autoComplete='off'
        >
            <Form.Item
                label='Email'
                name='email'
            >
                <Input placeholder={selectedUser.email} />
            </Form.Item>
            <Form.Item
                label='Name'
                name='name'
            >
                <Input placeholder={selectedUser.name} />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button className="edit-color"  htmlType='submit'>
                    Edit
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}
