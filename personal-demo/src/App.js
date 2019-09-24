import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {Route, Link} from "react-router-dom";
import Home from "./pages/home/Home";
import Production from "./pages/production/Production";
import cookie from "./utils/cookes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: '',
      rightMenu: <Menu>
        <Menu.Item>
          <a onClick={this.loggout}>
            <Icon type='logout' style={{marginRight: '5px'}} />退出
          </a>
        </Menu.Item>
      </Menu>
    }
  }

  componentDidMount(): void {
    const loginAccount = cookie.getCookie('accountName');
    this.setState({
      accountName: loginAccount
    })
  }

  loggout = () => {
    cookie.delCookie('accountName');
    cookie.delCookie('accountType');
    cookie.delCookie('isAccount');
    cookie.delCookie('sessionid');
    cookie.delCookie('lang');
    cookie.delCookie('sidebar');
    this.props.history.push({pathname: '/login'});
  };

  render() {
    return (
      <div className='container'>
        <Layout>
          <Header className="header">
            <div className="logo" style={{width: '150px', height: '64px',lineHeight: '64px',fontSize: '24px', float: 'left', color: '#999', display: 'flex', alignItems: 'center'}} >
              <Icon style={{fontSize: '30px',marginRight: '5px'}} type='google'/>
              <span>My App</span>
            </div>
            <div style={{float: 'right'}}>
              <Dropdown trigger={['click']} placement='bottomRight' overlayStyle={{width: '100px'}} overlay={this.state.rightMenu}>
                <a className="ant-dropdown-link" href="#" style={{color: '#999',fontSize: '18px'}}>
                  {this.state.accountName} <Icon type="down" />
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
                <Route path='/myView/home' component={Home} />
                <Route path='/myView/production' component={Production} />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }

}

export default App;