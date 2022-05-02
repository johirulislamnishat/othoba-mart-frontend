import { useState, useEffect } from "react";
import Router from "next/router";

const useIsAuthenticated = ({ query }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  
  useEffect(() => {
    setIsAuthenticating(true);
    if (typeof window !== undefined) {
      const user = JSON.parse(localStorage.getItem("user"));
      setIsAuthenticating(false);
      if (!user?.user_name) {
        Router.push({ pathname: "/auth/login", query: query });
      }
    } else {
      setIsAuthenticating(false)
      return false
    }
  }, []);

  return isAuthenticating;
};

export default useIsAuthenticated;
