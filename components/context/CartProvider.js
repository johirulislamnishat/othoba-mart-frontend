import { useEffect, createContext, useReducer } from "react";
import reducers from "./Reducers";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = { cart: [] };
  const [state, dispatch] = useReducer(reducers, initialState);

  const { cart } = state;

  useEffect(() => {
    const shopping_cart = JSON.parse(localStorage.getItem("shopping_cart"));

    if (shopping_cart) {
      dispatch({ type: "ADD_CART", payload: shopping_cart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
