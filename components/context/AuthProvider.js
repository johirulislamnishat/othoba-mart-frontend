import { createContext,useState,useEffect } from "react";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})
	
	useEffect(()=>{
		const data = JSON.parse(localStorage.getItem('user'))
setUser(data)
},[])


	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
