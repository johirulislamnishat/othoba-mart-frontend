import Link from "next/link";

const CartTotal = ({ total }) => {
  const tax = total * 0.17;
  const shipping = total * 0.01;
  const grandTotal = parseFloat(total) + parseFloat(tax) + parseFloat(shipping);

  return (
    <div className="py-3 col-span-1">
      <div className="p-4 bg-gray-200 rounded-lg">
        <table className="table-fixed w-full text-right font-semibold ">
          <thead className="">
            <tr className="min-w-max">
              <th className="text-2xl text-left font-semibold pb-3 ">
                <h3 className="w-max">Cart Total</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th className="text-left">Sub Total:</th>
              <td>{total?.toFixed(2)} USD</td>
            </tr>
            <tr>
              <th className="text-left">Tax:</th>
              <td>{tax.toFixed(2)} USD</td>
            </tr>
            <tr>
              <th className="text-left">Shipping:</th>
              <td>{shipping.toFixed(2)} USD</td>
            </tr>
            <tr className="text-sky-500 font-bold pt-5">
              <th className="text-left">Total:</th>
              <td>{grandTotal.toFixed(2)} USD</td>
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
