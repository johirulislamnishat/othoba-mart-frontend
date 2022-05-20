import { message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { API_BASE_URL } from "../../apiconstants";
import useProvider from "../../hooks/useProvider";

const footerMenus01 = [
  { id: "1", LinkName: "Ticket", href: "/ticket" },
  { id: "2", LinkName: "Payment Methods", href: "#" },
  { id: "3", LinkName: "Shipping Guide", href: "#" },
  { id: "4", LinkName: "FAQs", href: "/faq" },
  { id: "5", LinkName: "Support", href: "/support" },
  { id: "6", LinkName: "Policy", href: "/policy" },
];

const footerMenus03 = [
  { id: "1", LinkName: "About", href: "/about" },
  { id: "2", LinkName: "Terms And Conditions", href: "/terms" },
  { id: "3", LinkName: "Privacy policy", href: "/policy" },
  { id: "4", LinkName: "Return Policy", href: "/policy" },
  { id: "5", LinkName: "Categories", href: "/categories" },
  { id: "6", LinkName: "Shop", href: "/categories" },
];
const footerMenus04 = [
  { id: "0", LinkName: "Daraz Bangladesh", href: "https://www.daraz.com.bd/" },
  { id: "1", LinkName: "Amazon", href: "https://www.amazon.com/" },
  { id: "2", LinkName: "Alibaba Online", href: "https://www.alibaba.com/" },
  { id: "3", LinkName: "Pikabo Bangladesh", href: "https://www.pickaboo.com/" },
  { id: "4", LinkName: "Mena Bazar", href: "https://www.pickaboo.com/" },
  { id: "5", LinkName: "Bongo Bazar", href: "https://aliexpress.com/" },
  { id: "6", LinkName: "Ali-Express", href: "https://aliexpress.com/" },
];

const HomeFooter = () => {
  const {
    state: {
      user: { accessToken },
    },
  } = useProvider();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`${API_BASE_URL}/subscriber`, data, {
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
    <div className="pt-24 pb-8 footer-content">
      {/* subscribe box  */}
      <div
        className="news-letter-subscription"
        style={{ backgroundColor: "#999" }}
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center py-6 px-3 md:px-6">
          <div>
            <h3 className="text-white font-medium text-lg">
              Sign Up to Newsletter
            </h3>
          </div>
          <div>
            <p className="text-white text-base">
              Get all the latest information on Events, Sales and Offers.
            </p>
            <h3 className="text-white font-medium text-lg">
              Receive $10 coupon for first shopping.
            </h3>
          </div>
          <div className="w-full py-2 rounded-full pl-0 md:pl-3">
            <div className="relative">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="bg-white h-9 md:h-11 w-full px-4 pr-20 rounded-full focus:outline-none"
                  placeholder="Enter your email....."
                />
                <button
                  type="submit"
                  className="rounded-r-full absolute h-9 md:h-11 text-sm right-0 px-3 md:px-6 text-white bg-gray-700 "
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      <div className="container mx-auto px-4 mt-9 md:mt-16">
        <div></div>
        <div>
          <div className="block md:flex py-4">
            {/* company Info  */}
            <div className="pr-0 md:pr-3 w-full  md:w-1/3">
              <ul className="list-none footer-links">
                <li className="mb-8">
                  <Link href="/" passHref>
                    <img
                      src="othoba-mart-logo-light.png"
                      alt="Othoba Mart"
                      className="w-2/3 cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <p className="pr-3 text-justify">
                    Othoba Mart is best online shopping store in Bangladesh that
                    features 10+ million products at affordable prices. As
                    bangaldesh{"'"}s online shopping landscape is expanding
                    every year, online shopping in dhaka, chittagong, khulna,
                    sylhet and other big cities are also gaining momentum.
                  </p>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:pt-0 px-0 md:px-3 flex w-full  md:w-1/3">
              {/* 1st footer menu  */}
              <div className="w-1/2 md:w-full">
                <h5 className="text-xl font-bold mb-6">Contact</h5>
                <ul className="list-none footer-links">
                  <li className="mb-1">
                    <h1 className="text-base">Email:</h1>
                    <p className="text-gray-500">othobamart@gmail.com</p>
                  </li>
                  <li className="mb-1">
                    <h1 className="text-base">Contact:</h1>
                    <p className="text-gray-500">+88010000000</p>
                  </li>
                  <li className="mb-1">
                    <h1 className="text-base">Address:</h1>
                    <p className="text-gray-500">
                      House # 7/B, Flat # A-1, <br />
                      Road # 103 Gulshan-2, <br />
                      Dhaka-1212
                    </p>
                  </li>
                </ul>
              </div>

              {/* 2nd footer menu  */}
              <div className="pl-5 md:pl-0 w-1/2 md:w-full left-align-padding">
                <h5 className="text-xl font-bold mb-6">Account</h5>
                <ul className="list-none footer-links">
                  {footerMenus01.map((fmenu01) => (
                    <li key={fmenu01.id} className="mb-2">
                      <a href={fmenu01.href} className="">
                        {fmenu01.LinkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 md:pt-0 px-0 md:px-3 flex w-full md:w-1/3">
              {/* 3rd footer menus  */}
              <div className="w-1/2 md:w-full">
                <h5 className="text-xl font-bold mb-6">About</h5>
                <ul className="list-none footer-links">
                  {footerMenus03.map((fmenu03) => (
                    <li key={fmenu03.id} className="mb-2">
                      <a href={fmenu03.href} className="">
                        {fmenu03.LinkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4th footer menus  */}
              <div className="pl-5 w-1/2 md:w-full">
                <h5 className="text-xl font-bold mb-6">Top Brands</h5>
                <ul className="list-none footer-links">
                  {footerMenus04.map((fmenu04) => (
                    <li key={fmenu04.id} className="mb-2">
                      <a href={fmenu04.href} className="">
                        {fmenu04.LinkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="py-3 h-1" />
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <p className="text-center md:text-left">
            Othoba Mart ©2022 || Design And Developed By End Game Battalion
          </p>
          <div>
            <div className="flex gap-4 justify-center md:justify-end">
              <img src="visa.svg" alt="Othoba Mart" className="w-14" />
              <img src="mastercard-4.svg" alt="Othoba Mart" className="w-14" />
              <img src="mobilepay.svg" alt="Othoba Mart" className="w-14" />
              <img
                src="google-wallet-2.svg"
                alt="Othoba Mart"
                className="w-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
