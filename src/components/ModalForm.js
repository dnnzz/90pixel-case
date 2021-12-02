import React from 'react'
import {Form,Input,Button} from 'antd';
export default function ModalForm({selectedUser}) {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div>
            <Form
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
                label='Avatar'
                name='avatar'
            >
                <Input placeholder={selectedUser.avatar} />
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
