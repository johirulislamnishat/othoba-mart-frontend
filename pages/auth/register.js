import { useState } from "react";
import Link from "next/link";
import { Modal } from "antd";
import useAuth from "../../components/hooks/useAuth";

const Register = () => {
  const [user_name, setUser_name] = useState("");
  const [email, setEmail] = useState("");
  const [shop_name, setShop_name] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isVendor, setIsVendor] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { signupHandlerCustomer, signupHandlerVendor } = useAuth();

  const handleClient = (e) => {
    if (e.target.name === "vendor") {
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

    if (!isVendor && password === password2) {
      signupHandlerCustomer(
        user_name,
        email,
        password,
       
      );
    } else if (isVendor && password === password2) {
      signupHandlerVendor(
        user_name,
        email,
        password,
        shop_name,
      )
    }
     else {
      setIsModalVisible(true);
    }
  };

  return (
    <div className="w-screen min-h-screen grid sm:grid-cols-2 items-center">
      <div className="hidden sm:block min-h-full min-w-full">
        {/* <Image src='/images/login.jpg' width={600} heigth={700} alt='' /> */}
        <img src="/images/auth.png" alt="" className="h-screen w-full" />
      </div>

      <div className="min-w-full rounded-r-lg mt-3">
        <div className="mx-4 sm:mx-16 p-2 border-2 border-gray-200 rounded-lg flex flex-col items-center">
          <form
            onSubmit={handleRegister}
            className="w-full sm:w-3/4 flex flex-col gap-2 font-semibold text-sm mt-5">
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
                  <div className="w-8 h-0.5 rounded bg-sky-500"></div>
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
                  <div className="w-8 h-0.5 rounded bg-sky-500"></div>
                )}
              </label>
            </div>

            <label>
              User Name
              <input
                onChange={(e) => setUser_name(e.target.value)}
                required={true}
                placeholder="Enter user name"
                className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
              />
            </label>
            <label>
              Email
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required={true}
                placeholder="Enter your email"
                className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
              />
            </label>
            {isVendor && (
              <>
                {/* <label>
                  Phone Number
                  <input
                    onChange={(e) => setPhoneNum(e.target.value)}
                    required={true}
                    type="number"
                    placeholder="Enter phone number"
                    className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
                  />
                </label> */}
                <label>
                  Shop Name
                  <input
                    onChange={(e) => setShop_name(e.target.value)}
                    required={true}
                    placeholder="Enter shop name"
                    className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
                  />
                </label>
              </>
            )}

            <label>
              Password
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required={true}
                placeholder="Enter your password"
                className="w-full p-2 mb-2 border-2 border-gray-200"
              />
            </label>
            <label>
              Confirm Password
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
              <Modal
                title="*Warning"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <p className="text-yellow-500 text-2xl">
                  Passwords do not match.
                </p>
                <p className="text-xl">Please check your passwords.</p>
              </Modal>
            </label>

            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="cursor-pointer" />
                <span className=" min-w-max">Remember me</span>
              </div>
              <Link href="/auth/reset">
                <a>
                  <span className="text-sky-500 min-w-max cursor-pointer">
                    Forgot Password?
                  </span>
                </a>
              </Link>
            </div>
            <button
              className="bg-sky-500 py-2 my-3 text-white font-semibold rounded-lg"
              type="submit">
              Register
            </button>

            {isCustomer && (
              <>
                <div className="flex items-center border-2 border-gray-200  pl-8 gap-2 rounded-lg">
                  <img src="/images/icons/google.png" alt="google logo" />
                  <p className="  cursor-pointer py-2 m-0">Log in with Google</p>
                </div>
                <div className="flex items-center border-2 border-gray-200  gap-2 pl-8 rounded-lg">
                  <img src="/images/icons/facebook.png" alt="facebook logo" />
                  <p className=" cursor-pointer py-2 m-0">Log in with Facebook</p>
                </div>
              </>
            )}
          </form>

          <div className="flex flex-col  gap-2 mt-5 mb-3">
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
          <Link href="/policy/termsOfService">
            <a>
              <span className="underline text-gray-500 cursor-pointer">
                Terms of Service
              </span>
            </a>
          </Link>
          <Link href="/policy/privacyPolicy">
            <a>
              <span className="underline text-gray-500 cursor-pointer">
                Privacy Policy
              </span>
            </a>
          </Link>
          <Link href="/policy/support">
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
