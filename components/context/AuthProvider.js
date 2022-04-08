import { createContext } from "react";
import AuthData from "../hooks/authHandlers";

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
