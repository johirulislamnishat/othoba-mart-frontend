import Link from "next/link";
import {
  StarOutlined,
  StarFilled,
  DeleteTwoTone
} from "@ant-design/icons";
import useProvider from "../../hooks/useProvider";
import { removeFromWish, addToCart } from "../../context/actions/Actions";


const WishFull = () => {
    const {
    state: { cart, wish },
    dispatch,
  } = useProvider();

  const handleAddToCart = (item) => {
      dispatch(addToCart(cart,item))
      dispatch(removeFromWish(wish, item._id))
  }
  return (
    <div className="border-gray-200 rounded-lg p-3">
              <h3 className="font-semibold text-xl m-0 text-left">
                Wish List
              </h3>
            <div className="grid grid-cols-1 gap-2 divide-y-2">
              {wish.length === 0 && (
                <div className="text-left text-lg font-semibold my-5">
                  Wish is empty!
                </div>
              )}
              {wish.map((p) => (
                <div className="mt-4 flex justify-between" key={p._id}>
                  <div className="flex gap-2">
                    <img
                      src={p.item_img}
                      alt=""
                      className="bg-gray-200 w-20 h-16 rounded-lg"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold m-0">{p.item_name}</h4>
                      <p className="min-w-max text-sky-500 text-md font-semibold m-0">
                          {p.item_price} USD
                        </p>
                        <div className="ratings-mini">
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarFilled />
                        <StarOutlined />
                      </div>
                    </div>
                    </div>
                  
                    
                      
                      
                    
                    
                    <div className="w-max flex items-center mx-auto">
                    <button
                      className="py-0.5 px-2 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black"  onClick={()=>handleAddToCart(p)}
                      >
                      Add To Cart
                    </button>
                    </div>
                    <div
                        >
                        <DeleteTwoTone twoToneColor="#dd1111"className=" cursor-pointer"
                        onClick={() => dispatch(removeFromWish(wish, p._id))} />
                      </div>
                      
                </div>
              ))}

              
              <div className="pt-3 flex items-center justify-between">
                <Link href="/">
                  <a>
                    <button
                      className="p-2 bg-transparent font-semibold text-gray-500 rounded-lg hover:text-black"
                      >
                      Back to home
                    </button>
                  </a>
                </Link>
                <Link href="/cart">
                  <a>
                    <button
                      className="py-2 px-4 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black"
                      >
                      View Cart
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
  )
}

export default WishFull