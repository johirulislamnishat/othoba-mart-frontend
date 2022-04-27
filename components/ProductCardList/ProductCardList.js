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

const ProductCardList = ({ item }) => {
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
      <div className="product-list-view p-5 flex justify-start items-center border-2 mb-5 rounded-lg">
        {/* <Image src={item.product_img} alt="" /> */}

        <div className="w-1/4">
          <Image preview={false} src={item?.photo} alt="" />
        </div>

        <div className="w-2/4 pl-6">
          <h3>
            <Link href="/product/[id]" as={`/product/${item._id}`}>
              <a className="text-1xl"> {item?.product_name}</a>
            </Link>
          </h3>
          <p>Space for a small product description</p>
          <div className="ratings mb-4">
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
          <div className="meta-data">
            <p>
              <span>Brand:</span>
              <span>OPPO</span>
            </p>
            <p>
              <span>Delivery:</span>
              <span>Europe</span>
            </p>
            <p>
              <span>Stoke:</span>
              <span>320 pcs</span>
            </p>
          </div>
        </div>
        <div className="product-data w-1/4 pl-6">
          <div className="product-price">
            <h3>${item?.product_price}.00</h3>
            <small>$779.99</small>
          </div>
          <h6 className="text-1xl mt-3">Free Shipping</h6>
          <p className="text-1xl mt-3">Delivery in 1 day</p>

          <button onClick={() => handleAddToCart(item)} className="custom-btn">
            <ShoppingOutlined />
            <span>Add to cart </span>
          </button>

          <button
            onClick={() => handleAddToWish(item)}
            className="custom-btn grey-btn"
          >
            <HeartOutlined />
            <span> Add To Wishlist</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCardList;
