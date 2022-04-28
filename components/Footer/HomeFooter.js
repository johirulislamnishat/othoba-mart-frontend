import Image from "next/image";
import Link from "next/link";
const footerMenus01 = [
  { id: "0", LinkName: "My Account", href: "#" },
  { id: "1", LinkName: "Track Your Order", href: "#" },
  { id: "2", LinkName: "Payment Methods", href: "#" },
  { id: "3", LinkName: "Shipping Guide", href: "#" },
  { id: "4", LinkName: "FAQs", href: "/faq" },
  { id: "5", LinkName: "Product Support", href: "#" },
  { id: "6", LinkName: "Policy", href: "#" },
];

const footerMenus02 = [
  { id: "0", LinkName: "Orders History", href: "dashboard" },
  { id: "1", LinkName: "Support Center", href: "support" },
  { id: "2", LinkName: "About OthobaMart", href: "about" },
  { id: "3", LinkName: "Advanced Search", href: "/" },
  { id: "4", LinkName: "Advanced Search", href: "/" },
  { id: "5", LinkName: "Advanced Search", href: "/" },
];

const footerMenus03 = [
  { id: "0", LinkName: "Advanced Search", href: "/" },
  { id: "1", LinkName: "Our Guarantees", href: "/" },
  { id: "2", LinkName: "Terms And Conditions", href: "#" },
  { id: "3", LinkName: "Privacy policy", href: "#" },
  { id: "4", LinkName: "Return Policy", href: "#" },
  { id: "5", LinkName: "Intellectual Property Claims", href: "#" },
  { id: "6", LinkName: "Site Map", href: "/ticket" },
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
  return (
    <div className="pt-24 pb-8">
      {/* subscribe box  */}
      <div style={{ backgroundColor: "#01ABEC" }}>
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
              {" "}
              <input
                type="email"
                className="bg-white h-9 md:h-11 w-full px-4 pr-20 rounded-full focus:outline-none hover:cursor-pointer"
                placeholder="Enter your email....."
              />{" "}
              <button
                type="submit"
                className="rounded-r-full absolute h-9 md:h-11 text-sm right-0 px-3 md:px-6 text-white bg-gray-700 "
              >
                Subscribe
              </button>
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
                <li className="mb-4">
                  <Link href="/" passHref>
                    <img
                      src="othoba-mart-logo-light.png"
                      alt="Othoba Mart"
                      className="w-2/3 cursor-pointer"
                    />
                  </Link>
                </li>
                <li className="mb-2">
                  <h1 className="font-medium">Address:</h1>
                  <p>
                    House # 7/B, Flat # A-1, Road # 103, Gulshan-2, Dhaka-1212
                  </p>
                </li>
                <li className="mb-2">
                  <h1 className="font-medium">Email:</h1>
                  <p>othobamart@gmail.com</p>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:pt-0 px-0 md:px-3 flex w-full  md:w-1/3">
              {/* 1st footer menu  */}
              <div className="w-1/2 md:w-full">
                <h5 className="text-xl font-bold mb-6">Account</h5>
                <ul className="list-none footer-links">
                  {footerMenus01.map((fmenu01) => (
                    <li key={fmenu01.id} className="mb-2">
                      <a
                        href={fmenu01.href}
                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                      >
                        {fmenu01.LinkName}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2nd footer menu  */}
              <div className="pl-5 md:pl-0 w-1/2 md:w-full left-align-padding">
                <h5 className="text-xl font-bold">{""}</h5>
                <ul className="list-none footer-links mt-6">
                  {footerMenus02.map((fmenu02) => (
                    <li key={fmenu02.id} className="mb-2">
                      <a
                        href={fmenu02.href}
                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                      >
                        {fmenu02.LinkName}
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
                      <a
                        href={fmenu03.href}
                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                      >
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
                      <a
                        href={fmenu04.href}
                        className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                      >
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
          <p>Othoba Mart ©2022 || Design And Developed By End Game Battalion</p>
          <div>
            <div className="flex gap-4 md:justify-end">
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
