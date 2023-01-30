import React from "react";
import { LineChart, Line, XAxis, YAxis, Legend } from 'recharts';

class NivoLineChart extends React.Component {
    getLineChart = (props) => {
      const { data, lineColors } = this.props;

      // Extract each name from the data, excluding the dataKey (in this case, "name")
      const dataKeys = Object.keys(data[0]).slice(1);
  
      // Iterate through the keys & create each line for the chart
      const chartLinesArr = dataKeys.map((id, index) => {
        return (
          <Line 
            type='monotone'
            key={id}
            dataKey={dataKeys[index]}
            stroke={lineColors[index]}
          />
        )
      })
      return chartLinesArr;
    }
  
    render() {
    const { data } = this.props;
      return (
        <>
        <h2>Nivo</h2>
        <LineChart width={600} height={300} data={data}>
          {this.getLineChart()}
          <XAxis dataKey='name' />
          <YAxis />
          <Legend />
        </LineChart>
        </>
      )
    }
  };

export default NivoLineChart;