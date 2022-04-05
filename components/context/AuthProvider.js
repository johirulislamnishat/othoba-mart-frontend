import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const obj = { firstName: "Lutfor", lastName: "Rahman", role: "Developer" };
	return <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
