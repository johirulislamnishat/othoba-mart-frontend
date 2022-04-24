import React from "react";
import HomeLayout from "../../components/layouts/homeLayout";

const Ticket = () => {
  return (
    <HomeLayout title="Support Ticket | Othoba Mart">
      <div className="container mx-auto">
        <div className="py-12">
          <div className="px-2 xl:px-0 py-10">
            <div>
              <h1 className="w-full font-bold lg:text-3xl text-2xl lg:leading-10 leading-9">
                Get assistance with any issues you may be facing. We{"'"}re here
                to help.
              </h1>
            </div>
          </div>
          <div className="px-2 xl:px-0">Ticket</div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Ticket;
