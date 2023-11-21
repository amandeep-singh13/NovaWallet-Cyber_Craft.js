import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'; // Import chart.js as chartjs

const BarChart = ({ allTransactions }) => {
  const categories = ['salary', 'tip', 'food', 'movie', 'project', 'bills', 'medical', 'tax', 'fee', 'miscellaneous'];

  const getCategoryData = (category, type) => {
    return allTransactions
      .filter(
        (transaction) =>
          transaction.type === type && transaction.category === category
      )
      .reduce((acc, transaction) => acc + transaction.amount, 0);
  };

  const [barData, setBarData] = useState({
    labels: categories,
    datasets: [],
  });

  useEffect(() => {
    const incomeData = categories.map((category) => getCategoryData(category, 'income'));
    const expenseData = categories.map((category) => getCategoryData(category, 'expense'));

    setBarData({
      labels: categories,
      datasets: [
        {
          label: 'Income',
          data: incomeData,
          backgroundColor: 'green', // Set the color for income bars
        },
        {
          label: 'Expense',
          data: expenseData,
          backgroundColor: 'red', // Set the color for expense bars
        },
      ],
    });
  }, [allTransactions]);

  const options = {
    scales: {
      xAxes: [
        {
          type: 'category', // Use category scale for x-axis
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="text-center mb-4">Categorywise Income and Expense</h2>
          <Bar key={JSON.stringify(barData)} data={barData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
