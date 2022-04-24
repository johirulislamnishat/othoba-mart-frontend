import Link from "next/link";
import { useRouter } from 'next/router'
import useProvider from "../../../hooks/useProvider";
import { addToCart, addToWish } from "../../../context/actions/Actions";
import { Col, Image, Row } from "antd";
import { useState } from "react";
import {
    HeartOutlined,
    ShoppingOutlined,
    StarFilled,
    StarOutlined,
} from "@ant-design/icons";

const Card = ({ item }) => {
    const [cartClicked, setCartClicked] = useState(false);
    const [wishClicked, setWishClicked] = useState(false);

    const router = useRouter()
    const {
        state: { user, cart, wish },
        dispatch,
    } = useProvider();

    const handleAddToWish = (item) => {
        if(user?.accessToken) {
            if(!cartClicked) {
                setWishClicked(true);
                dispatch(addToWish(wish, item));
            }
        } else {
            router.push('/auth/login')
        }
    };

    const handleAddToCart = (item) => {
        if(user?.accessToken) {
        if(!wishClicked) {
            setCartClicked(true);
            dispatch(addToCart(cart, item));
        }
     } else {
        router.push('/auth/login')
    }
    };

    return (
        <Col xs={24} sm={12} md={6} lg={6}>
            <div className="p-5 single-product">
                {/* <Image src={item.product_img} alt="" /> */}

                <Image preview={false} src={item?.photo} alt="" />

                <div className="wishlist flex justify-center items-center">
                    <HeartOutlined
                        onClick={() => handleAddToWish(item)}
                        style={
                            wishClicked
                                ? { color: "red" }
                                : { color: "inherit" }
                        }
                    />
                </div>
                <div className="discount flex justify-center items-center">
                    <small>Super Price</small>
                </div>
                <h3>
                    <Link href="/product/[id]" as={`/product/${item._id}`}>
                        <a className="text-1xl"> {item?.product_name}</a>
                    </Link>
                </h3>
                <div className="ratings">
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                </div>
                <div className="flex justify-between items-center mt-4">
                    <div className="product-price">
                        <small>$779.99</small>
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
                <p className="text-1xl mt-3">2 Day Delivery</p>
            </div>
        </Col>
    );
};

export default Card;
