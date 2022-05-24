import { Button, Slider } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";

const Sidebar = () => {
  const [items, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  console.log(selectedCategory);
  useEffect(() => {
    axios.get(API_BASE_URL + "/category").then(function (response) {
      setItems(response?.data?.result);
    });
  }, []);
  function selectedCheckBox(e) {
    // console.log(`checked = ${e.target.checked}`);
  }
  function selectedRating(e) {
    // console.log(`checked = ${e.target.checked}`);
  }
  const selectedCategoryName = (e) => {
    setSelectedCategory(e.target.innerText);
  };

  return (
    <aside>
      <div className="single-filter">
        <h4>Categories</h4>
        <div>
          {items.map((item, index) => {
            return (
              <Button key={index}>
                <span onClick={selectedCategoryName}>{item.category_name}</span>
                <span></span>
              </Button>
            );
          })}
        </div>
      </div>
      {/* <div className="single-filter">
        <h4>Brands</h4>
        <div>
          <Checkbox onChange={selectedCheckBox}>XIAOMI Phones</Checkbox>
          <Checkbox onChange={selectedCheckBox}>OPPO Phones</Checkbox>
          <Checkbox onChange={selectedCheckBox}>LENOVO Phones</Checkbox>
          <Checkbox onChange={selectedCheckBox}>LG Electronic</Checkbox>
          <Checkbox onChange={selectedCheckBox}>NOKIA Phone</Checkbox>
        </div>
      </div>
      <div className="single-filter">
        <h4>Ratings</h4>
        <div>
          <Checkbox onChange={selectedRating}>
            <div className="ratings">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
            </div>
          </Checkbox>
          <Checkbox className="rating-align" onChange={selectedRating}>
            <div className="ratings">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
            </div>
          </Checkbox>
          <Checkbox onChange={selectedRating}>
            <div className="ratings">
              <StarFilled />
              <StarFilled />
              <StarFilled />
              <StarOutlined />
              <StarOutlined />
            </div>
          </Checkbox>
          <Checkbox onChange={selectedRating}>
            <div className="ratings">
              <StarFilled />
              <StarFilled />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
          </Checkbox>
          <Checkbox onChange={selectedRating}>
            <div className="ratings">
              <StarFilled />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
            </div>
          </Checkbox>
        </div>
      </div> */}
      <div className="single-filter">
        <h4>Price</h4>
        <div>
          <Slider range={{ draggableTrack: true }} defaultValue={[20, 50]} />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
