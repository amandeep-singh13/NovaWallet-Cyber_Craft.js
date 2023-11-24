import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styles from '../css/Signup.module.css';
import axios from "axios";
import Spinner from "../components/Spinner";
import Layout from '../components/Layout/Layout';

const Login = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // form submit
  const onFinish = async (values) => {
    console.log(values, "hello1");
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem("user", JSON.stringify({ ...data.user, password: "" }));
      navigate("/features");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  console.log("hello2");

  return (
    <Layout>
      <section className={`${styles.container} ${styles.forms}`}>
        {loading && <Spinner />}
        <div className={`${styles.form} ${styles.login}`}>
          <div className={styles['form-content']}>
            <header>Login</header>
            <Form onFinish={onFinish}>
              <div className={`${styles.field} ${styles['input-field']}`}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input type="email" placeholder="Email" className={styles.input} />
                </Form.Item>
              </div>

              <div className={`${styles.field} ${styles['input-field']}`}>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password placeholder="Password" className={styles.input} />
                </Form.Item>
              </div>

              <div className={styles['form-link']}>
                <Link to='/' className={styles['forgot-pass']}>
                  Forget password?
                </Link>
              </div>

              <div className={`${styles.field} ${styles['button-field']}`}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </div>
            </Form>
            <div className={styles['form-link']}>
              <span>
                Don't have an account{' '}
                <Link to="/register" className={`${styles.link} ${styles['signup-link']}`}>
                  Signup
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.line}></div>
      </section>
    </Layout>
  );
};

export default Login;