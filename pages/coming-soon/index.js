import Link from "next/link";
import React from "react";
import HomeLayout from "../../components/layouts/homeLayout";

const ComingSoon = () => {
  return (
    <>
      <HomeLayout title="Coming Soon | Othoba Mart">
        <div className="coming-soon">
          <div>
            <div className="text-center text-2xl mb-10">Coming Soon !!!!</div>
            <Link href="/" passHref>
              <button className="bg-amber-500 text-black w-full p-1 rounded-full px-5 py-2">
                Go To Home
              </button>
            </Link>
          </div>
        </div>
      </HomeLayout>
    </>
  );
};

export default ComingSoon;
