import React from "react";
import { Card } from "antd";
import { Space, Spin } from "antd";

import { useSelector } from "react-redux";

const { Meta } = Card;

function Item({ data }) {
  // console.log(data);
  const status = useSelector((state) => state.tracker.status);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: "20px",
      }}
    >
      {data.map((c) => {
        return (
          <>
            <Card
              hoverable
              style={{
                width: 240,
                textAlign: "center",
                backgroundColor: "rgb(227, 222, 150)",
              }}
              cover={
                <img
                  alt="example"
                  src="https://static.thenounproject.com/png/4353951-200.png"
                />
              }
            >
              {"Active Cases"}
              <Meta
                style={{ textAlign: "center", fontSize: "1.2em" }}
                title={
                  status === "succeeded" ? (
                    c.activeCases || "N/A"
                  ) : (
                    <Spin style={{ margin: "auto" }} size="small" />
                  )
                }
              />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
                textAlign: "center",
                backgroundColor: "rgb(219, 136, 151)",
              }}
              cover={
                <img
                  // style={{ background: "white" }}
                  alt="example"
                  src="https://static.thenounproject.com/png/3097460-200.png"
                />
              }
            >
              Total Cases
              <Meta
                style={{ textAlign: "center", fontSize: "1.2em" }}
                title={
                  status === "succeeded" ? (
                    c.totalCases
                  ) : (
                    <Spin style={{ margin: "auto" }} size="small" />
                  )
                }
              />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
                textAlign: "center",
                backgroundColor: "rgb(34, 163, 114)",
              }}
              cover={
                <img
                  alt="example"
                  src="https://static.thenounproject.com/png/3284257-200.png"
                />
              }
            >
              Total Deaths
              <Meta
                style={{ textAlign: "center", fontSize: "1.2em" }}
                title={
                  status === "succeeded" ? (
                    c.totalDeaths
                  ) : (
                    <Spin style={{ margin: "auto" }} size="small" />
                  )
                }
              />
            </Card>
            <Card
              hoverable
              style={{
                width: 240,
                textAlign: "center",
                backgroundColor: "rgb(136, 121, 242)",
              }}
              cover={
                <img
                  alt="or"
                  src="https://cdn-icons-png.flaticon.com/512/121/121731.png"
                />
              }
            >
              Total Recovered
              <Meta
                style={{ textAlign: "center", fontSize: "1.2em" }}
                title={
                  status === "succeeded" ? (
                    c.totalRecovered
                  ) : (
                    <Spin style={{ margin: "auto" }} size="small" />
                  )
                }
              />
            </Card>
          </>
        );
      })}
    </div>
  );
}

export default Item;
