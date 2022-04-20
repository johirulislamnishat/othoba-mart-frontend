import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { API_BASE_URL } from "../apiconstants";

const AuthData = () => {
	const router = useRouter();
	// register api handler function
	const signupHandlerCustomer = (user_name, email, password) => {
		axios
			.post(API_BASE_URL + "/auth/register", {
				user_name: user_name,
				email: email,
				password: password,
			})
			.then(function (response) {
				console.log(response);
				router.push("/auth/login");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const signupHandlerVendor = (user_name, email, password, shop_name) => {
		axios
			.post(API_BASE_URL + "/auth/register/vendor", {
				user_name: user_name,
				email: email,
				password: password,
				shop_name: shop_name,
			})
			.then(function (response) {
				console.log(response);
				router.push("/auth/vendorProfile");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const [user, setUser] = useState({});
	// console.log("logged in user", user);
	const [token, setToken] = useState("");
	// console.log("token", token);

	// login api handler function
	const signinHandler = (user_name, password) => {
		axios
			.post(API_BASE_URL + "/auth/login", {
				user_name: user_name,
				password: password,
			})
			.then(function (response) {
				console.log(response.data);
				setUser(response?.data);
				localStorage.setItem("token", response?.data?.accessToken);
				setToken(localStorage.getItem("token"));
				router.push("/");
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const logout = () => {
		localStorage.removeItem("token");
	};

	return {
		signupHandlerCustomer,
		signupHandlerVendor,
		signinHandler,
		token,
		user,
		logout,
	};
};

export default AuthData;
