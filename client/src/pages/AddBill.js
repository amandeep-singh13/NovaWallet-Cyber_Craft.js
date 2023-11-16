import React, { useState } from 'react';
import '../css/AddBill.css';

const AddBillForm = ({ onAddBill }) => {
  const [newBill, setNewBill] = useState({
    title: '',
    payer: '',
    amount: '',
    participants: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBill((prevBill) => ({
      ...prevBill,
      [name]: value,
    }));
  };

  const handleAddParticipant = () => {
    setNewBill((prevBill) => ({
      ...prevBill,
      participants: [...prevBill.participants, newBill.participant],
      participant: '',
    }));
  };

  const handleAddBill = () => {
    onAddBill(newBill);
    setNewBill({
      title: '',
      payer: '',
      amount: '',
      participants: [],
    });
  };

  return (
    <div className="add-bill-container">
      <h2>Add New Bill Here</h2>
      <form className="add-bill-form">
        <label>Title:</label>
        <input type="text" name="title" value={newBill.title} onChange={handleInputChange} />
        <br />
        <label>Payer:</label>
        <input type="text" name="payer" value={newBill.payer} onChange={handleInputChange} />
        <br />
        <label>Amount:</label>
        <input type="text" name="amount" value={newBill.amount} onChange={handleInputChange} />
        <br />
        <label>Participants:</label>
        <input
          type="text"
          name="participant"
          value={newBill.participant || ''}
          onChange={(e) => setNewBill({ ...newBill, participant: e.target.value })}
        />
        <button type="button" onClick={handleAddParticipant}>
          Add Participant
        </button>
        <br />
        <button type="button" onClick={handleAddBill}>
          Add Bill
        </button>
      </form>
    </div>
  );
};

export default AddBillForm;

