import React from 'react'
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../index.css';
const Register = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };
  return (
    <>
    <div className="form signup">
        <div className="form-content">
          <header>Signup</header>
          <Form onFinish={onFinish}>
            <div className="field input-field">
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input type="name" placeholder="Name" className="input" />
              </Form.Item>
            </div>

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

            <div className="field input-field">
              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" className="input" />
              </Form.Item>
            </div>

            <div className="field button-field">
              <Button type="primary" htmlType="submit">
                Signup
              </Button>
            </div>
          </Form>
          <div className="form-link">
            <span>
            Already Have Account? <Link to="/login" className="link login-link">Login</Link>

            </span>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Register

