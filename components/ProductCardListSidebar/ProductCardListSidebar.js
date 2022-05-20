import { ShoppingOutlined } from "@ant-design/icons";
import { Col, Image } from "antd";
import Link from "next/link";
import { useState } from "react";
import { addToCart, addToWish } from "../../context/actions/Actions";
import useProvider from "../../hooks/useProvider";

const ProductCardListSidebar = ({ item }) => {
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
            <div className="single-product border flex justify-between items-center">
                <Col sm={6} md={10} lg={10} className="product-image">
                    <div className="single-product-image w-full">
                        <Image preview={false} src={item?.photo} alt="" />
                    </div>
                </Col>
                <Col sm={18} md={14} lg={14} className="md:pl-4">
                    <h3>
                        <Link href="/product/[id]" as={`/product/${item._id}`}>
                            <a className="text-1xl"> {item?.product_name}</a>
                        </Link>
                    </h3>

                    <div className="flex justify-between items-center mt-4">
                        <div className="product-price">
                            {item?.discount_price ? (
                                <span>{item.discount_price}</span>
                            ) : (
                                ""
                            )}
                            <h3>${item?.product_price}.00</h3>
                        </div>
                        <div className="shopping flex justify-center items-center">
                            <ShoppingOutlined
                                onClick={() => handleAddToCart(item)}
                                style={
                                    cartClicked
                                        ? { color: "red" }
                                        : { color: "inherit" }
                                }
                            />
                        </div>
                    </div>
                </Col>
            </div>
        </>
    );
};

export default ProductCardListSidebar;
