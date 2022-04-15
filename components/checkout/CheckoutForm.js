import { useForm } from 'react-hook-form'

const inputFields = [
    {
      title: "First name",
      type: "text",
    },
    {
      title: "Last name",
      type: "text",
    },
    {
      title: "Email address",
      type: "text",
    },
    {
      title: "Phone number",
      type: "number",
    },
    {
      title: "Address",
      type: "text",
    },
    {
      title: "Town / City",
      type: "text",
    },
    {
      title: "State / Country",
      type: "text",
    },
    {
      title: "ZIP / Postal code",
      type: "text",
    },
  ];

const CheckoutForm = () => {
  const { register, handleSubmit, reset} = useForm()
  const onSubmit = data => console.log(data)
    return(
            <form onSubmit={handleSubmit(onSubmit)} >
              <h3 className="font-semibold text-xl mt-10">Billing info</h3>
              <p className="text-xs text-gray-500">
                Please enter your billing info.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {inputFields.map((inp, i) => (
                  <label
                    key={i}
                    className="flex flex-col font-semibold text-sm">
                    {inp.title}
                    <input
                      type={inp.type}
                      placeholder={inp.title}
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                      {...register(inp.title, {required: true})}
                    />
                  </label>
                ))}
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full sm:w-1/3">
                <input type="checkbox" />
                <label className="min-w-max">Ship to a different address</label>
              </div>

              <h3 className="font-semibold text-xl mt-12">Shipping method</h3>
              <p className="text-xs text-gray-500">
                Please enter your shipping method.
              </p>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label>FedEx</label>
                </div>
                <div className="flex gap-2">
                  <p className="text-green-500">+32 USD</p>
                  <p>Additional price</p>
                </div>
                <div className="font-bold flex">
                  <img src="/images/icons/fedex.png" alt="" />
                </div>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label>DHL</label>
                </div>
                <div className="flex gap-2">
                  <p className="text-green-500">+17 USD</p>
                  <p>Additional price</p>
                </div>
                <img src="/images/icons/dhl.png" alt="dhl logo" />
              </div>

              {/* <h3 className="font-semibold text-xl mt-12">Payment method</h3>
              <p className="text-xs text-gray-500">
                Please enter your payment method.
              </p>
              <div className="p-2 border-2 border-gray-200 rounded-lg">
                <div className="m rounded-lg p-1 flex items-center gap-2">
                  <div className="w-full flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        className="border-2 border-green-500 rounded-full"
                      />
                      <label>Credit card</label>
                    </div>
                    <img src="images/icons/visa.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="flex flex-col font-semibold text-sm">
                    Card number
                    <input
                      type="number"
                      placeholder="Card number"
                      className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                    />
                  </label>
                  <div className="grid grid-cols-4 gap-4">
                    <label className="col-span-2 flex flex-col font-semibold text-sm">
                      Card holder
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                      />
                    </label>
                    <label className="col-span-1 flex flex-col font-semibold text-sm">
                      Expiration
                      <input
                        type="date"
                        placeholder=""
                        className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                      />
                    </label>
                    <label className="col-span-1 flex flex-col font-semibold text-sm">
                      CVC
                      <input
                        type="number"
                        placeholder="CVC"
                        className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label>Paypal</label>
                </div>

                <div className="font-bold flex">
                  <img src="/images/icons/paypal.png" alt="" />
                </div>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center justify-between gap-2">
                <div className="flex gap-2">
                  <input type="radio" />
                  <label>Bitcoin</label>
                </div>

                <img src="/images/icons/bitcoin.png" alt="dhl logo" />
              </div> */}

              <h3 className="font-semibold text-xl mt-12">Additional info</h3>
              <p className="text-xs text-gray-500">
                Need something else? We will make it for you!
              </p>
              <textarea
                className="mt-3 bg-gray-200 w-full rounded-lg"
                rows="4"
              />

              <h3 className="font-semibold text-xl mt-12">Confirmation</h3>
              <p className="text-xs text-gray-500">
                We are getting to the end. Just few clicks and your order is
                ready!
              </p>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full">
                <input type="checkbox" />
                <label className="">
                  I agree with sending an Marketing and Newsletter emails. No
                  spam, promised!
                </label>
              </div>
              <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full">
                <input type="checkbox"  />
                <label className="min-w-max">
                  I agree with the <span>terms and conditions</span> and{" "}
                  <span>privacy policy</span>{" "}
                </label>
              </div>
              <button
                type="submit"
                className="mt-7 py-5 px-10 bg-orange-600 text-white font-semibold border-2 border-white rounded-lg hover:bg-transparent hover:text-orange-600 hover:border-2 hover:border-orange-600">
                Complete order
              </button>
              <div className="mt-7 flex flex-col gap-2">
                <img src="images/icons/check.png" width="32px" alt="ok" />
                <h5 className="font-semibold">All your data are safe.</h5>
                <p className="w-1/3">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </form>
    )
}

export default CheckoutForm