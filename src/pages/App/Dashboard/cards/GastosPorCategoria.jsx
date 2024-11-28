import React from 'react'
import ApexCharts from 'react-apexcharts';


const GastosPorCategoria = () => {

    const data = {
      series: [30, 40, 35, 50, 40],  // Los datos de cada categoría (puedes adaptarlos)
      options: {
        chart: {
          type: 'pie',  // Tipo de gráfico: torta
          width: '100%',  // Asegura que el gráfico ocupe el 100% del contenedor
          animations: {
            enabled: true,  // Habilitar animaciones
            easing: 'easeinout',  // Tipo de animación
            speed: 800,  // Velocidad de la animación
          },
        },
        labels: ['Comida', 'Transporte', 'Ocio', 'Renta', 'Servicios'],  // Etiquetas de cada segmento
        plotOptions: {
          pie: {
            donut: {
              size: '60%',  // Tamaño del agujero si es gráfico tipo donut
            },
            expandOnClick: true,  // Expande el gráfico al hacer clic
          },
        },
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
          offsetY: 50,
          labels: {
            useSeriesColors: true,  // Usa los colores de cada serie para la leyenda
          },
        },
        tooltip: {
          theme: 'light',  // Tema del tooltip
          followCursor: true,  // Tooltip sigue al cursor
          fillSeriesColor: true,  // Utiliza el color de la serie en el tooltip
          style: {
            fontSize: '12px',
            fontWeight: 'bold',
          },
        },
        colors: [
          '#2a9d90', 
          '#f4a462',
          '#e8c468', 
          '#274754', 
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
        width="100%"
        height={"100%"}
      />
    </div>
  )
}

export default GastosPorCategoria