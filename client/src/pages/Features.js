import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import {useTheme} from '../context/themeContext'


const Features = () => {
  const {Theme} =useTheme();
  
  return (
    <Layout>
      <div
        style={{
          backgroundImage: Theme==='dark' ? '#000000' :
            "linear-gradient(to right,rgb(243, 233, 234),rgb(95, 95, 255))",
          overflow: "auto"
        }}
      >
        
        {/* help you section start */}
        <section className="bg-main help-you-section">
          <div className="container-fluid">
            <div className="container text-center my-5">
              <h1 className="text-capitalize"> how we can help you ??</h1>
              <div className="h-25 my-4">
                <button type="button" className="mx-2 btn btn-dark">
                  Get Started
                </button>
                <button type="button" className="mx-2 btn btn-light">
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
                    nurture your relationships without any financial stress or strain.{" "}
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

    </Layout>
  )
}

export default Features
