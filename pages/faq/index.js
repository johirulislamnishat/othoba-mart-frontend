// import Image from "antd";
import { Col, Image, Row } from "antd";
import React from "react";
import HomeLayout from "../../components/layouts/homeLayout";

const FAQs = () => {
  return (
    <HomeLayout title="FAQs | Othoba Mart">
      <div className="text-gray-700 faqs-page">
        <div className="container pt-4 md:pt-10 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl font-medium text-center title-font text-gray-700 mb-8 md:mb-16">
              Othoba Mart | Frequently Asked Question
            </h1>

            <Row align="middle" gutter={[8, 10]}>
              <Col xs={24} sm={12} md={12}>
                <p className="text-base text-justify p-2 lg:p-4">
                  Compile a list of FAQs drawn from data on past customer
                  service interactions, such as phone calls, emails, or social
                  media comments you have received. This valuable research will
                  give you an idea of what categories, questions, and concerns
                  to include on your FAQ page. The most common questions about
                  how our business works and what can do for you.
                </p>
                <p className="text-base text-justify p-2 lg:p-4">
                  Currently, there is no built-in way to set a minimum purchase
                  quantity for a specific product. However, to add a minimum or
                  maximum order total, go to the Store Control Panel, click
                  Settings, and then click Cart & Checkout. Set the minimum or
                  maximum allowed order subtotal. If it is crucial to set a
                  limit on a specific product, you can add the Purchase Quantity
                  app in the Store Control Panel.
                </p>
              </Col>
              <Col xs={24} sm={12} md={12}>
                <div className="w-full h-2/3 md:h-full lg:h-2/3 p-4 lg:p-8">
                  <Image
                    preview={false}
                    src="faqs.png"
                    alt="Frequently Asked Question"
                    title="Frequently Asked Question"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div className="flex flex-wrap w-full sm:mx-auto sm:mb-2 ">
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
                  How do you activate the Special Offer store?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      On any site without a store, in the left panel, click
                      eCommerce and click Add to site on the free special offer
                      store plan.
                    </li>{" "}
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  Why are invoices and order confirmation emails in a different
                  language?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      If the customer{"'"}s browser is using the same language
                      as the Store, they will receive emails in that language.
                    </li>{" "}
                    <li>
                      However, the store owner will only see the invoices and
                      email confirmations in the language the store dashboard is
                      set to, which is the same language as the customer{"'"}s
                      dashboard.
                    </li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  How many categories and subcategories can I display in my
                  store?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      Up to a total of 100 categories and subcategories may be
                      displayed in your store.
                    </li>{" "}
                    <li>
                      For example, if you have 10 categories and each of those
                      10 contains 50 subcategories, only 2 categories will be
                      displayed with 50 subcategories in each.
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
                  How do I set a minimum purchase quantity for a specific
                  product?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      Currently, there is no built-in way to set a minimum
                      purchase quantity for a specific product.
                    </li>{" "}
                    <li>
                      However, to add a minimum or maximum order total, go to
                      the Store Control Panel, click Settings, and then click
                      Cart & Checkout.
                    </li>
                    <li>
                      Set the minimum or maximum allowed order subtotal. If it
                      is crucial to set a limit on a specific product, you can
                      add the Purchase Quantity app in the Store Control Panel.
                    </li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  The wrong products categories are displaying in the store.
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      To update the product categories, remove the store
                      navigation, republish your site, and revert to a site
                      backup that includes the navigation.
                    </li>{" "}
                    <li>
                      Republish the site. The product categories will update.
                    </li>
                  </ul>
                </div>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-3 faq-header px-4">
                  How do I limit the number of times an e-good to download link
                  can be used?
                </summary>

                <div className="my-3 pl-5">
                  <ul className="list-disc">
                    <li>
                      To limit the number of times an e-good or download link is
                      used, in the left panel, click eCommerce, and then click
                      Manage Store. Click General, and then click Cart &
                      Checkout.
                    </li>{" "}
                    <li>
                      Scroll to the E-goods section. For more information, see
                      E-Goods or Digital Downloads.
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
