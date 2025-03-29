<template>
  <div class="hello">
    
    <BarChart />
    <LineChart />
    <div style="height: 400px;">
      <DoughnutChart />
    </div>


    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue'
import DoughnutChart from '@/components/DoughnutChart.vue'
//import PieChart from '@/components/PieChart.vue'
import LineChart from '@/components/LineChart.vue'
//import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    //Bar,
    LineChart,
    //PieChart,
    DoughnutChart,
    BarChart
  },
  data() {
    return {
      chartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [{
          label: 'Sales',
          backgroundColor: '#f87979',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
