import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../apiconstants";
import HomeLayout from "../../../components/layouts/homeLayout";
import RelatedProducts from "../../../components/RelatedProducts/RelateProducts";
import useProvider from "../../../hooks/useProvider";

const Store = () => {
    const router = useRouter();
    const { id } = router.query;
    const {
        state: { user },
    } = useProvider();
    const [store, setStore] = useState([]);

    useEffect(() => {
        axios.get(API_BASE_URL + `/shop/${id}`).then(function (response) {
            setStore(response?.data?.result);
        });
    }, [id]);

    const store_owner = store?.vendor?._id;
    const current_user = user?._id;

    const handleChat = () => {
        let newConversation = {
            senderId: store_owner,
            receiverId: current_user,
        };
        axios
            .post(API_BASE_URL + `/conversation/`, {
                newConversation,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <HomeLayout title={store?.shop_name}>
            <div className="store-page">
                <div className="info-store">
                    <img className="storelogo" src={store?.shop_logo} alt="" />
                    <h2 className="store-title">{store?.shop_name}</h2>

                    <p className="store-chat-text">What to chat with us?</p>
                    <button className="store-chat-btn" onClick={handleChat}>
                        Chat Now
                    </button>
                </div>
                <div className="store-products">
                    <h2 className="store-products-title">All our products</h2>
                    <RelatedProducts />
                </div>
            </div>
        </HomeLayout>
    );
};

export default Store;
