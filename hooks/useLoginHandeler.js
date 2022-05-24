import Router from "next/router";
import { useEffect, useState } from "react";
import AuthHandlers from "./useAuthHandlers";
import useProvider from "./useProvider";

const useLoginHandeler = () => {
	const [isLogin, setIsLogin] = useState(false);
	const {
		state: { user },
		dispatch,
	} = useProvider();
	const { signinHandler } = AuthHandlers();
	const [user_name, setUser_name] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		if (user.email) {
			setIsLogin(true);
		} else setIsLogin(false);
	}, [user?.email]);

	const logout = (e) => {
		e.preventDefault();
		dispatch({
			type: "AUTH",
			payload: [],
		});
		localStorage.removeItem("user");
		setIsLogin(false);
		Router.push("/");
	};

	const handleLogin = (e) => {
		e.preventDefault();
		signinHandler(user_name, password, dispatch, false);
		setIsLogin(true);
	};

	return {
		isLogin,
		setIsLogin,
		logout,
		handleLogin,
		user_name,
		setUser_name,
		password,
		setPassword,
	};
};

export default useLoginHandeler;
