import React from 'react'
import ApexCharts from 'react-apexcharts';


const GastosPorCategoria = () => {

    const data = {
      series: [30, 40, 35, 50, 40],  // Los datos de cada categoría (puedes adaptarlos)
      options: {
        chart: {
          type: 'pie',  // Tipo de gráfico: torta
          width: '100%',  // Asegura que el gráfico ocupe el 100% del contenedor
        },
        labels: ['Comida', 'Transporte', 'Ocio', 'Renta', 'Servicios'],  // Etiquetas de cada segmento
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
          offsetY: 50,
          labels: {
            useSeriesColors: true,  // Usa los colores de cada serie para la leyenda
          },
        },
      },
    };
  
  return (
    <div className="card-dashboard --gastoCategoria">
      <ApexCharts
        options={data.options}
        series={data.series}
        type="pie"
        width="100%"
        height={"100%"}
      />
    </div>
  )
}

export default GastosPorCategoria