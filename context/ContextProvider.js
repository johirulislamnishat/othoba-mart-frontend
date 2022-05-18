import { useEffect, createContext, useReducer } from "react";
import reducers from "./reducers/Reducers";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const initialState = { user: [], cart: [], wish: [] };

    const [state, dispatch] = useReducer(reducers, initialState);

    const { user, cart, wish } = state;

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) dispatch({ type: "AUTH", payload: user });
    }, []);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        const shopping_cart = JSON.parse(localStorage.getItem("shopping_cart"));

        if (shopping_cart)
            dispatch({ type: "ADD_CART", payload: shopping_cart });
    }, []);

    useEffect(() => {
        localStorage.setItem("shopping_cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        const wish_list = JSON.parse(localStorage.getItem("wish_list"));

        if (wish_list) dispatch({ type: "ADD_WISH", payload: wish_list });
    }, []);

    useEffect(() => {
        localStorage.setItem("wish_list", JSON.stringify(wish));
    }, [wish]);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
