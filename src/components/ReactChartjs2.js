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

class ReactChartsJS2LineChart extends React.Component {
  // Specify the chart options
  getOptions = () => {
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

  // Extract the X-axis labels from the data
  getXAxisLabels = (props) => {
    const { data } = this.props;
    return data.map((dataPoint) => dataPoint.name);
  };

  // Extract the lines from the data, eliminating "name" (which indicates the X-axis label)
  getLineTitles = (props) => {
    const { data } = this.props;
    const lineTitles = Object.keys(data[0]);
    return lineTitles.filter((e) => e !== "name");
  };

  getDatasets = (props) => {
    const { data, lineColors } = this.props;
    const lineTitles = this.getLineTitles();
    let formattedDataArr = [];

    // iterate through each label & aggregate the data
    for (let i = 0; i < lineTitles.length; i++) {
      let thisLabel = lineTitles[i]; // google, yahoo, bing
      let thisLabelValues = [];
      
      // Extract each value for the current label
      for (let j = 0; j < data.length; j++) {
        thisLabelValues.push(data[j][thisLabel]);
      }
      // Push the data for this label to the array
      formattedDataArr.push({
        label: thisLabel,
        data: thisLabelValues,
        borderColor: lineColors[i],
      });
    }
    return formattedDataArr;
  };

  getformattedData = () => {
    const xAxisLabels = this.getXAxisLabels();
    const formattedDataSets = this.getDatasets();
    const formattedData = {
      labels: xAxisLabels,
      datasets: formattedDataSets,
    };
    return formattedData;
  };

  render() {
    return (
      <>
        <h2>React-Chart-JS2</h2>
        <Line options={this.getOptions()} data={this.getformattedData()} />
      </>
    );
  }
}

export default ReactChartsJS2LineChart;
