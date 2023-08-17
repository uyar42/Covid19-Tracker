import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import { useSelector } from "react-redux";
import { Space, Spin } from "antd";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function BarChart() {
  const selected = useSelector((state) => state.tracker.selected);
  const status = useSelector((state) => state.tracker.status);

  let active =
    selected.activeCases !== "N/A"
      ? selected.activeCases?.replaceAll(",", "")
      : 0;
  let totalCase =
    selected.totalCases !== "N/A"
      ? selected.totalCases?.replaceAll(",", "")
      : 0;
  let deaths =
    selected.totalDeaths !== "N/A"
      ? selected.totalDeaths?.replaceAll(",", "")
      : 0;
  let recovered =
    selected.totalRecovered !== "N/A"
      ? selected.totalRecovered?.replaceAll(",", "")
      : 0;

  const options = {
    title: {
      text: selected.country,
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Active cases", y: Number(active) },
          { label: "Total Cases", y: Number(totalCase) },
          { label: "Total Deaths", y: Number(deaths) },
          { label: "Total Recovery", y: Number(recovered) },
        ],
      },
    ],
  };
  return (
    <div style={{ display: "flex" }}>
      {status === "succeeded" ? (
        <CanvasJSChart options={options} />
      ) : (
        <Spin style={{ margin: "auto" }} size="large" />
      )}
    </div>
  );
}

export default BarChart;
