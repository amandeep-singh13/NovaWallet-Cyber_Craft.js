import React from 'react';
import "../css/ContactUsPage.css"; 

const ContactUsPage = () => {
  return (
    <>
      <div className="topbar">
        {/* Your topbar content goes here */}
      </div>
      <div className="main-form">
        <div className="contact-container">
          <div className="container">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
              <h2 className="h1-responsive font-weight-bold text-center my-4" style={{ color: 'black' }}>
                Contact us
              </h2>
              <p className="text-center w-responsive mx-auto mb-5" style={{ color: 'black' }}>
                Do you have any questions? Please do not hesitate to contact us directly
              </p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input type="text" id="name" name="name" className="form-control" placeholder="Your Name" />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input type="text" id="email" name="email" className="form-control" placeholder="Your Email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="form-group">
                    <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="form-group">
                    <textarea id="message" name="message" rows="4" className="form-control" placeholder="Message"></textarea>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={() => document.getElementById('contact-form').submit()}>Send</button>
              </div>
              <div className="status"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
