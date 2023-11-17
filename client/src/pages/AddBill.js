import React, { useState } from 'react';
import styles from '../css/AddBill.module.css';

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
    <div className={styles['add-bill-container']}>
  <h2 className={styles.here}>Add New Bill Here</h2>
  <form className={styles['add-bill-form']}>
    <label className={styles.title}>Title:</label>
    <input type="text" name="title" value={newBill.title} onChange={handleInputChange} />
    <br />
    <label className={styles.title}>Payer:</label>
    <input type="text" name="payer" value={newBill.payer} onChange={handleInputChange} />
    <br />
    <label className={styles.title}>Amount:</label>
    <input type="text" name="amount" value={newBill.amount} onChange={handleInputChange} />
    <br />
    <label className={styles.title}>Participants:</label>
    <input
      type="text"
      name="participant"
      value={newBill.participant || ''}
      onChange={(e) => setNewBill({ ...newBill, participant: e.target.value })}
    />
    <button type="button" className={`${styles.button} ${styles.button1}`} onClick={handleAddParticipant}>
      Add Participant
    </button>
    <br />
    <button type="button" className={`${styles.button} ${styles.button1}`} onClick={handleAddBill}>
      Add Bill
    </button>
  </form>
</div>

  );
};

export default AddBillForm;

