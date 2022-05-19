import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { API_BASE_URL } from "../apiconstants";
import { addUser } from "./../context/actions/Actions";

const AuthHandlers = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const router = useRouter();

    // register api handler function
    const signupHandlerCustomer = (user_name, email, password) => {
        setLoading(true);
        axios
            .post(API_BASE_URL + "/auth/register", {
                user_name: user_name,
                email: email,
                password: password,
            })
            .then(function (response) {
                setMessage(response.data.message);
                setLoading(false);
                router.push("/");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const signupHandlerVendor = (
        user_name,
        email,
        password,
        shop_name,
        dispatch
    ) => {
        setLoading(true);
        axios
            .post(API_BASE_URL + "/auth/register/vendor", {
                user_name: user_name,
                email: email,
                password: password,
                shop_name: shop_name,
            })
            .then(function (response) {
                // console.log(response)
                setMessage(response?.data?.message);
                dispatch({
                    type: "AUTH",
                    payload: response?.data,
                });
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    // login api handler function
    const signinHandler = (user_name, password, dispatch, vendorr) => {
        setLoading(true);
        axios
            .post(API_BASE_URL + "/auth/login", {
                user_name: user_name,
                password: password,
            })
            .then(function (response) {
                // console.log(response);
                // setUser(response?.data);
                // localStorage.setItem("token", response?.data?.accessToken);
                // setToken(localStorage.getItem("token"));
                dispatch({
                    type: "AUTH",
                    payload: response?.data,
                });
                setLoading(false);
                if(!vendorr){
                  router.push("/");

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const logout = () => {
        localStorage.removeItem("user");
    };

    return {
        loading,
        message,
        setMessage,
        signupHandlerCustomer,
        signupHandlerVendor,
        signinHandler,
    };
};

export default AuthHandlers;
