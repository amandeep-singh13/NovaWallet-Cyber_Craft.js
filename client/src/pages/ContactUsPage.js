import React from 'react';
import styles from "../css/ContactUsPage.module.css"; 

const ContactUsPage = () => {
  return (
    <>
  <div className={styles.topbar}>
    {/* Your topbar content goes here */}
  </div>
  <div className={styles['main-form']}>
    <div className={styles['contact-container']}>
      <div className={styles.container}>
        <form id={styles['contact-form']} name={styles['contact-form']} action="mail.php" method="POST">
          <h2 className={`${styles['h1-responsive']} font-weight-bold text-center my-4`} style={{ color: 'black' }}>
            Contact us
          </h2>
          <p className={`${styles['text-center']} w-responsive mx-auto mb-5`} style={{ color: 'black' }}>
            Do you have any questions? Please do not hesitate to contact us directly
          </p>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-group">
                <input type="text" id="name" name="name" className={`form-control ${styles['form-control']}`} placeholder="Your Name" />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-group">
                <input type="text" id="email" name="email" className={`form-control ${styles['form-control']}`} placeholder="Your Email" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="form-group">
                <input type="text" id="subject" name="subject" className={`form-control ${styles['form-control']}`} placeholder="Subject" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="form-group">
                <textarea id="message" name="message" rows="4" className={`form-control ${styles['form-control']}`} placeholder="Message"></textarea>
              </div>
            </div>
          </div>
          <div className={`${styles['text-center']}`}>
            <button type="button" className="btn btn-primary" onClick={() => document.getElementById(styles['contact-form']).submit()}>Send</button>
          </div>
          <div className={styles.status}></div>
        </form>
      </div>
    </div>
  </div>
</>


  );
};

export default ContactUsPage;
