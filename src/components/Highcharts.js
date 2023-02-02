import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

class HighchartsLineChart extends React.Component {
  // Extract the lines from the data, eliminating "name" (which indicates the X-axis label)
  getLineTitles = (props) => {
    const { data } = this.props;
    const lineTitles = Object.keys(data[0]);
    return lineTitles.filter((e) => e !== "name");
  };
  getXAxisLabels = (props) => {
    const { data } = this.props;
    return data.map((dataPoint) => dataPoint.name);
  };

    getData = (props) => {
        const { data, lineColors } = this.props;
        const xAxisLabels = this.getXAxisLabels(); // months
        const lineTitles = this.getLineTitles();
        let formattedDataArr = [];

        // iterate through each label & aggregate the data
        for (let i = 0; i < lineTitles.length; i++) {
            let thisLabel = lineTitles[i]; // google, yahoo, bing
            let thisLabelValues = [];
            
            // Extract each value for the current label
            for (let j = 0; j < data.length; j++) {
                thisLabelValues.push([xAxisLabels[j], data[j][thisLabel]]);
            }
            // Push the data for this label to the array
            formattedDataArr.push({
                data: thisLabelValues,
            });
        }
        return formattedDataArr;
    }

    getOptions = (props) => {
       return {
        chart: {
          backgroundColor: "white",
          height: "500px",
        },
        title: {
          text: `<h1 id="chart-title">Highcharts</h1>`,
          align: "center",
        },
        xAxis: {
            categories: this.getXAxisLabels(),
         },
        series: this.getData(),
      };
    }
  
    render() {
      return (
        <>
            <div id="container">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={"chart"}
                    options={this.getOptions()}
                />
            </div>
        </>
      )
    }
  };

export default HighchartsLineChart;