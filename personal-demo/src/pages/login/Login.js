import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox, message, Tooltip} from 'antd';
import './login.less';
import LoginService from "../../shared/login/LoginService";
import cookie from "../../utils/cookes";

class WrappedNormalLoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageCode: '',
      imageUuid: ''
    }
  }

  // 点击登录
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const account = {
          accountName: values.username,
          password: values.password,
          imageCode: values.imageCode,
          imageUuid: this.state.imageUuid,
        };
        LoginService.loginValidate(account, result => {
          if (result.success) {
            cookie.setCookie('sessionid', result.inventory.uuid);
            cookie.setCookie('accountType', result.inventory.type);
            cookie.setCookie('accountName', values.username);
            this.props.history.push('/myView/home');
          }else {
            message.error(result.error.details);
            this.getImgCode();
          }
        });
      }
    });
  };

  componentDidMount(): void {
    this.getImgCode();
  }

  getImgCode(){
    LoginService.getImgCode(result => {
      if (result.success) {
        this.setState({
          imageCode: result.imageCode,
          imageUuid: result.imageUuid,
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='container'>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <div className='logo'><Icon type='google'/></div>
          <h2>Sign In MyApp</h2>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <div style={{float: 'left', width: '120px'}}>
              {getFieldDecorator('imageCode', {
                rules: [{ required: true, message: 'Please input your imgCode!' }],
              })(
                <Input placeholder="imgCode"/>,
              )}
            </div>
            <div style={{float: 'right'}}>
              <Tooltip title="点击刷新">
                <img onClick={()=>{this.getImgCode()}} style={{width: '100px', height: '30px', top: '-3px', position: 'relative', border: '1px solid #d9d9d9', cursor: 'pointer', borderRadius: '5px'}}
                     src={`data:image/png;base64,${this.state.imageCode}`} />
              </Tooltip>
            </div>
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!<i className='iconfont icon-alarm'></i></a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(WrappedNormalLoginForm);

export default Login;