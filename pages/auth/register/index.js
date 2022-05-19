import { Image, Modal } from "antd";
import { CloseCircleTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useProvider from "../../../hooks/useProvider";
import AuthHandlers from "../../../hooks/useAuthHandlers";

const Register = () => {
    const [user_name, setUser_name] = useState("");
    const [email, setEmail] = useState("");
    const [shop_name, setShop_name] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [isVendor, setIsVendor] = useState(false);
    const [isCustomer, setIsCustomer] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isTerms, setIsTerms] = useState(false);
    const [isNext, setIsNext] = useState(false);

    const { dispatch } = useProvider();
    const router = useRouter();

    const {
        loading,
        message,
        setMessage,
        signupHandlerCustomer,
        signupHandlerVendor,
        signinHandler,
    } = AuthHandlers();

    const handleClient = (e) => {
        if (e.target.name === "vendor") {
            setIsCustomer(false);
            setIsVendor(true);
            setIsTerms(true);
        } else {
            setIsCustomer(true);
            setIsVendor(false);
        }
    };

    const handleOk = () => {
        setIsModalVisible(false);
        console.log(message);
        if (message === "Vendor added successfully!") {
            signinHandler(user_name, password, dispatch, true);
            setMessage("");
            router.push("/dashboard/vendor/profile");
        } else {
            setMessage("");
            router.push("/");
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setMessage("");
    };

    const handleNext = () => {
        setIsTerms(false);
        setIsNext(false);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!isVendor && password === password2) {
            signupHandlerCustomer(user_name, email, password);
        } else if (isVendor && password === password2) {
            signupHandlerVendor(
                user_name,
                email,
                password,
                shop_name,
                dispatch
            );
            // signinHandler(user_name, password, dispatch);
        } else {
            setIsModalVisible(true);
        }
    };

    return (
        <div className="w-screen h-screen grid sm:grid-cols-2 overflow-hidden">
            <div className="hidden sm:block h-screen overflow-hidden">
                <Image
                    preview={false}
                    src="/images/auth.png"
                    width="100%"
                    height="100%"
                    alt=""
                    layout="responsive"
                    sizes="100vw"
                />
            </div>

            <div className="relative min-w-full rounded-r-lg mt-3">
                <div className="absolute right-5 top-5">
                    <Link href="/" passHref>
                        <CloseCircleTwoTone className="text-2xl" />
                    </Link>
                </div>
                {isTerms && (
                    <div className="absolute z-10 bg-white h-full mx-2 lg:mx-16 p-3 border-2 border-gray-200 rounded-lg flex flex-col items-center">
                        <h3>Required Inforamtion</h3>
                        <h3>
                            APPLICATION FORM FOR CERTIFICATION OF E-COMMERCE
                            WEBSITE
                        </h3>
                        <p className="text-xs lg:w-3/4">
                            Note: If there is insufficient space in the
                            application form for the required information, the
                            information is to be given in a separate annexure.
                            <br />
                        </p>
                        <div className="flex flex-col">
                            <p>1. (i) Name of applicant:</p>
                            <p>(ii) Place of incorporation:</p>
                            <p>(iii) Number of incorporation:</p>
                            <p>(iv) Address of principal place of business:</p>
                            <p>(v) Nature of business:</p>
                            <p>(vi) Income Tax file reference number:</p>
                            <p>(vii) Name of contact person:</p>
                            <p>(viii) Telephone:</p>
                            <p>(ix) Fax or email:</p>
                            <p>2. (i) URL/address of website:</p>
                            <p>
                                (ii) Name of web hosting company (if not hosted
                                by applicant):
                            </p>
                            <button
                                className="bg-sky-500 py-2 my-5 text-white font-semibold rounded-lg"
                                onClick={() => setIsNext(true)}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {isNext && (
                    <div className="absolute z-10 bg-white h-full mx-2 lg:mx-16 p-3 py-5 lg:p-10 border-2 border-gray-200 rounded-lg flex flex-col items-center">
                        <div className="flex flex-col text-sm">
                            <p>
                                (iii) Type of server software used for
                                processing commercial transactions:
                            </p>
                            <p>
                                (iv) List of functionalities of server software:
                            </p>

                            <p>
                                (v) Method/s of payment and collection used for
                                commercial transactions:
                            </p>
                            <p>(vi) Type of security capabilities used:</p>
                            <p>
                                3. (i) Process flow of the entire commercial
                                transaction from the time customer browse the
                                Applicant’s web site for product information to
                                the placement of order and delivery of the goods
                                or services.
                            </p>
                            <p>
                                4. Declaration (if the Applicant is not an
                                individual, the declaration must be signed by
                                two directors/partners or one director/partner
                                and one secretary).
                            </p>
                            <p>
                                (i) I hereby certify and declare that all the
                                particulars furnished in this form are true and
                                correct. Signature: Name: Designation: Company
                                seal: Date:
                            </p>
                            <p>
                                (ii) I hereby certify and declare that all the
                                particulars furnished in this form are true and
                                correct. Signature: Name: Designation: Company
                                seal: Date
                            </p>
                            <button
                                className="bg-sky-500 py-2 my-5 text-white font-semibold rounded-lg"
                                onClick={handleNext}
                            >
                                I Agree
                            </button>
                        </div>
                    </div>
                )}
                <div className="mx-4 lg:mx-16 p-3 border-2 border-gray-200 rounded-lg flex flex-col items-center">
                    <form
                        onSubmit={handleRegister}
                        className="w-full lg:w-3/4 flex flex-col gap-4 sm:gap-2 lg:gap-2 font-semibold text-sm"
                    >
                        <div className="mb-2 flex gap-4">
                            <label
                                className={
                                    isCustomer
                                        ? "text-sky-500 cursor-pointer"
                                        : "text-gray-500  cursor-pointer"
                                }
                            >
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
                                }
                            >
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
                                        onChange={(e) =>
                                            setShop_name(e.target.value)
                                        }
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
                                className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
                            />
                        </label>
                        <label>
                            Confirm Password
                            <input
                                onChange={(e) => setPassword2(e.target.value)}
                                type="password"
                                required={true}
                                placeholder="Re-type your password"
                                className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
                            />
                            <p className="mt-0 pt-0 text-gray-500 text-xs">
                                *Password must be minimum 8 characters.
                            </p>
                            {!message && (
                                <Modal
                                    title="*Warning"
                                    visible={isModalVisible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                >
                                    <p className="text-yellow-500 text-2xl">
                                        Passwords do not match.
                                    </p>
                                    <p className="text-xl">
                                        Please check your passwords.
                                    </p>
                                </Modal>
                            )}
                        </label>

                        <div className="flex justify-between items-center">
                            <div className="flex gap-1 items-center">
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                />
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
                            className={
                                loading
                                    ? "bg-sky-500 py-2 my-3 text-white font-semibold rounded-lg cursor-wait"
                                    : "bg-sky-500 py-2 my-3 text-white font-semibold rounded-lg "
                            }
                            type="submit"
                        >
                            {loading ? "loading..." : "Register"}
                        </button>
                        {message && (
                            <Modal
                                title="Suceesfull"
                                visible={() => setIsModalVisible(true)}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            >
                                <p className="text-green-500 text-2xl">
                                    Congratualtion! <br />
                                    You have registered successfully.
                                </p>
                                <p className="text-xl">
                                    {message == "Vendor added successfully!"
                                        ? "Please go to profile settings page."
                                        : "Please got to login page."}
                                </p>
                            </Modal>
                        )}

                        {isCustomer && (
                            <>
                                {/* <div className="flex items-center border-2 border-gray-200  pl-8 gap-2 rounded-lg">
									<Image
									    width='20'
										height='20'
										src="/images/icons/google.png"
										alt="google logo"
									/>
									<p className="  cursor-pointer py-2 m-0">
										Log in with Google
									</p>
								</div>
								<div className="flex items-center border-2 border-gray-200  gap-2 pl-8 rounded-lg">
									<Image
										width='20'
										height='20'
										src="/images/icons/facebook.png"
										alt="facebook logo"
									/>
									<p className=" cursor-pointer py-2 m-0">
										Log in with Facebook
									</p>
								</div> */}
                            </>
                        )}
                    </form>

                    <div className="flex flex-col  gap-2 mt-3">
                        <p className="text-center m-0">
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
                <div className="mt-4 flex gap-4 items-center justify-center">
                    <Link href="/terms">
                        <a>
                            <span className="underline text-gray-500 cursor-pointer">
                                Terms of Service
                            </span>
                        </a>
                    </Link>
                    <Link href="/policy">
                        <a>
                            <span className="underline text-gray-500 cursor-pointer">
                                Privacy Policy
                            </span>
                        </a>
                    </Link>
                    <Link href="/support">
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
