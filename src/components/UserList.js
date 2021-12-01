import React from 'react'
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <p className="edit-color">Edit</p>
        <p className="delete-color">Delete</p>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
  },
  {
    key: '2',
    name: 'Jim Green',
  },
  {
    key: '3',
    name: 'Joe Black',
  },
];

export default function UserList() {
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
