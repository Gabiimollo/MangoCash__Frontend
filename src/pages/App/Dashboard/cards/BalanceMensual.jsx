import React from 'react'
import ApexCharts from 'react-apexcharts';

const BalanceMensual = () => {

  const series = [
    {
      name: 'Ventas',
      data: [30, 40, 35, 50, 40, 10, 8, 60, 75, 90, 75, 16],
    },
  ];

  const chartOptions = {
    chart: {
      id: 'line-chart',
      type: 'line',
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false, // Deshabilita la barra de herramientas
      },
    },
    stroke: {
      curve: 'straight', // Opción para líneas suaves
      colors: '#FF862F',
    },
    title: {
      text: 'Título de la Gráfica',
      align: 'left', // Puedes cambiar la alineación a 'left' o 'right'
      style: {
        fontSize: '18px', // Tamaño de la fuente
        fontWeight: 'bold', // Negrita
        fontFamily: 'Epilogue', // Fuente
      },
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    },
    yaxis: {
      max: Math.max(...series[0].data)+10
    }
  };

  return (
    <div className="card-dashboard --balanceMensual">
      <ApexCharts options={chartOptions} series={series} type="line" height={"100%"}/>
    </div>
  )
}

export default BalanceMensual