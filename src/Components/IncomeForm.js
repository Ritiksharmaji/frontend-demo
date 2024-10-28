import React, { useState } from 'react';
import axios from 'axios';

const IncomeForm = ({ onAddIncome }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const income = { description, amount };
    await axios.post(`${process.env.REACT_APP_API_URL}/add-income`, income);
    onAddIncome();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
