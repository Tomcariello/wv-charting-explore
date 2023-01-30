import React from "react";
import {
  AnimatedAxis, // any of these can be non-animated equivalents
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";

class VisxLineChart extends React.Component {
  getData1 = (props) => {
    return [
      { x: "2020-01-01", y: 50 },
      { x: "2020-01-02", y: 10 },
      { x: "2020-01-03", y: 20 },
    ];
  };

  getData2 = (props) => {
    return [
      { x: "2020-01-01", y: 30 },
      { x: "2020-01-02", y: 40 },
      { x: "2020-01-03", y: 80 },
    ];
  };

  getAccessors = (props) => {
    return {
      xAccessor: (d) => d.x,
      yAccessor: (d) => d.y,
    };
  };

  render = () => (
    <>
      <h2>Visx</h2>
      <XYChart
        height={300}
        xScale={{ type: "band" }}
        yScale={{ type: "linear" }}
      >
        <AnimatedAxis orientation="bottom" />
        <AnimatedGrid columns={false} numTicks={4} />
        <AnimatedLineSeries
          dataKey="Line 1"
          data={this.getData1()}
          {...this.getAccessors()}
        />
        <AnimatedLineSeries
          dataKey="Line 2"
          data={this.getData2()}
          {...this.getAccessors()}
        />
        <Tooltip
          snapTooltipToDatumX
          snapTooltipToDatumY
          showVerticalCrosshair
          showSeriesGlyphs
          renderTooltip={({ tooltipData, colorScale }) => (
            <div>
              <div style={{ color: colorScale(tooltipData.nearestDatum.key) }}>
                {tooltipData.nearestDatum.key}
              </div>
              {this.getAccessors().xAccessor(tooltipData.nearestDatum.datum)}
              {", "}
              {this.getAccessors().yAccessor(tooltipData.nearestDatum.datum)}
            </div>
          )}
        />
      </XYChart>
    </>
  );
}

export default VisxLineChart;
