import { useState } from 'react'
import { MinusCircleOutlined, PlusCircleOutlined,MinusOutlined, PlusOutlined } from '@ant-design/icons'

const CartFull = () => {
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = dir => {
        if(dir === 'dec') {
            quantity > 1 && setQuantity(quantity - 1)
            
        } else {
            setQuantity(quantity + 1)
        }
    }

    return(
        <div className='py-4 col-span-1 sm:col-span-2'>
            <table className='w-full table-fixed border-2 border-gray-200 text-center' style={{borderSpacing:'20px'}}>
                <thead className='py-2 border-2 border-b-gray-200 w-full'>
                    <tr className=''>
                <th colSpan='3'>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th >Subtotal</th>
                    </tr>
                </thead>
                <tbody className=''>
                <tr className='font-semibold'>
                    <td className=''>
                        <img src='/images/auth.png' alt='' className='inline-block w-24 h-20 rounded-lg m-2' />
                        
                    </td>
                    <td colSpan='2' className='w-full'>
                    <p className='text-left break-words'>product title fdgkg;k;k;</p>
                    </td>
                    <td>39 USD</td>
                    <td>
                        <div className='w-max flex items-center'>
                    <MinusOutlined onClick={()=>handleQuantity('dec')} className='cursor-pointer p-0.5' />
                        <input value= {quantity} 
                        readOnly
                        className='w-10 font-semibold text-center border-2 border-gray-200 rounded-lg' />
                        <PlusOutlined onClick={()=>handleQuantity('inc')} className=' p-0.5 cursor-pointer' />
                        </div>
                    </td>
                    <td>39 USD</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartFull