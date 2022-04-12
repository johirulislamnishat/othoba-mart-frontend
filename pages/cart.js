import {useState} from 'react'
import HomeLayout from '../components/layouts/homeLayout'
import CartFull from '../components/cart/CartFull'
import CartTotal from '../components/cart/CartTotal'

const Cart = () => {
    return(
        <HomeLayout title='Othoba Mart | Cart' >
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <CartFull />
            <CartTotal />
        </div>
        </HomeLayout>
    )
}

export default Cart