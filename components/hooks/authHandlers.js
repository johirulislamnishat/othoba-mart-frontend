import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { API_BASE_URL } from "../../apiconstants";

const AuthData = () => {
	const router = useRouter();
	// register api handler function
	const signupHandler = (
		user_name,
		email,
		password,
		isCustomer,
		isVendor,
		phoneNum,
		business_name
	) => {
		axios
			.post(API_BASE_URL + "/auth/register", {
				user_name: user_name,
				email: email,
				password: password,
				isCustomer: isCustomer,
				isVendor: isVendor,
				phoneNum: phoneNum,
				business_name: business_name,
			})
			.then(function (response) {
				router.push("/auth/login");
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
				// console.log(response);
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
		signupHandler,
		signinHandler,
		token,
		user,
		logout,
	};
};

export default AuthData;
