import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

class ReactChartsJS2LineChart extends React.Component {
  // Specify the chart options
  getOptions = (props) => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: false,
        },
      },
    };
  };

  getData = (props) => {
    return {
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Dataset 2",
          data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    };
  };

  render() {
    return (
      <>
        <h2>React-Chart-JS2</h2>
        <Line options={this.getOptions()} data={this.getData()} />
      </>
    );
  }
}

export default ReactChartsJS2LineChart;
