import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import axios from "axios";
import Spinner from "../components/Spinner";

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
    <section className="container forms">
      {loading && <Spinner />}
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <Form onFinish={onFinish}>
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