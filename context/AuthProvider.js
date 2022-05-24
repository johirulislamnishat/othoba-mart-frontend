import React, { createContext } from "react";
import useLoginHandeler from "../hooks/useLoginHandeler";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const allContext = useLoginHandeler();
	return (
		<AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
