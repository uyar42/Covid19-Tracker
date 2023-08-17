import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { AutoComplete } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Dropdown, Button } from "antd";
import { setCountry } from "../redux/trackerSlice";

function Header() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.tracker.items);
  const country = useSelector((state) => state.tracker.country);
  // console.log(country);
  let ct = [];
  items.map((i) => ct.push(i.country));
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCountry(value));
  };

  const handleChange = (value) => {
    value = value.charAt(0).toUpperCase() + value.slice(1);
    setValue(value);
  };

  // console.log(ct);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>COVİD-19</h2>
      <form onSubmit={handleSubmit}>
        <AutoComplete
          value={value}
          options={ct.map((option) => ({ value: option }))}
          onChange={handleChange}
          placeholder="Ülke seçiniz.."
          style={{ width: "150px" }}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </form>
      <h4>Country Wise Cases of Corona Virus</h4>
    </div>
  );
}

export default Header;
