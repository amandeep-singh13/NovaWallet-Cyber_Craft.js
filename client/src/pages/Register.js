import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/Signup.module.css' // Import the styles
import axios from 'axios';
import Spinner from '../components/Spinner';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // form submit
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post('/users/register', values);
      message.success('Registration successful');
      setLoading(false);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      message.error('Invalid username or password');
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      
      <div className={styles.container}>
        <div className={`${styles.form} show-signup`}>
          {loading && <Spinner />}
          <header>Signup</header>
          <Form onFinish={onFinish}>
            <div className={styles.field}>
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input type="name" placeholder="Name" />
              </Form.Item>
            </div>

            <div className={styles.field}>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input type="email" placeholder="Email" className={styles.input} />
              </Form.Item>
            </div>

            <div className={`${styles.field} ${styles.inputField}`}>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder="Password" className={styles.input} />
              </Form.Item>
            </div>

            <div className={`${styles.field} ${styles.inputField}`}>
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
                <Input.Password placeholder="Confirm Password" className={styles.input} />
              </Form.Item>
            </div>

            <div className={`${styles.field} ${styles.buttonField}`}>
              <Button type="primary" htmlType="submit">
                Signup
              </Button>
            </div>
          </Form>
          <div className={styles.formLink}>
            <span>
              Already Have Account? <Link to="/login" className={`${styles.link} ${styles.loginLink}`}>Login</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;