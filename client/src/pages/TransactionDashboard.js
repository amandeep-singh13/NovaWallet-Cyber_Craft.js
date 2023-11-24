import React from 'react';

const TransactionDashboard = ({ userData }) => {
  if (!userData) {
    return null; // Handle case when user data is not available
  }

  return (
    <div>
      <h1>Welcome, {userData.name}!</h1>
      
      <h2>User Transactions:</h2>
      <ul>
        {userData.transactions.map((transaction) => (
          <li key={transaction._id}>
            <p>Date: {transaction.date}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Type: {transaction.type}</p>
            <p>Category: {transaction.category}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>

      {/* Display other user data as needed */}
    </div>
  );
};

export default TransactionDashboard;
