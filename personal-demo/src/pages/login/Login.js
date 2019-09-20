import React, {Component} from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.less';
import LoginService from "../../shared/login/LoginService";

class WrappedNormalLoginForm extends Component {

  constructor(props) {
    super(props);

  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const account = {
          accountName: values.username,
          password: values.password,
        };
        LoginService.loginValidate(account, result => {
          this.props.history.push('/home');
        });
      }
    });
  };

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
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(WrappedNormalLoginForm);

export default Login;