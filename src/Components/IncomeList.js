import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IncomeList = () => {
  const [incomes, setIncomes] = useState([]);

  const fetchIncomes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-incomes`);
    setIncomes(response.data);
  };

  useEffect(() => {
    fetchIncomes();
  }, []);

  return (
    <ul>
      {incomes.map(income => (
        <li key={income._id}>{income.description} - ${income.amount}</li>
      ))}
    </ul>
  );
};

export default IncomeList;
