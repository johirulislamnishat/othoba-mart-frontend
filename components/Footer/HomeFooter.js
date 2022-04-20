import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/Logo/othoba-mart-logo.png";

const footerMenus01 = [
  { id: "0", LinkName: "My Account", href: "#" },
  { id: "1", LinkName: "Track Your Order", href: "#" },
  { id: "2", LinkName: "Payment Methods", href: "#" },
  { id: "3", LinkName: "Shipping Guide", href: "#" },
  { id: "4", LinkName: "FAQs", href: "#" },
  { id: "5", LinkName: "Product Support", href: "#" },
  { id: "6", LinkName: "Policy", href: "#" },
];

const footerMenus02 = [
  { id: "0", LinkName: "Orders History", href: "#" },
  { id: "1", LinkName: "Advanced Search", href: "#" },
  { id: "2", LinkName: "Advanced Search", href: "#" },
  { id: "3", LinkName: "Advanced Search", href: "#" },
  { id: "4", LinkName: "Advanced Search", href: "#" },
  { id: "5", LinkName: "Advanced Search", href: "#" },
];

const footerMenus03 = [
  { id: "0", LinkName: "Advanced Search", href: "#" },
  { id: "1", LinkName: "Our Guarantees", href: "#" },
  { id: "2", LinkName: "Terms And Conditions", href: "#" },
  { id: "3", LinkName: "Privacy policy", href: "#" },
  { id: "4", LinkName: "Return Policy", href: "#" },
  { id: "5", LinkName: "Intellectual Property Claims", href: "#" },
  { id: "6", LinkName: "Site Map", href: "#" },
];
const footerMenus04 = [
  { id: "0", LinkName: "Daraz Bangladesh", href: "#" },
  { id: "1", LinkName: "Amazon", href: "#" },
  { id: "2", LinkName: "Alibaba Online", href: "#" },
  { id: "3", LinkName: "Pikabo Bangladesh", href: "#" },
  { id: "4", LinkName: "Mena Bazar", href: "#" },
  { id: "5", LinkName: "Bongo Bazar", href: "#" },
  { id: "6", LinkName: "Ali-Express", href: "#" },
];

const HomeFooter = () => {
  return (
    <div className="container mx-auto pt-24 px-10">
      <div>
        <div className="block md:flex py-4">
          {/* company Info  */}
          <div className="pr-0 md:pr-3 w-full md:w-1/3">
            <ul className="list-none footer-links">
              <li className="mb-4">
                <a href="#">
                  <Image src={Logo} alt="Othoba Mart" className="w-full" />
                </a>
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

          <div className="pt-4 md:pt-0 px-0 md:px-3 flex w-full md:w-1/3">
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
            <div className="pl-5 md:pl-0 w-1/2 md:w-full">
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
      <div style={{ textAlign: "center" }}>
        Othoba Mart ©2022 || Design And Developed By End Game Battalion
      </div>
    </div>
  );
};

export default HomeFooter;
