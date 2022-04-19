import { createContext, useEffect, useReducer } from "react";
import authReducer from './authReducer'
import AuthData from "../hooks/authHandlers";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const allContext = AuthData();
	const [state, dispatch] = useReducer(authReducer, {
		user: []
	})

	const { user } = state

	useEffect(()=> {
		const user = JSON.parse(localStorage.getItem('user'))
		if(user) dispatch( {type: 'AUTH', payload: user} )
	},[])

	useEffect(()=> {
		localStorage.setItem('user', JSON.stringify(user))
	}, [user])

	return (
		<AuthContext.Provider value={{state,dispatch}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
