import { createContext, useReducer} from 'react'
import { cartReducer } from './Reducers'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const products = [
        {_id: 1,
        title: "vegetable",
        farm: 'field',
        price: 21.2,
        quantity:0
      },
     {
        _id: 2,
        title: "vegetable-2",
        farm: 'field',
        price: 18.2,
        quantity:0
      },{ 
        _id: 3,
        title: "vegetable-3",
        farm: 'field',
        price: 16.2,
        quantity:0
      }
    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider