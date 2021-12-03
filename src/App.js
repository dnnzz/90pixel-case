import "./App.less";
import { Layout, Menu } from "antd";
import { LoginOutlined, FormOutlined, UserOutlined , LogoutOutlined} from "@ant-design/icons";
import { useState , useContext} from "react";
import {useNavigate , Outlet} from "react-router-dom";
import { UserContext } from "./context/UserContext";
const { Content, Footer, Sider } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate= useNavigate();
    const {user,logout} = useContext(UserContext);
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
        case "4":
            logout();
            navigate('login');
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
                        {user.email === '' && 
                        <>
                         <Menu.Item key='1' icon={<LoginOutlined />}>
                         Login
                        </Menu.Item>
                        <Menu.Item key='2' icon={<FormOutlined />}>
                            Register
                        </Menu.Item>
                        </> }
                       {user.email !== '' && 
                       <>
                       <Menu.Item key='3' icon={<UserOutlined />}>
                            Users
                        </Menu.Item>
                        <Menu.Item key='4' icon={<LogoutOutlined />}>
                            Logout
                        </Menu.Item>
                        </>
                        }
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
