import React from 'react'
import ApexCharts from 'react-apexcharts';


const GastosPorCategoria = () => {

    const data = {
      series: [200000, 60000, 35000, 450000, 40000],  // Los datos de cada categoría (puedes adaptarlos)
      options: {
        chart: {
          type: 'pie',  // Tipo de gráfico: torta
          width: '100%',  // Asegura que el gráfico ocupe el 100% del contenedor
        },
        labels: ['Comida', 'Transporte', 'Ocio', 'Alquiler', 'Servicios'],  // Etiquetas de cada segmento
        stroke: {
          show: false,  // Desactivar los bordes entre las porciones
        },
        dataLabels: { enabled: false, },
        title: {
          text: 'Gastos por Categoría',  // Título del gráfico
          align: 'left',  // Alineación del título
          style: {
            fontSize: '18px',  // Tamaño de fuente del título
            fontWeight: 'bold',  // Peso de la fuente
          },
        },
        legend: {
          position: 'left',  // Posición de la leyenda
          horizontalAlign: 'center',
          offsetY: 60,
          labels: {
            useSeriesColors: true,  // Usa los colores de cada serie para la leyenda
          },
        },
        tooltip: {
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            colors: '#fff'
          },
        },
        colors: [
          '#2a9d90', 
          '#f4a462',
          '#274754', 
          '#e8c468', 
          '#e76e50', 
        ]
      },
    };
  
  return (
    <div className="card-dashboard --gastoCategoria">
      <ApexCharts
        options={data.options}
        series={data.series}
        type="pie"
        height={"280px"}
      />
    </div>
  )
}

export default GastosPorCategoria