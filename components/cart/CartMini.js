import { useState } from "react";
import Link from 'next/link';
import {
    StarOutlined,
    StarFilled,
    HeartTwoTone,
    CloseOutlined,
    CaretDownOutlined,
  } from "@ant-design/icons";
import UseLocalDB from '../hooks/useLocalDB'

const CartMini = ({active, setActive}) => {
    const [activeOption, setActiveOption] = useState(false);
    const { cart, totalPrice } = UseLocalDB()

    return(
        <>
        {  
            active && 
            <div className='absolute z-10 top-1 w-max -right-6 bg-white shadow-lg shadow-gray-500'>
                <div className='border-gray-200 rounded-lg p-3'>
                    <div className='flex items-center justify-between'>
            <h3 className="font-semibold text-xl m-0 text-left">Shopping Cart</h3>
            <p className='flex items-center gap-1 font-semibold text-lg  m-0'><span className='text-xs text-gray-300'>close</span> <CloseOutlined className='cursor-pointer' onClick={()=>setActive(!active)} /> </p>
            </div>
            <div className="grid grid-cols-1 gap-2 divide-y-2">
              {
                cart.map(product=>(
                  <div className="mt-4 ">
                  <div className="flex gap-2">
                    <img
                      src=""
                      alt=""
                      className="bg-gray-200 w-20 h-16 rounded-lg"
                    />
                    <div className='text-left'>
                      <h4 className="font-semibold m-0">{product.title}</h4>
                      <p className="text-xs m-0">
                        <span className="text-gray-400">Farm:</span> {product.farm}
                      </p>
                      <p className="text-xs m-0">
                        <span className="text-gray-400 m-0">Freshness:</span> 1 day
                        old
                      </p>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1">
                        <HeartTwoTone
                          twoToneColor="#eb2f96"
                          className="cursor-pointer"
                        />
                        <p className="text-gray-400 text-sm m-0">Wishlist</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          src="/images/icons/compare.png"
                          alt=""
                          width="14px"
                          height="14px"
                          className="cursor-pointer"
                        />
                        <p className="text-gray-400 m-0">Compare</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <CloseOutlined className="text-red-500 cursor-pointer" />
                        <p className="text-gray-400 m-0">Remove</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='ratings-mini'>
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarOutlined />
                      </div>
                      <div>
                      <p className="min-w-max text-sky-500 text-md font-semibold m-0">
                        {product.price} USD
                      </p>
                      <p className="line-through text-sm m-0">48.56 USD</p>
                      </div>
                    </div>
                    <div className="">
                      <ul className=" relative bg-gray-100 border-2 border-gray-300 rounded-2xl min-h-max px-1">
                        <span className="text-gray-400">1pc |</span> Pcs{" "}
                        <CaretDownOutlined
                          className="cursor-pointer"
                          onClick={() => setActiveOption(!activeOption)}
                        />
                        {activeOption && (
                          <div className="absolute bg-gray-100 right-0 p-3">
                            <li className="cursor-pointer">1</li>
                            <li className="cursor-pointer">2</li>
                            <li className="cursor-pointer">3</li>
                          </div>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                ))
              }
          

              
              <div className="py-3">
                  <div className="text-left">
                    <h5 className="font-semibold font-xs m-0">Sub Total</h5>
                    <h5 className="text-sky-500 m-0 text-sky-500">
                     {totalPrice} USD
                    </h5>
                  </div>
              </div>
              <div className='py-1 flex items-center justify-between'>
                  <Link href='/categories'>
                    <a> 
                  <button className='p-2 bg-transparent font-semibold text-gray-500 rounded-lg hover:text-black' onClick={()=>setActive(!active)}>Continue shopping</button>
                  </a>
                  </Link>
                  <Link href='/cart'>
                      <a>      
                  <button className='py-2 px-4 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black' onClick={()=>setActive(!active)}>View Full Cart</button>
                  </a>
                  </Link>
              </div>
            </div>
            </div>
            </div>
        }
        </>
    )
}

export default CartMini