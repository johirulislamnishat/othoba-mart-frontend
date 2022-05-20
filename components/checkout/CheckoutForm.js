import Link from "next/link";
import { Modal, Button, Image } from "antd";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import useProvider from "../../hooks/useProvider";
import { decrease } from "../../context/actions/Actions";
import { increase } from "../../context/actions/Actions";
import { removeFromCart } from "../../context/actions/Actions";
import CheckoutCart from "./CheckoutCart";
import { API_BASE_URL } from "../../apiconstants";
import { useRouter } from "next/router";

const inputFields = [
  {
    label: "First name",
    title: "fName",
    type: "text",
  },
  {
    label: "Last name",
    title: "lName",
    type: "text",
  },
  {
    label: "Email address",
    title: "email",
    type: "text",
  },
  {
    label: "Phone number",
    title: "phone",
    type: "number",
  },
  {
    label: "Address",
    title: "address",
    type: "text",
  },
  {
    label: "Town / City",
    title: "city",
    type: "text",
  },
  {
    label: "State / Country",
    title: "country",
    type: "text",
  },
  {
    label: "ZIP / Postal code",
    title: "zip_code",
    type: "text",
  },
];

const CheckoutForm = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    state: {
      cart,
      user: { accessToken, _id },
    },
    dispatch,
  } = useProvider();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (prev, next) => prev + Number(next.item_price) * next.item_qty,
        0
      )
    );
  }, [cart]);

  const tax = total * 0.17;
  const shipping = total * 0.01;
  const grandTotal = parseFloat(total) + parseFloat(tax) + parseFloat(shipping);

  const { register, handleSubmit, reset } = useForm();
  const { payURL, setPayURL } = useState("");

  const onSubmit = (data) => {
    const item = {
      user_name: `${data.fName} ${data.lName}`,
      email: data.email,
      user_id: _id,
      phone: data.phone,
      address: `${data.address}, ${data.city}- ${data.zip_code}, ${data.country}.`,
      purchased_items: cart,
      total_price: total,
    };
    // console.log("order details : ", item);
    axios
      .post(API_BASE_URL + "/order/place", item, {
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // console.log(res);
        setSuccess(true);
        setIsModalVisible(true);
        reset();
      })
      .catch((err) => {
        setError(true);
        setIsModalVisible(true);
        console.log(err);
      });

    axios
      .post(API_BASE_URL + "/payment", cart)
      .then((res) => {
        // console.log(res.data.url);
        router.push(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // useEffect(() => {
  //     axios
  //         .post("http://localhost:5000/payment", cart)
  //         .then((res) => {
  //             console.log(res);
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         });
  // }, [success]);

  return (
    <>
      <div className="col-span-2 md:col-span-3 order-2 md:order-1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-semibold text-xl mt-10">Billing info</h3>
          <p className="text-xs text-gray-500">
            Please enter your billing info.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {inputFields.map((inp, i) => (
              <label key={i} className="flex flex-col font-semibold text-sm">
                {inp.label}
                <input
                  type={inp.type}
                  placeholder={inp.label}
                  className="p-1 bg-gray-100 border-2 border-gray-200 rounded-lg"
                  {...register(inp.title)}
                />
              </label>
            ))}
          </div>

          {/* {success && (
                        <Modal
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="link" onClick={handleOk}>
                                    <Link href="/" passHref>
                                        Back to Home
                                    </Link>
                                </Button>,
                                <Button
                                    type="primary"
                                    key="dashboard"
                                    onClick={handleOk}
                                >
                                    <Link href="/customer/dashboard" passHref>
                                        Go to Dashboard
                                    </Link>
                                </Button>,
                            ]}
                        >
                            <p className="text-green-500 text-lg">
                                You&apos;ve successfully placed the order.
                            </p>
                        </Modal>
                    )}
                    {error && (
                        <Modal
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Return
                                </Button>,
                            ]}
                        >
                            <p className="text-red-500 text-lg">
                                Something went wrong!
                            </p>
                            <p>
                                Please check your input fields and make sure
                                order is not empty.
                            </p>
                        </Modal>
                    )} */}
          <h3 className="font-semibold text-xl mt-12">Additional info</h3>
          <p className="text-xs text-gray-500">
            Need something else? We will make it for you!
          </p>
          <textarea className="mt-3 bg-gray-200 w-full rounded-lg" rows="4" />

          <h3 className="font-semibold text-xl mt-12">Confirmation</h3>
          <p className="text-xs text-gray-500">
            We are getting to the end. Just few clicks and your order is ready!
          </p>
          <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full">
            <input type="checkbox" />
            <label className="">
              I agree with sending an Marketing and Newsletter emails. No spam,
              promised!
            </label>
          </div>
          <div className="mt-3 bg-gray-100 border-2 border-gray-200 rounded-lg p-1 flex items-center gap-2 w-full">
            <input type="checkbox" required={true} className="cursor-pointer" />
            <label className="min-w-max">
              I agree with the <span>terms and conditions</span> and{" "}
              <span>privacy policy</span>{" "}
            </label>
          </div>
          <button
            type="submit"
            className="mt-7 py-5 px-10 bg-orange-600 text-white font-semibold border-2 border-white rounded-lg hover:bg-transparent hover:text-orange-600 hover:border-2 hover:border-orange-600"
          >
            Complete order
          </button>
          {/* <div>
            { success || error &&
            <Modal success={success} error={error} />
            }
          </div> */}
          <div className="mt-7 flex flex-col gap-2">
            <Image src="images/icons/check.png" width="32px" alt="ok" />
            <h5 className="font-semibold">All your data are safe.</h5>
            <p className="w-1/3">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </form>
      </div>
      <div className="h-max col-span-2 md:col-span-2 order-1 md:order-2 border-2 border-gray-200 rounded-lg p-4 ">
        <CheckoutCart
          cart={cart}
          dispatch={dispatch}
          decrease={decrease}
          increase={increase}
          removeFromCart={removeFromCart}
          total={total}
          tax={tax}
          shipping={shipping}
          grandTotal={grandTotal}
        />
      </div>
    </>
  );
};

export default CheckoutForm;
