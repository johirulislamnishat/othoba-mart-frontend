import {
  BarsOutlined,
  BorderInnerOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import React, { useState } from "react";
import MainArea from "../MainArea/MainArea";
import Sidebar from "../Sidebar/Sidebar";

const CategoriesPage = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();
  const [value, setValue] = useState("filter-text");

  const [view, setView] = useState("gide-view");

  const handleView = (view) => {
    setView(view);
  };

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  function getChecked(e) {
    // console.log(`checked = ${e.target.checked}`);
  }
  const showDefaultDrawer = () => {
    setSize("default");
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="categories-page-top">
        <div className="flex justify-between items-center">
          <h2>Shop</h2>
          <div className="grid-or-list-view flex justify-between items-center">
            <div
              onClick={() => handleView("gide-view")}
              className="filter-icon flex justify-center items-center mr-5"
            >
              <BorderInnerOutlined />
              <span>Grid View</span>
            </div>
            <div
              onClick={() => handleView("list-view")}
              className="filter-icon flex justify-center items-center"
            >
              <BarsOutlined />
              <span>List View</span>
            </div>
          </div>
          <div className="custom-filter-btn">
            <Space>
              <button className="custom-btn" onClick={showDefaultDrawer}>
                <FilterOutlined />
                <span>Filter</span>
              </button>
            </Space>
          </div>
        </div>
        <div className="categories-page-top-filter flex items-center">
          <Drawer
            title={`Filter Products`}
            placement="left"
            size={size}
            onClose={onClose}
            visible={visible}
            extra={
              <Space>
                <Button type="primary" onClick={onClose}>
                  Submit Filter
                </Button>
              </Space>
            }
          >
            <div className="category-page-drawer-filter">
              <Sidebar></Sidebar>
            </div>
          </Drawer>

          {/* <div>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={"filter-text"}>Low to High</Radio>
              <Radio value={"filter-text2"}>High to Low</Radio>
            </Radio.Group>
          </div> */}
        </div>
      </div>
      <div>
        {/* <Sidebar></Sidebar> */}
        <MainArea view={view}></MainArea>
      </div>
    </>
  );
};

export default CategoriesPage;
