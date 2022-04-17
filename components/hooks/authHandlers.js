import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { API_BASE_URL } from "../../apiconstants";

const AuthData = () => {
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState('')
	const router = useRouter();
	
	// register api handler function
	const signupHandlerCustomer = (user_name, email, password) => {
		setLoading(true)
		axios
			.post(API_BASE_URL + "/auth/register", {
				user_name: user_name,
				email: email,
				password: password,
			})
			.then(function (response) {
				setMessage(response.data.message)
				setLoading(false)
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const signupHandlerVendor = (user_name, email, password, shop_name) => {
		setLoading(true)
		axios
			.post(API_BASE_URL + "/auth/register/vendor", {
				user_name: user_name,
				email: email,
				password: password,
				shop_name: shop_name,
			})
			.then(function (response) {
				setMessage(response.data.message)
				setLoading(false)
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
		setLoading(true)
		axios
			.post(API_BASE_URL + "/auth/login", {
				user_name: user_name,
				password: password,
			})
			.then(function (response) {
				// console.log(response);
				setUser(response?.data);
				localStorage.setItem("token", response?.data?.accessToken);
				setToken(localStorage.getItem("token"));
				setLoading(false)
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
		loading,
		message,
		setMessage,
		signupHandlerCustomer,
		signupHandlerVendor,
		signinHandler,
		token,
		user,
		logout,
	};
};

export default AuthData;
