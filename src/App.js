import React from "react";
// import { LineChart, Line, XAxis, YAxis, Legend } from 'recharts';
import './App.css';
import RechartsLineChart from './components/recharts.js';
import ReactChartsJS2LineChart from './components/ReactChartjs2.js';
import {data} from './data/data.js';

// Array of colors to be applied sequentially to each line required
const lineColors = ["#8884d8", "#82ca9d", "orange", "pink"]

function App() {
  return (
    <div className="App">
      <RechartsLineChart data={data}  lineColors={lineColors}/>
      <ReactChartsJS2LineChart data={data}  lineColors={lineColors}/>
    </div>
  );
}

export default App;
