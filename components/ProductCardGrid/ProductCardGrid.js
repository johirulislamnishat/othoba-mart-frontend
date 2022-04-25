import {
  HeartOutlined,
  ShoppingOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import Link from "next/link";
import { useState } from "react";
import { addToCart, addToWish } from "../../context/actions/Actions";
import useProvider from "../../hooks/useProvider";

const ProductCardGrid = ({ item }) => {
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
      <div className="border p-4">
        <div className="single-product-image w-full">
          <Image preview={false} src={item?.photo} alt="" />
        </div>

        <div className="wishlist flex justify-center items-center">
          <HeartOutlined
            onClick={() => handleAddToWish(item)}
            style={wishClicked ? { color: "red" } : { color: "inherit" }}
          />
        </div>

        {item?.discount_percentage && (
          <div className="discount flex justify-center items-center">
            <small>{item.discount_percentage}</small>
          </div>
        )}

        <h3>
          <Link href="/product/[id]" as={`/product/${item._id}`}>
            <a className="text-1xl"> {item?.product_name.slice(0, 35)}</a>
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
            <h3>${item?.product_price}.00</h3>
          </div>
          <div className="shopping flex justify-center items-center">
            <ShoppingOutlined
              onClick={() => handleAddToCart(item)}
              style={cartClicked ? { color: "red" } : { color: "inherit" }}
            />
          </div>
        </div>
        {/* <p className="text-1xl mt-3">2 Day Delivery</p> */}
      </div>
    </>
  );
};

export default ProductCardGrid;
