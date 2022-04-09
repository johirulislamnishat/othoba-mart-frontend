import Link from "next/link";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Support = () => {
  return (
    <div className="m-10 mb-10">
      <Link href="/auth/login">
        <a>
          <button className="text-sky-500 flex items-center gap-2 mb-10">
            <ArrowLeftOutlined /> Back
          </button>
        </a>
      </Link>
      <h1 className="text-2xl font-semibold mb-5">
        Support page is comming soon.
      </h1>
      <p>For any query</p>
      <p>
        Email at: <span className="font-semibold ">info@othobamart.com</span>
      </p>
    </div>
  );
};

export default Support;
