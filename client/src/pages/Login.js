import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../index.css';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <Form onFinish={onFinish}>
            <div className="field input-field">
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input type="email" placeholder="Email" className="input" />
              </Form.Item>
            </div>

            <div className="field input-field">
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" className="input" />
              </Form.Item>
            </div>

            <div className="form-link">
              <Link to="/" className="forgot-pass">
                Forget password?
              </Link>
            </div>

            <div className="field button-field">
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </div>
          </Form>
          <div className="form-link">
            <span>
            Don't have an account <Link to="/register" className="link signup-link">Signup</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="line"></div>

      
    </section>
  );
};

export default Login;
