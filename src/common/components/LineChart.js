import React from "react"
import { ResponsiveLine } from "@nivo/line"
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

// generate or change styles with this generator
// https://nivo.rocks/line/

const markerBuilder = ({ value, axis = "y", title = "average" }) => ({
  axis: axis,
  value: value,
  lineStyle: {
    stroke: "#b0413e",
    strokeWidth: 2,
    strokeDasharray: "4 4",
  },
  legend: title,
  textStyle: {
    fontFamily: "monospace",
  },
  legendOrientation: "vertical",
  legendPosition: "right",
})

export const LineChart = ({ data, markers }) => (
  <ResponsiveLine
    data={data}
    curve="natural"
    margin={{ top: 50, right: 30, bottom: 50, left: 60 }}
    xScale={{ type: "point", max: "auto" }}
    yScale={{
      type: "linear",
      min: 0,
      max: "auto",
      stacked: false,
      reverse: false,
    }}
    colors={{ scheme: "spectral" }}
    markers={[
      ...markers.map(({ title, value }) =>
        markerBuilder({ title: `${title} (${value} gwei)`, value })
      ),
    ]}
    theme={{
      textColor: "#333333",
      fontSize: 11,
      fontFamily: "monospace",
      axis: {
        domain: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
        },
        ticks: {
          line: {
            stroke: "#777777",
            strokeWidth: 1,
          },
        },
      },
      grid: {
        line: {
          stroke: "#dddddd",
          strokeWidth: 1,
        },
      },
      tooltip: {
        basic: { fontFamily: "monospace" },
        tableCell: { fontFamily: "monospace" },
      },
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "gwei",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    enableSlices="x"
    useMesh={true}
    legends={[
      {
        anchor: "top",
        direction: "row",
        justify: false,
        translateX: 0,
        translateY: -50,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 100,
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
)
