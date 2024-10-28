import React from 'react';
import IncomeList from './components/IncomeList';
import IncomeForm from './components/IncomeForm';

function App() {
  return (
    <div className="App">
      <h1>Income Tracker</h1>
      <IncomeForm onAddIncome={() => window.location.reload()} />
      <IncomeList />
    </div>
  );
}

export default App;
