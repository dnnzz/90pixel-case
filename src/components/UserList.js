import React from "react";
import { Table, Space, Avatar, Image, Spin, Button , Modal} from "antd";
import axios from "axios";
import ModalForm from "./ModalForm";
import { UserContext } from "../context/UserContext";

export default function UserList() {
    const [users, setUsers] = React.useState(undefined);
    const [selectedUser,setSelectedUser] = React.useState(undefined);
    const {user} = React.useContext(UserContext);
    const deleteUser = async (id) => {
        axios.delete(
            `https://61a6142d8395690017be902e.mockapi.io/api/users/${id}`
        );
        setUsers(users.filter((item) => item.id !== id));
    };
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = (obj) => {
        setIsModalVisible(true);
        setSelectedUser(obj);
    };
    const columns = [
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
            render: (link) => (
                <Avatar
                    src={
                        <Image
                            src='https://joeschmoe.io/api/v1/random'
                            style={{ width: 32 }}
                        />
                    }
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text) => <p>{text}</p>,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          render: (text) => <p>{text}</p>,
      },
        {
            title: "Action",
            key: "action",
            dataIndex: "id",
            render: (id, obj) => (
                <Space size='middle'>
                    <Button
                        onClick={(e) => showModal(obj)}
                        className='edit-color'
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={(e) => deleteUser(id)}
                        danger
                        className='delete-color'
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    const fetchData = async () => {
        const res = await axios.get(
            "https://61a6142d8395690017be902e.mockapi.io/api/users"
        );
        const { data } = await res;
        setUsers(data.filter(item => item.email !== user.email));
    };
    React.useEffect(() => {
        fetchData();
    }, [isModalVisible]);
    return (
        <div>
            {users !== undefined ? (
                <>
                <Table columns={columns} dataSource={users} />
                <Modal title="Edit user" visible={isModalVisible}>
                 <ModalForm selectedUser={selectedUser} setIsModalVisible={setIsModalVisible} />
              </Modal>
              </>
            ) : (
                <Spin />
            )}
        </div>
    );
}
