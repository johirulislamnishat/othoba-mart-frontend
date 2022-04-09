import { useState } from "react";
import Link from "next/link";
import { Modal } from 'antd'
import { GoogleOutlined, FacebookFilled } from "@ant-design/icons";
import useAuth from "../../components/hooks/useAuth";

const Register = () => {
  const [user_name, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [business_name, setBusiness_name] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isVendor, setIsVendor] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { signupHandler } = useAuth();

  const handleClient = (e) => {
    if (e.target.name == "vendor") {
      setIsCustomer(false);
      setIsVendor(true);
    } else {
      setIsCustomer(true);
      setIsVendor(false);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password === password2) {
      signupHandler(
        user_name,
        email,
        password,
        isCustomer,
        isVendor,
        business_name
      );
    } else {
      setIsModalVisible(true)
    }
  };

  return (
    <div className="w-screen min-h-screen grid sm:grid-cols-2 items-center">
      <div className="hidden sm:block min-h-full min-w-full">
        {/* <Image src='/images/login.jpg' width={600} heigth={700} alt='' /> */}
        <img
          src="/images/register.jpg"
          alt=""
          className="min-h-screen min-w-full"
        />
      </div>

      <div className="min-w-full">
        <div className="mx-16 p-4 border-2 border-gray-200">
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-2 font-semibold text-sm">
            <div className="mb-2 flex gap-4">
              <label
                className={
                  isCustomer
                    ? "text-sky-500 cursor-pointer"
                    : "text-gray-500  cursor-pointer"
                }>
                {" "}
                Sign up as Customer
                <input
                  name="customer"
                  onClick={(e) => handleClient(e)}
                  className="hidden"
                />
                {isCustomer && (
                  <div className="w-10 h-0.5 rounded bg-sky-500"></div>
                )}
              </label>
              <label
                className={
                  isVendor
                    ? "text-sky-500 cursor-pointer"
                    : "text-gray-500 cursor-pointer"
                }>
                Sign up as Seller
                <input
                  name="vendor"
                  onClick={(e) => handleClient(e)}
                  className="hidden"
                />
                {isVendor && (
                  <div className="w-10 h-0.5 rounded bg-sky-500"></div>
                )}
              </label>
            </div>

            <label>User Name</label>
            <input
              onChange={(e) => setUser_name(e.target.value)}
              required={true}
              placeholder="Enter user name"
              className="p-2 mb-2 border-2 border-gray-200 "
            />

            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required={true}
              placeholder="Enter your email"
              className="p-2 mb-2 border-2 border-gray-200"
            />
            
            {isVendor && (
              <>
                <label>Phone Number</label>
                <input
                  onChange={(e) => setPhoneNum(e.target.value)}
                  required={true}
                  type="number"
                  placeholder="Enter phone number"
                  className="p-2 mb-2 border-2 border-gray-200 "
                />
                <label>Business Name </label>
                <input
                  onChange={(e) => setBusiness_name(e.target.value)}
                  required={true}
                  placeholder="Enter business name"
                  className="p-2 mb-2 border-2 border-gray-200 "
                />
              </>
            )}

            <div>
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required={true}
                placeholder="Enter your password"
                className="w-full p-2 mb-2 border-2 border-gray-200"
              />
              <label>Confirm Password</label>
              <input
                onChange={(e) => setPassword2(e.target.value)}
                type="password"
                required={true}
                placeholder="Re-type your password"
                className="w-full p-2 mb-2 border-2 border-gray-200"
              />
              <p className="mt-0 pt-0 text-gray-500 text-xs">
                *Password must be minimum 8 characters.
              </p>
              <Modal title="Password Mismatach" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Passwords do not match.</p>
                <p>Please check your passwords.</p>
              </Modal>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="cursor-pointer" />
                <span className=" min-w-max">Remember me</span>
              </div>
              <Link href='/auth/reset'>
                <a>
              <span className="text-sky-500 min-w-max cursor-pointer">
                Forgot Password?
              </span>
              </a>
              </Link>
            </div>
            <button type="submit" className="bg-sky-500 py-1 mt-2 text-white">
              Register
            </button>
          </form>

          <div className="flex flex-col items-center gap-2 mt-5">
            {isCustomer && (
              <>
                <p className="text-center border-2 border-gray-200 cursor-pointer flex items-center justify-center gap-2 w-full py-2">
                  <GoogleOutlined style={{ color: "green" }} />
                  Log in with Google
                </p>
                <p className="text-center border-2 border-gray-200 cursor-pointer flex items-center justify-center gap-2 w-full py-2">
                  <FacebookFilled style={{ color: "blue" }} />
                  Log in with Facebook
                </p>
              </>
            )}
            <p className="mt-3 text-center">
              Have an account?{" "}
              <Link href="/auth/login">
                <a>
                  <span className="text-sky-500 font-semibold cursor-pointer">
                    Log In
                  </span>
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-4 items-center justify-center">
        <Link href='/policy/termsOfService'>
            <a>
          <span className="underline text-gray-500 cursor-pointer">
            Terms of Service
          </span>
          </a>
          </Link>
          <Link href='/policy/privacyPolicy'>
            <a>
          <span className="underline text-gray-500 cursor-pointer">
            Privacy Policy
          </span>
          </a>
          </Link>
          <Link href='/policy/support'>
            <a>
          <span className="underline text-gray-500 cursor-pointer">
            Support
          </span>
          </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
