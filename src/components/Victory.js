import React from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryLabel,
  VictoryScatter,
} from "victory";

class VictoryLineChart extends React.Component {
  getDates = (props) => {
    return ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06"];
  };

  getTickValues = (props) => {
    return ["2020-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06"];
  };

  // prev
  getData1 = (props) => {
    return [
      { x: "2020-01", y: 1.1235 },
      { x: "2020-02", y: 4.32332 },
      { x: "2020-03", y: 3.87543 },
      { x: "2020-04", y: 1.1251 },
      { x: "2020-05", y: 2.123241 },
      { x: "2020-06", y: 3.5231 },
    ];
  };

  // curr
  getData2 = (props) => {
    return [
      { x: "2020-03", y: 4.54332 },
      { x: "2020-04", y: 2.125642 },
      { x: "2020-05", y: 3.12451 },
      { x: "2020-06", y: 3.1234 },
    ];
  };

  render() {
    return (
      <>
      <h2>Victory</h2>
        <div className="App">
          <VictoryChart>
            <VictoryAxis
              tickValues={this.getTickValues()}
              tickFormat={this.getDates()}
              tickLabelComponent={<VictoryLabel angle={315} />}
            />
            <VictoryAxis dependentAxis />

            <VictoryLine
              data={this.getData2()}
              style={{ data: { stroke: "red" } }}
            />
            <VictoryScatter size={5} data={this.getData2()} />

            <VictoryLine
              data={this.getData1()}
              style={{ data: { stroke: "blue" } }}
            />
            <VictoryScatter size={5} data={this.getData1()} />
          </VictoryChart>
        </div>
      </>
    );
  }
}

export default VictoryLineChart;
