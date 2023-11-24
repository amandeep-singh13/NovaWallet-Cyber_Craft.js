import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js as chartjs

const PieChart = ({ allTransactions }) => {
  const categories = ['salary', 'tip', 'food', 'movie', 'project', 'bills', 'medical', 'tax', 'fee', 'miscellaneous'];

  const getCategoryData = (category, type) => {
    return allTransactions
      .filter(
        (transaction) =>
          transaction.type === type && transaction.category === category
      )
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    const incomeData = categories.map((category) => getCategoryData(category, 'income'));
    const expenseData = categories.map((category) => getCategoryData(category, 'expense'));

    setIncomeData(incomeData);
    setExpenseData(expenseData);
  }, [allTransactions]);

  const doughnutOptions = {
    radius: '70%',
    cutout: '40%',
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const incomeDoughnutData = {
    labels: categories,
    datasets: [
      {
        data: incomeData,
        backgroundColor: [
          'purple', 'teal', 'orange', 'green', 'blue', 'red', 'pink', 'cyan', 'yellow', 'brown'
        ],
      },
    ],
  };

  const expenseDoughnutData = {
    labels: categories,
    datasets: [
      {
        data: expenseData,
        backgroundColor: [
          'purple', 'teal', 'orange', 'green', 'blue', 'red', 'pink', 'cyan', 'yellow', 'brown'
        ],
      },
    ],
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center mb-3">Income</h2>
          <div className="p-3 border text-center">
            <Doughnut key={JSON.stringify(incomeDoughnutData)} data={incomeDoughnutData} options={doughnutOptions} />
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="text-center mb-3">Expense</h2>
          <div className="p-3 border text-center">
            <Doughnut key={JSON.stringify(expenseDoughnutData)} data={expenseDoughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
