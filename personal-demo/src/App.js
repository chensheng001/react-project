import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import RouteConfig from "./router/";
import {HashRouter as Router,Link} from "react-router-dom";

const rightMenu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        账户
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        退出
      </a>
    </Menu.Item>
  </Menu>
);

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <div style={{float: 'right'}}>
                <Dropdown  overlay={rightMenu}>
                  <a className="ant-dropdown-link" href="#" style={{color: '#fff'}}>
                    Hover me <Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                <Icon type="user" />
                subnav 1
              </span>
                    }
                  >
                    <Menu.Item key="1">
                      <Link to='home'>首页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to='production'>产品页</Link>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 500,
                  }}
                >
                  <RouteConfig />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </div>
      </Router>
    )
  }

}

export default App;