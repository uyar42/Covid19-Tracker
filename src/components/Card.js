import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats, setSelected } from "../redux/trackerSlice";
import Item from "./Item";

function Cards() {
  const [data, setData] = useState([]);
  const items = useSelector((state) => state.tracker.items);
  const ctry = useSelector((state) => state.tracker.country);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  useEffect(() => {
    const cardData = items?.filter(
      (f) => f?.country === (ctry ? ctry : "Turkey")
    );
    dispatch(
      setSelected({
        activeCases: cardData[0]?.activeCases,
        country: cardData[0]?.country,
        totalCases: cardData[0]?.totalCases,
        totalDeaths: cardData[0]?.totalDeaths,
        totalRecovered: cardData[0]?.totalRecovered,
      })
    );
    setData([
      {
        activeCases: cardData[0]?.activeCases,
        country: cardData[0]?.country,
        totalCases: cardData[0]?.totalCases,
        totalDeaths: cardData[0]?.totalDeaths,
        totalRecovered: cardData[0]?.totalRecovered,
      },
    ]);
  }, [ctry, items]);

  return (
    <div>
      <Item data={data} />
    </div>
  );
}

export default Cards;
