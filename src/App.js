import React from "react";
// import { LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import "./App.css";
import RechartsLineChart from "./components/recharts.js";
import ReactChartsJS2LineChart from "./components/ReactChartjs2.js";
import VictoryLineChart from "./components/Victory.js";
import NivoLineChart from "./components/Nivo.js";
import { data } from "./data/data.js";

// Array of colors to be applied sequentially to each line required
const lineColors = ["#8884d8", "#82ca9d", "orange", "pink"];

function App() {
  return (
    <div className="App">
      <div class="chart-container recharts">
        <RechartsLineChart data={data} lineColors={lineColors} />
      </div>
      <div class="chart-container reactchartsjs2">
        <ReactChartsJS2LineChart />
      </div>
      <div class="chart-container victory">
        <VictoryLineChart />
      </div>
      <div class="chart-container Nivo">
        <NivoLineChart  data={data} lineColors={lineColors} />
      </div>
    </div>
  );
}

export default App;
