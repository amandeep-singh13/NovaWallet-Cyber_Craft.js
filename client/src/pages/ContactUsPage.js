import React, { useState } from 'react';
import styles from "../css/ContactUsPage.module.css";
import axios from 'axios';
import { message } from 'antd';
import Layout from '../components/Layout/Layout';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your server endpoint
      const response = await axios.post('/users/contact', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data, "check"); // Log the server response, you can handle it as needed

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      message.success('Message has been sent successfully'); // Show a success message
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with:', error.response.data);
        console.error('Status code:', error.response.status);
        console.error('Headers:', error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from the server');
        console.error('Request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
      message.error('Error submitting form. Please try again.'); // Show an error message
    }
  };
  return (
    <Layout>
    <div className={styles.wrapper}>
      <div className={styles['main-form']}>
        <div className={styles['contact-container']}>
          <div className={styles.container}>
            <form id='contact-form' name='contact-form' onSubmit={handleSubmit}>
              <h2 className={`${styles['h1-responsive']} font-weight-bold text-center my-4`} style={{ color: 'black' }}>
                Contact us
              </h2>
              <p className={`${styles['text-center']} w-responsive mx-auto mb-5`} style={{ color: 'black' }}>
                Do you have any questions? Please do not hesitate to contact us directly
              </p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input type="text" id="name" name="name" className={` form-control ${styles['form-control']}`} placeholder="Your Name" onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-group">
                    <input type="text" id="email" name="email" className={` form-control ${styles['form-control']}`} placeholder="Your Email" onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="form-group">
                    <input type="text" id="subject" name="subject" className={`form-control ${styles['form-control']}`} placeholder="Subject" onChange={handleChange} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="form-group">
                    <textarea id="message" name="message" rows="4" className={`form-control ${styles['form-control']}`} placeholder="Message" onChange={handleChange}></textarea>
                  </div>
                </div>
              </div>
              <div className={`${styles['text-center']}`}>
                <button type="submit" className="btn btn-primary">Send</button>
              </div>
              <div className={styles.status}></div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout>


  );
};

export default ContactUsPage;
