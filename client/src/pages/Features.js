import React from 'react'
import {Link} from 'react-router-dom'

const Features = () => {
  return (
    <>
      <div
  style={{
    backgroundImage:
      "linear-gradient(to right,rgb(243, 233, 234),rgb(95, 95, 255))",
    overflow: "auto"
  }}
>
  {/* nav bar */}
  <nav className="navbar navbar-expand-lg bg-light-subtle">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="./images/expenses.png" alt="..." width="30px;" />
      </Link>
      <Link className="navbar-brand" to="/">
        NovaWallet
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link active dropdown-toggle"
              aria-current="page"
              to="/features"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Features
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/">
                  Expanse Tracker
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Split bills
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  Manage due payments
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Help Desk
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  FAQs
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to="/">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* nav bar ends*/}
  {/* help you section start */}
  <section className="bg-main help-you-section">
    <div className="container-fluid">
      <div className="container text-center my-5">
        <h1 className="text-capitalize"> how we can help you ??</h1>
        <div className="h-25 my-4">
          <button type="button" className="btn btn-dark">
            Get Started
          </button>
          <button type="button" className="btn btn-light">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* help you section ends */}
  {/* features card start */}
  <div className="container my-2">
    <div className="row my-4">
      <div className="col-md-4 mb-3">
        <div className="card shadow-lg" style={{ width: "18rem" }}>
          <img
            src="./images/Fluctuation (HD).png"
            className="card-img-top embed-responsive-item"
            alt="..."
            height="250px;"
          />
          <div className="card-body">
            <h5 className="card-title">Track Expense</h5>
            <p className="card-text">
              Efficiently manage your financial activities with our finance
              software's easy-to-use "Record Daily Transactions" feature.
            </p>
            <Link to="/transactions" className="btn btn-dark">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-lg" style={{ width: "18rem" }}>
          <img
            src="./images/3d-render-hand-holding-transaction-receipt-bill_107791-16721.avif"
            className="card-img-top embed-responsive-item"
            alt="..."
            height="250px;"
          />
          <div className="card-body">
            <h5 className="card-title">Manage Due Payments</h5>
            <p className="card-text">
              Stay on top of your finances! Receive timely notifications for due
              payments and recharges with our hassle-free alert feature.
            </p>
            <Link to="/" className="btn btn-dark">
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card shadow-lg" style={{ width: "18rem" }}>
          <img
            src="./images/GettyImages_1311472388.jpeg"
            className="card-img-top embed-responsive-item"
            alt="..."
            height="250px;"
          />
          <div className="card-body">
            <h5 className="card-title">Split Bills</h5>
            <p className="card-text">
              With the "Split Expenses with Family and Friends" feature, you can
              nurture your relationships without the financial stress.{" "}
            </p>
            <Link to="/" className="btn btn-dark">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* features card end */}
</div>

    </>
  )
}

export default Features
