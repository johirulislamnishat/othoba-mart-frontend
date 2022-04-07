import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/Logo/othoba-mart-logo.png";
import Payment from "../../assets/Images/payment.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const footerMenus01 = [
  { id: "0", LinkName: "FAQ", href: "#" },
  { id: "1", LinkName: "Track Order", href: "#" },
  { id: "2", LinkName: "About Us", href: "#" },
  { id: "3", LinkName: "Contact Us", href: "#" },
  { id: "4", LinkName: "Support", href: "#" },
  { id: "5", LinkName: "Returns", href: "#" },
  { id: "6", LinkName: "Privacy Policy", href: "#" },
  { id: "7", LinkName: "Terms & Conditions", href: "#" },
];

const footerMenus02 = [
  { id: "0", LinkName: "Cars", href: "#" },
  { id: "1", LinkName: "Fashion", href: "#" },
  { id: "2", LinkName: "Clothing", href: "#" },
  { id: "3", LinkName: "Electronics", href: "#" },
  { id: "4", LinkName: "Furniture", href: "#" },
  { id: "5", LinkName: "Cooking", href: "#" },
  { id: "6", LinkName: "Accessories", href: "#" },
];
const footerMenus03 = [
  { id: "0", LinkName: "Daraz", href: "#" },
  { id: "1", LinkName: "Amazon", href: "#" },
  { id: "2", LinkName: "Alibaba", href: "#" },
  { id: "3", LinkName: "Pikabo", href: "#" },
  { id: "4", LinkName: "E-orange", href: "#" },
  { id: "5", LinkName: "Bongo", href: "#" },
  { id: "6", LinkName: "Ali-Express", href: "#" },
];

const HomeFooter = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <div>
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          {/* company Info  */}
          <div className="px-4 w-full md:w-1/4 xl:w-1/5">
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="#">
                  <Image src={Logo} alt="Othoba Mart" />
                </a>
              </li>
              <li className="mb-2">
                <p>
                  Online Shopping BD has never been easier. Othoba Mart is the
                  best online shopping store in Bangladesh that features 10+
                  million products at affordable prices. As Bangaldesh&aposs
                  online shopping landscape is expanding every year, online
                  shopping in dhaka, chittagong, khulna, sylhet and other big
                  cities are also gaining momentum.
                </p>
              </li>
            </ul>
          </div>

          {/* 1st footer menu  */}
          <div className="px-4 w-full md:w-1/4 xl:w-1/5">
            <h5 className="text-xl font-bold mb-6">Help</h5>
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
          <div className="px-4 w-full md:w-1/4 xl:w-1/5">
            <h5 className="text-xl font-bold mb-6">Top Categories</h5>
            <ul className="list-none footer-links">
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

          {/* 3nd footer menu  */}
          <div className="px-4 w-full md:w-1/4 xl:w-1/5">
            <h5 className="text-xl font-bold mb-6">Top Brands</h5>
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

          {/* company Info  */}
          <div className="px-4 w-full md:w-1/4 xl:w-1/5">
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="#">
                  <Image src={Payment} alt="Othoba Mart" />
                </a>
              </li>
              <li className="mb-2">
                <p>Address: House 13/A, Road# 35, Gulshan# 2, Dhaka# 1215</p>
              </li>

              <li className="mt-3">
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookRoundedIcon className="text-blue-600 text-xl md:text-3xl" />
                </a>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="mx-2 text-pink-600 text-xl md:text-3xl" />
                </a>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon className="mx-2 text-blue-600 text-xl md:text-3xl" />
                </a>
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className=" text-xl md:text-3xl text-blue-800" />
                </a>
              </li>
            </ul>
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
