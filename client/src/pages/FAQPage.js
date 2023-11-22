import React from 'react';
import styles from '../css/FAQPage.module.css'; // Import the CSS file
import { Collapse } from 'antd';

const FAQPage = () => {
  const items = [
    {
      key: '1',
      label: <div className={styles['accordion-heading']}>
        <h3 className={styles.ques}> What is NovaWallet, and how can it help me manage my expenses?</h3>
        <i className={`fas fa-angle-down ${styles.icon}`} />
      </div>,
      children: <p className={styles['accordion-content']}>
        NovaWallet is a comprehensive expense tracking platform designed to help users effortlessly manage their finances. It allows you to track daily, monthly, weekly, and annual transactions, view detailed reports, manage savings, split bills, and more. With features like group expense splitting and bill management, NovaWallet aims to streamline your financial tracking and make it easy to stay on top of your expenses.
      </p>
    },
    {
      key: '2',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How can I log in to my NovaWallet account?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Simply go to the NovaWallet homepage and click on "Log In." Enter your credentials, and you'll have access to your account.
        </p>
    },
    {
      key: '3',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>Can I view graphical representations of my spending on NovaWallet?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Absolutely! Check out the "Graphs" feature in the "Reports" section to visualize your expenses and understand your financial trends.
        </p>
    },
    {
      key: '4',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How do I get started with NovaWallet?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Getting started is simple! Just sign up for an account, and you can immediately start adding your transactions. The intuitive interface guides you through setting up your expense categories and goals.
        </p>
    },
    {
      key: '5',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>Can I track expenses based on different time frames?
          </h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Yes, you can track your expenses on a daily, monthly, weekly, and annual basis. Simply navigate to the "Reports" section to view detailed insights into your spending patterns over different time periods.
        </p>
    },
    {
      key: '6',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How can I track my savings on NovaWallet?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          NovaWallet allows you to set savings goals and track your progress. Go to the "Savings" tab to set up your goals and monitor how well you are saving over time.
        </p>
    },
    {
      key: '7',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>Can I manage due bills on NovaWallet?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Absolutely! NovaWallet lets you manage due bills efficiently. Set reminders for upcoming bills and mark them as paid once you've settled them.
        </p>
    },
    {
      key: '8',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How do I add expenses on NovaWallet?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Adding expenses is easy! Navigate to the "Expenses" section, click on "Add Expense," and fill in the necessary details.
        </p>
    },
    {
      key: '9',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How do I log out of my NovaWallet account?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Click on your profile icon in the top-right corner and select "Log Out" from the dropdown menu.
        </p>
    },
    {
      key: '10',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}> How can I contact NovaWallet support
          </h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          For any questions or issues, email our support team at [support@novawallet.com]. We're here to assist you.
        </p>
    },
    {
      key: '11',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>What should I do if I forget my NovaWallet password?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Click on the "Forgot Password" link on the login page, and follow the instructions to reset your password.
        </p>
    },
    {
      key: '12',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How do I split expenses with a group on NovaWallet?</h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Create a group in the "Groups" section, add expenses, and NovaWallet will automatically calculate each member's share. All members must approve the split.
        </p>
    },
    {
      key: '13',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How do I change my profile information on NovaWallet?
          </h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Navigate to the "Settings" page, click on "Profile," and you can update your information, including name, email, and profile picture.
        </p>
    },
    {
      key: '14',
      label:
        <div className={styles['accordion-heading']}>
          <h3 className={styles.ques}>How can I download expense reports on NovaWallet?
          </h3>
          <i className={`fas fa-angle-down ${styles.icon}`} />
        </div>,
      children:
        <p className={styles['accordion-content']}>
          Head to the "Reports" section, select the desired time frame, and click on "Download Report" to get a detailed summary of your expenses.
        </p>
    }
  ]
  return (

    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Frequently Asked Questions (FAQs)</h1>
        <div className={styles['accordion-container']}>

          <div className={`${styles.accordion} ${styles.active}`}>
            <Collapse defaultActiveKey={['1']} ghost accordion items={items} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
