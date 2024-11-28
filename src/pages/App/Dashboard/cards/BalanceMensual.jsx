import React from 'react'
import ApexCharts from 'react-apexcharts';

const BalanceMensual = () => {

  const series = [
    {
      name: 'Ingreso',
      data: [2000, 3000, 2500, 4000, 3200, 2700, 3900, 4500, 3600, 3300, 2900, 5000], // Ingresos por mes
    },
    {
      name: 'Egreso',
      data: [1500, 2000, 2200, 2800, 2500, 2400, 3100, 3500, 3000, 2700, 2600, 3800], // Egresos por mes
    }
  ];

  const chartOptions = {
    chart: {
      id: 'bar-chart',
      type: 'bar', // Tipo de gráfico: 'bar' para barras
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false, // Deshabilita la barra de herramientas
      },
    },
    plotOptions: {
      bar: {
        horizontal: false, // Barra vertical
        endingShape: 'rounded', // Forma redondeada en los extremos de las barras
      }
    },
    colors: ['#16a085', '#e74c3c'], // Colores para las barras de Ingreso y Egreso
    title: {
      text: 'Ingreso / Egresos por mes',
      align: 'left', // Alineación a la izquierda
      style: {
        fontSize: '18px', // Tamaño de la fuente
        fontWeight: 'bold', // Negrita
        fontFamily: 'Epilogue', // Fuente
      },
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // Colores alternos en las filas
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'], // Meses
    },
    yaxis: {
      max: Math.max(...series[0].data, ...series[1].data) + 10, // Ajuste dinámico del valor máximo
    },
  };

  return (
    <div className="card-dashboard --balanceMensual">
      <ApexCharts options={chartOptions} series={series} type="bar" height={"100%"}/>
    </div>
  );
}

export default BalanceMensual;
