import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

class HighchartsLineChart extends React.Component {
    getData = (props) => {
        const { data, lineColors } = this.props;
        return [{
            x: 1,
            y: 9,
            name: "Point2",
            color: "#00FF00"
        }, {
            x: 4,
            y: 6,
            name: "Point1",
            color: "#FF00FF"
        }]
    }

    getOptions = (props) => {
       return {
        chart: {
          backgroundColor: "white",
          type: "area",
          height: "500px",
        },
        title: {
          text: `<h1 id="chart-title">Title Text</h1>`,
          align: "left",
        },
        series: [
          {
            name: 'Testing Highcharts',
            data: this.getData(),
            tooltip: {
              valueDecimals: 2,
            },
          },
        ],
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