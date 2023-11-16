import React from 'react';

const Bill = ({ bill }) => {
    if (!bill) {
        return <div>Loading...</div>;
      }
    
  return (
    <div>
      <h3>{bill.title}</h3>
      <p>Payer: {bill.payer}</p>
      <p>Amount: {bill.amount}</p>
      <p>Participants: {bill.participants.join(', ')}</p>
    </div>
  );
};

export default Bill;
