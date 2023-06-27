import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  chart: {
    type: 'line'
  },
  title: {
    text: ''
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  },
  series: [{
    name: 'Entrada',
    data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8]
  }, {
    name: 'Saída',
    color: "red",
    data: [2.9, 3.6, 0.6, 4.8, 10.2, 14.5, 17.6]
  }]
}

const BarChart = () => <div>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
    containerProps={{ style: { width: "calc(95% - 16px)", height: "100%", padding: 0, margin: 0 } }}
  />
</div>

export default BarChart