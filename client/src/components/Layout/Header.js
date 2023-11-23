import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { useTheme } from './Theme'; // Import useTheme hook

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  const { theme } = useTheme(); // Access the current theme

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className={`navbar-brand ${theme === 'dark' ? 'text-light' : 'text-dark'}`} to="/">
              NovaWallet
            </Link>
            <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
              <li className="nav-item">
                <p className={`nav-link ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{loginUser && loginUser.name}</p>
              </li>
              <li className="nav-item">
                <button className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'}`} onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
