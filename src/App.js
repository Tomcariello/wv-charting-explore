import React from "react";
// import { LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import "./App.css";
import RechartsLineChart from "./components/recharts.js";
import ReactChartsJS2LineChart from "./components/ReactChartjs2.js";
import VictoryLineChart from "./components/Victory.js";
import NivoLineChart from "./components/Nivo.js";
import VisxLineChart from "./components/Visx.js";
import HighchartsChart from "./components/Highcharts.js";
import { data } from "./data/data.js";

// Array of colors to be applied sequentially to each line required
const lineColors = ["#8884d8", "#82ca9d", "orange", "pink"];

function App() {
  return (
    <div className="App">
      <div className="chart-container recharts">
        <RechartsLineChart data={data} lineColors={lineColors} />
      </div>
      <div className="chart-container reactchartsjs2">
        <ReactChartsJS2LineChart data={data} lineColors={lineColors} />
      </div>
      <div className="chart-container victory">
        <VictoryLineChart  data={data} lineColors={lineColors} />
      </div>
      <div className="chart-container highcharts" style={{width: '100%', height: '100%'}}>
        <HighchartsChart data={data} lineColors={lineColors} />
      </div>
      <div className="chart-container visx">
        <VisxLineChart  data={data} lineColors={lineColors} />
      </div>
      <div className="chart-container nivo" style={{width: '100%', height: '100%'}}>
        <NivoLineChart data={data} lineColors={lineColors} />
      </div>
    </div>
  );
}

export default App;
