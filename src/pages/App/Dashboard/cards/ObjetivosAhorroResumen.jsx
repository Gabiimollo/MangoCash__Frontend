import React from 'react';
import Chart from 'react-apexcharts';

const GoalCard = ({ goalName, targetAmount, currentAmount }) => {
  const progress = (currentAmount / targetAmount) * 100;

  const chartOptions = {
    chart: {
      type: 'radialBar',
      height: '100%',
      width: '100%',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: true,
          name: {
            fontSize: '16px',
            fontWeight: 'bold',
          },
          value: {
            fontSize: '18px',
            fontWeight: 'bold',
            formatter: (val) => `${Math.round(val)}%`,
          },
        },
      },
    },
    stroke: {
      lineCap: 'round',
    },
    fill: {
      colors: ['#00c853'], // Puedes elegir un color que te guste
    },
    series: [progress], // El progreso de la meta en porcentaje
    labels: ['Progreso'],
  };

  return (

      <div className="goal-card">
        <h4>{goalName}</h4>
        <div className="goal-progress">
          <Chart options={chartOptions} series={[progress]} type="radialBar" height={150} />
        </div>
      </div>

  );
};

export default GoalCard;
