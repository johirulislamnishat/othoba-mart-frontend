import Link from "next/link";
import React from "react";
import HomeLayout from "../../components/layouts/homeLayout";

const Support = () => {
  return (
    <HomeLayout title="Support | Othoba Mart">
      <div>
        <div className="container mx-auto support-page">
          <div className="py-12">
            <div className="px-2 xl:px-0 py-10">
              <div className="flex flex-col lg:flex-row flex-wrap">
                <div className="mt-4 lg:mt-0 lg:w-3/5">
                  <div>
                    <h1 className="w-full font-bold lg:text-3xl text-2xl lg:leading-10 leading-9">
                      Choose Your Support Tag
                    </h1>
                  </div>
                </div>
                <div className="md:w-2/5 flex mt-10 ml-2 md:ml-0 md:mt-0 md:justify-end">
                  <div>
                    <div
                      style={{ backgroundColor: "#f66a05" }}
                      className=" px-6 py-2 text-white font-medium text-base rounded-md"
                    >
                      <Link href="/ticket">
                        <a className="ticket-btn">Rise A Ticket</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 xl:px-0">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                <div
                  role="cell"
                  className="bg-gray-100 border border-gray-100 shadow rounded-md"
                >
                  <div className="support-page__single bg-white p-5 rounded-md  h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/27R6nk5/home-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      Account Overview
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12.5"
                          height={16}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <h4 className="text-md text-gray-700">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="cell"
                  className="bg-gray-100 border border-gray-100 shadow rounded-md"
                >
                  <div className="support-page__single bg-white p-5 rounded-md  h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/bdGyLYk/pricetags-1.png"
                        alt="pricetags-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      Subscription Plans
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          What is the refund policy?
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="cell"
                  className="bg-gray-100 border border-gray-100 shadow rounded-md"
                >
                  <div className="support-page__single bg-white p-5 rounded-md  h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/GT4KHvJ/card-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      Payment Options
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="cell"
                  className="bg-gray-100 border border-gray-100 shadow rounded-md"
                >
                  <div className="support-page__single bg-white p-5 rounded-md  h-full  w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/rG4r6NJ/notifications-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      Notification Settings
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="cell"
                  className="bg-gray-100 border border-gray-100 shadow rounded-md"
                >
                  <div className="support-page__single bg-white p-5 rounded-md  h-full w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/HFC1hqn/people-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      Profile Preferences
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  role="cell"
                  className="bg-gray-100 border border-gray-100 shadow rounded-md"
                >
                  <div className="support-page__single bg-white p-5 rounded-md  h-full  w-full">
                    <span>
                      <img
                        className="bg-gray-200 p-2 mb-5 rounded-full"
                        src="https://i.ibb.co/QX80fYm/lock-closed-1.png"
                        alt="home-1"
                      />
                    </span>
                    <h1 className="pb-4 text-2xl font-semibold">
                      Privacy and Cookies
                    </h1>
                    <div className="my-5">
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          First time, what do I do next?
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          Changing you profile picture and other information
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          I didnt get a confirmation email, what should I do
                          next
                        </h4>
                      </div>
                      <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.5"
                            height={16}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                        <h4 className="text-md text-gray-700 pl-4">
                          What is the refund policy if I have to cancel during
                          the month
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Support;
