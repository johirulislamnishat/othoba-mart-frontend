import React from "react";
import { useForm } from "react-hook-form";
import HomeLayout from "../../components/layouts/homeLayout";
import { message, Tooltip } from "antd";
import axios from "axios";
import { API_BASE_URL } from "../../apiconstants";
import useProvider from "../../hooks/useProvider";

const Ticket = () => {
  const {
    state: {
      user: { user_name, email, accessToken },
    },
  } = useProvider();
  // console.log(user);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const ticketData = {
      user_name: user_name,
      user_email: email,
      reason: data.reason,
      support_title: data.support_title,
      chat: [
        {
          user_name: user_name,
          message: data.message,
        },
      ],
    };

    axios
      .post(`${API_BASE_URL}/support`, ticketData, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        message.success(res.data.message);
        reset();
      })
      .catch(() => message.error("Failed to submit"));
  };
  return (
    <HomeLayout title="Support Ticket | Othoba Mart">
      <div className="container px-6 grid gap-8 grid-cols-1 md:grid-cols-2  py-16 mx-auto  text-gray-700">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="w-full font-bold lg:text-3xl text-2xl lg:leading-10 leading-9">
              Get assistance with any issues you may be facing. We{"'"}re here
              to help.
            </h1>
          </div>

          {/* contact image */}
          <div className="mt-10 w-full">
            <img
              className="w-full md:w-11/12"
              src="contact.png"
              title="Rise A Ticket"
              alt="Rise A Ticket"
            />
          </div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* title  */}
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Title
              </span>
              <input
                {...register("support_title", { required: true })}
                className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter Your Query Title"
              />
            </div>

            {/* topic */}
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Choose Your Topic
              </span>
              <div>
                <select
                  {...register("reason")}
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  <option value="product">Product</option>
                  <option value="price">Price</option>
                  <option value="order">Order</option>
                  <option value="delivery">Delivery</option>
                  <option value="service">Service</option>
                </select>
              </div>
            </div>

            {/* message  */}
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea
                {...register("message", { required: true })}
                defaultValue=""
                placeholder="Enter Your Message"
                className="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                style={{ backgroundColor: "#f66a05" }}
                className="uppercase text-sm font-bold tracking-wide  text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Ticket;
