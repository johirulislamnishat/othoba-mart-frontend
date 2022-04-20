import { createContext } from "react";
import AuthData from "../hooks/useAuthHandlers";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const allContext = AuthData();

	return (
		<AuthContext.Provider value={allContext}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
