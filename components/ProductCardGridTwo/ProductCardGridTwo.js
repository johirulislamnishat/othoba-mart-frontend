import { ShoppingOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import { Col, Image } from "antd";
import Link from "next/link";
import { useState } from "react";
import { addToCart, addToWish } from "../../context/actions/Actions";
import useProvider from "../../hooks/useProvider";

const ProductCardGridTwo = ({ item }) => {
  const [cartClicked, setCartClicked] = useState(false);
  const [wishClicked, setWishClicked] = useState(false);
  const {
    state: { cart, wish },
    dispatch,
  } = useProvider();

  const handleAddToWish = (item) => {
    setWishClicked(true);
    dispatch(addToWish(wish, item));
  };

  const handleAddToCart = (item) => {
    setCartClicked(true);
    dispatch(addToCart(cart, item));
  };

  return (
    <>
      <div className="border w-full p-4 flex justify-between md:mb-4 items-center">
        <Col xs={12} sm={10} md={10} lg={10} className=" product-image">
          <div className="single-product-image w-full">
            <Image preview={false} src={item?.photo} alt="" />
          </div>
          {item?.discount_percentage && (
            <div className="discount flex justify-center items-center">
              <small>{item.discount_percentage}</small>
            </div>
          )}
        </Col>
        <Col xs={12} sm={14} md={14} lg={14} className="pl-4">
          <h3>
            <Link href="/product/[id]" as={`/product/${item._id}`}>
              <a className="text-1xl"> {item?.product_name.slice(0, 40)}</a>
            </Link>
          </h3>
          <div className="ratings">
            {item?.ratings ? (
              <>
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarOutlined />
              </>
            ) : (
              <>
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
              </>
            )}
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="product-price">
              {item?.discount_price ? <span>{item.discount_price}</span> : ""}
              <h3>
                ${item?.product_price}
                .00
              </h3>
            </div>
            <div className="shopping flex justify-center items-center">
              <ShoppingOutlined
                onClick={() => handleAddToCart(item)}
                style={cartClicked ? { color: "red" } : { color: "inherit" }}
              />
            </div>
          </div>
          <div className="product-data flex justify-between items-center mt-4">
            <p>
              <span>Available:</span>{" "}
              <span> {item?.available ? item?.available : 0}</span>
            </p>
            <p>
              <span>Sold: </span> <span>{item?.sold ? item?.sold : 0}</span>
            </p>
          </div>
        </Col>
      </div>
    </>
  );
};

export default ProductCardGridTwo;
