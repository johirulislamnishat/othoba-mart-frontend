import { createContext } from "react";
import useUser from '/components/hooks/useUser'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	
	const {user} = useUser()
console.log(user.email)

	console.log(user)
	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
