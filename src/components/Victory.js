import React from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
  VictoryScatter,
  VictoryTooltip
} from "victory";

class VictoryLineChart extends React.Component {
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
  
  getFormattedData = (props) => {
    const { data } = this.props;
    const xAxisLabels = this.getXAxisLabels(); // month list
    const lineTitles = this.getLineTitles(); // google, bing, etc.
    let formattedDataArr = [];

    // iterate through each label & aggregate the data
    for (let i = 0; i < lineTitles.length; i++) {
      const searchProvider = lineTitles[i]; // google, etc.
      let searchProviderData = []
      
      // Extract each value for the current label
      for (let j = 0; j < data.length; j++) {
        searchProviderData.push({
          x: xAxisLabels[j],
          y: data[j][searchProvider],
        });
      }
      formattedDataArr.push(searchProviderData);
    }
    return formattedDataArr;
  };

  getLineChart = (props) => {
    const formattedData = this.getFormattedData();
    const lineDataArray = formattedData.map((id) => {
      return id;
    })
    // const lines = lineDataArray.map(function(entry, index){
    //   return (
    //     <>
    //     <VictoryLine
    //     data={entry}
    //     style={{ data: { stroke: "blue" } }}
    //   />
    //   <VictoryScatter size={5} data={entry} />
    // </>)
    // })
    return (
      <>
      <VictoryChart>
        <VictoryLine
          data={lineDataArray[0]}
          style={{ data: { stroke: "blue" } }}
        />
        <VictoryScatter size={5} data={lineDataArray[0]} />
        <VictoryLine
          data={lineDataArray[1]}
          style={{ data: { stroke: "green" } }}
        />
        <VictoryScatter size={5} data={lineDataArray[1]} />
        <VictoryLine
          data={lineDataArray[2]}
          style={{ data: { stroke: "orange" } }}
        />
        <VictoryScatter size={5} data={lineDataArray[2]} />
      </VictoryChart>
    </>
    )
  }

  // Data object from the docs.
  // return [
  //   { x: "2020-01", y: 1.1235 },
  //   { x: "2020-02", y: 4.32332 },
  //   { x: "2020-03", y: 3.87543 },
  //   { x: "2020-04", y: 1.1251 },
  //   { x: "2020-05", y: 2.123241 },
  //   { x: "2020-06", y: 3.5231 },
  // ];


  render() {
    const t = this.getLineChart();
    return (
      <>
      <h2>Victory</h2>
        {this.getLineChart()}
      </>
    );
  }
}

export default VictoryLineChart;
