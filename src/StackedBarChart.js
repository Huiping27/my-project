// src/StackedBarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const StackedBarChart = () => {
  const data = {
    labels: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
    datasets: [
      {
        label: 'Budget',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        stack: 'stack1',
        data: [10000, 15000, 12000, 18000],
      },
      {
        label: 'Ausgaben',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        stack: 'stack1',
        data: [5000, 7000, 9000, 11000],
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }],
    },
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default StackedBarChart;
