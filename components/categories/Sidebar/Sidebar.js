import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, Checkbox, Slider } from "antd";
import React from "react";
const Sidebar = () => {
  function selectedCheckBox(e) {
    // console.log(`checked = ${e.target.checked}`);
  }
  function selectedRating(e) {
    // console.log(`checked = ${e.target.checked}`);
  }

  return (
    <aside>
      <div className="single-filter">
        <h4>Categories</h4>
        <div>
          <Button>
            <span>Category name</span>
            <span>120</span>
          </Button>
          <Button>
            <span>Watch Brands</span>
            <span>60</span>
          </Button>
          <Button>
            <span>Times Watches</span>
            <span>40</span>
          </Button>
          <Button>
            <span>Women Watches</span>
            <span>20</span>
          </Button>
        </div>
      </div>
      <div className="single-filter">
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
      </div>
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
