/** @format */
import React, { useState, useEffect } from "react";
import "./FilterSideSideDrawer.scss";
import axios from "axios";

const FilterSide_SideDrawer = ({ show }) => {
  const [value, setValue] = useState("");

  const base_url = "https://apis.3rdessential.in/open-home/drawer";
  useEffect(() => {
    const fetchCategory = async () => await getAllCategoryList();
    fetchCategory();
  }, []);

  const getAllCategoryList = async () => {
    axios.get(`${base_url}`).then((response) => {
      console.log(response);
      if (response.data) {
        setValue(response.data.cat);
      } else {
        setValue("");
      }
    });
  };

  console.log(value);

  const drawer =
    value && value.map((v, idx) => <li key={idx}>{v.categoryname}</li>);

  return (
    <nav className={show ? "side-drawer open" : "side-drawer"}>
      <ul>{drawer}</ul>
    </nav>
  );
};

export default FilterSide_SideDrawer;
