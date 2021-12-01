import "./App.less";
import { Layout, Menu } from "antd";
import { LoginOutlined, FormOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import {useNavigate , Outlet} from "react-router-dom";
const { Content, Footer, Sider } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate= useNavigate();
    const setRoute = (key) => {
      switch (key) {
        case "1":
          navigate('login');
          break;
        case "2":
          navigate('register');
          break;
        case "3":
          navigate('userlist');
          break;
        default:
          break;
      }
    }
    return (
        <div className='App'>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                >
                    <div className='logo' />
                    <Menu
                        theme='dark'
                        defaultSelectedKeys={["1"]}
                        mode='inline'
                        onClick={(e) => setRoute(e.key)}
                    >
                        <Menu.Item key='1' icon={<LoginOutlined />}>
                            Login
                        </Menu.Item>
                        <Menu.Item key='2' icon={<FormOutlined />}>
                            Register
                        </Menu.Item>
                        <Menu.Item key='3' icon={<UserOutlined />}>
                            Users
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className='site-layout'>
                    <Content className='site-content'>
                        <div
                            className='site-layout-background'
                            style={{ padding: 24, minHeight: 360 }}
                        >
                          <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Deniz Fırat - 90pixel Case Study
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
}

export default App;
