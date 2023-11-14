import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  console.log("hello");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    console.log(values, "hello");
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("login success");
      localStorage.setItem("user", JSON.stringify({ ...data, password: "" }));
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };
  console.log("hello");

  return (
    <section className="container forms">
      {loading && <Spinner />}
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <Form>
            <div className="field input-field">
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input type="email" placeholder="Email" className="input" />
              </Form.Item>
            </div>

            <div className="field input-field">
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" className="input" />
              </Form.Item>
            </div>

            <div className="form-link">
              <Link to='/' className="forgot-pass">
                Forget password?
              </Link>
            </div>

            <div className="field button-field">
              <Button type="primary" htmlType="submit" onClick={onFinish}>
                Login
              </Button>
            </div>
          </Form>
          <div className="form-link">
            <span>
              Don't have an account{" "}
              <Link to="/register" className="link signup-link">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="line"></div>
    </section>
  );
};

export default Login;