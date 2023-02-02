import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "us",
    color: "hsl(86, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 35,
      },
      {
        x: "helicopter",
        y: 236,
      },
      {
        x: "boat",
        y: 128,
      },
      {
        x: "train",
        y: 145,
      },
      {
        x: "subway",
        y: 249,
      },
      {
        x: "bus",
        y: 265,
      },
      {
        x: "car",
        y: 255,
      },
      {
        x: "moto",
        y: 134,
      },
      {
        x: "bicycle",
        y: 142,
      },
      {
        x: "horse",
        y: 29,
      },
      {
        x: "skateboard",
        y: 238,
      },
      {
        x: "others",
        y: 59,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(26, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 258,
      },
      {
        x: "helicopter",
        y: 193,
      },
      {
        x: "boat",
        y: 136,
      },
      {
        x: "train",
        y: 6,
      },
      {
        x: "subway",
        y: 92,
      },
      {
        x: "bus",
        y: 74,
      },
      {
        x: "car",
        y: 36,
      },
      {
        x: "moto",
        y: 7,
      },
      {
        x: "bicycle",
        y: 256,
      },
      {
        x: "horse",
        y: 109,
      },
      {
        x: "skateboard",
        y: 262,
      },
      {
        x: "others",
        y: 42,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(205, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 222,
      },
      {
        x: "helicopter",
        y: 276,
      },
      {
        x: "boat",
        y: 171,
      },
      {
        x: "train",
        y: 178,
      },
      {
        x: "subway",
        y: 49,
      },
      {
        x: "bus",
        y: 61,
      },
      {
        x: "car",
        y: 258,
      },
      {
        x: "moto",
        y: 179,
      },
      {
        x: "bicycle",
        y: 191,
      },
      {
        x: "horse",
        y: 26,
      },
      {
        x: "skateboard",
        y: 220,
      },
      {
        x: "others",
        y: 111,
      },
    ],
  },
];

class NivoLineChart extends React.Component {
  render() {
    return (
      <div style={{height: 350}}>
      <h2>Nivo</h2>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
    </div>
    )
  }
}

export default NivoLineChart;
