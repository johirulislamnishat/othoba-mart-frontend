import { useState, useEffect } from 'react'
import axios from 'axios'

import {API_BASE_URL} from '../../apiconstants'

const useOrder = (orderData) => {
  const token = localStorage.getItem('token')
  console.log(token)
    const headers = {
        'Content-Type' : 'application/json',
        'token' : `Bearer ${localStorage.getItem('token')}`
    }

  axios.post(API_BASE_URL + '/order/place', {
    user_name: orderData.user_name,
    email: orderData.email,
    phone: orderData.phone ,
    address: orderData.address,
    purchased_items: orderData.cart,
    total_price: orderData.total_price ,
    total_quantity: orderData.total_quantity 
  },
  {
      headers: headers
    })
  .then(res=>{
      console.log(res)
  })
  .then(err=>console.log(err))
}

export default useOrder