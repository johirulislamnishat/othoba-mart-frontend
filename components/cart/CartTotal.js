import Link from "next/link";
import useLocalDB from "../hooks/useLocalDB";

const CartTotal = () => {
  const { totalQuantity, totalPrice } = useLocalDB();
  console.log(totalQuantity, totalPrice);

  return (
    <div className="py-4 col-span-1  ">
      <div className="p-4  border-2 border-gray-200">
        <table className="table-fixed w-full text-right font-semibold ">
          <thead className="w-max">
            <tr>
              <th className="text-2xl text-left font-semibold pb-3">
                Cart Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th className="text-left">Sub Total</th>
              <td>{totalPrice}</td>
            </tr>
            <tr>
              <th className="text-left">Total Quantity</th>

              <td>{totalQuantity}</td>
            </tr>
            <tr>
              <th className="text-left">Tax</th>
              <td>5 USD</td>
            </tr>
            <tr>
              <th className="text-left">Total</th>
              <td>{totalPrice}</td>
            </tr>
          </tbody>
        </table>

        <Link href="/checkout">
          <a>
            <button className="mt-10 py-2 px-4 rounded-lg bg-orange-500 border-2 text-white hover:bg-white hover:border-2 hover:border-orange-500 hover:text-black">
              Proceed to Checkout
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
