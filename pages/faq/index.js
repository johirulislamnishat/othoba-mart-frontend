import React from "react";
import HomeLayout from "../../components/layouts/homeLayout";

const FAQs = () => {
  return (
    <HomeLayout title="FAQs | Othoba Mart">
      <div className="text-gray-700">
        <div className="container pt-4 md:pt-10 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl font-medium text-center title-font text-gray-700 mb-4">
              Othoba Mart | Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed w-full md:w-3/4 mx-auto text-justify">
              Compile a list of FAQs drawn from data on past customer service
              interactions, such as phone calls, emails, or social media
              comments you have received. This valuable research will give you
              an idea of what categories, questions, and concerns to include on
              your FAQ page. The most common questions about how our business
              works and what can do for you.
            </p>
          </div>
          <div className="flex flex-wrap w-full md:w-4/5 sm:mx-auto sm:mb-2 ">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4 ">
                  Do you ship to my country?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      Yes. We proudly ship worldwide! 🌎 Better yet, our tracked
                      shipping is always 100% free of charge, with no minimum
                      purchase! ✅
                    </li>{" "}
                    <li>
                      We have shipped cute stationery free to over 200+
                      countries and we love adding more to the list!
                    </li>{" "}
                    <li>See the next question for detailed shipping times.</li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-3 faq-header px-4">
                  My order has been dispatched, can I track it?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      Once your order has been shipped, you{"'"}ll receive a
                      tracking number via email. Note, it can take up to 7 days
                      for shipping activity to update.
                    </li>{" "}
                    <li>
                      Have your tracking number to hand? You can track your
                      order{"'"}s status here.
                    </li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  Do you offer a guarantee? Can I return my items?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      Once your order has been shipped, you{"'"}ll receive a
                      tracking number via email. Note, it can take up to 7 days
                      for shipping activity to update.
                    </li>{" "}
                    <li>
                      Have your tracking number to hand? You can track your
                      order{"'"}s status here.
                    </li>
                    <li>
                      If you aren{"'"}t 100% satisfied with your items, or
                      received faulty goods, simply email our customer support
                      team at othobamart@gmail.com. Please include the email
                      address associated with the order and describe the issue,
                      include photos if possible. We always aim to respond in 3
                      days or less!
                    </li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  Can I change or cancel my order?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      Sure! You can cancel, or change your order within 12 hours
                      of confirmation. Please contact us with your name and
                      order number at: othobamart@gmail.com.
                    </li>{" "}
                    <li>
                      After 12 hours, your order will have been processed and we
                      won{"'"}t be able to make any changes or cancel it.
                    </li>
                  </ul>
                </div>
              </details>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  What methods of payment do you take?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      We accept ALL major credit cards, PayPal, and Apple Pay.
                    </li>{" "}
                    <li>
                      All payments are securely processed with 128-bit
                      encryption - nice! 💳
                    </li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  Do you offer promotional or affiliate opportunities?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>We do and we{"’"}d love to hear from you! 👋</li>{" "}
                    <li>Head here for more information.</li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  Do I need to pay import duties?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      Some packages may be subject to import duties depending on
                      the country of receipt.
                    </li>{" "}
                    <li>
                      Please note, due to new EU VAT rules, there may be
                      increased duty to pay on packages arriving to EU member
                      states.
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default FAQs;
