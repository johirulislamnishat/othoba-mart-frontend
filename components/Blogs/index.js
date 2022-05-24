import { Card, Col, Row } from "antd";
import axios from "axios";
import Router from "next/router";
import React from "react";
import { API_BASE_URL } from "../../apiconstants";
import { humaneDate } from "../../utilities/time";

const { Meta } = Card;

const Blogs = ({ location }) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`${API_BASE_URL}/blog`)
      .then((res) =>
        location === "home"
          ? setData(res.data.result.slice(0, 3))
          : setData(res.data.result)
      );
  }, [location]);

  return (
    <Row gutter={[24, 24]}>
      {data.map((item) => (
        <Col
          xs={24}
          md={12}
          lg={8}
          key={item._id}
          onClick={() => Router.push(`/blogs/${item._id}`)}
        >
          <Card
            className="single-blog"
            hoverable
            cover={
              <img
                alt={item.blog_title}
                src={item.blog_image}
                style={{ height: "250px", objectFit: "cover" }}
              />
            }
          >
            <Meta
              title={item.blog_title}
              description={`By ${item.user_id.user_name}, on ${humaneDate(
                item.createdAt
              )}`}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Blogs;
