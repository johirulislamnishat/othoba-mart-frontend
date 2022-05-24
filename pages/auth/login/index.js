import { CloseCircleTwoTone } from "@ant-design/icons";
import { Image } from "antd";
import Link from "next/link";
import useAuth from "../../../hooks/useAuth";
import AuthHandlers from "../../../hooks/useAuthHandlers";

const Login = () => {
	const { loading } = AuthHandlers();

	const { handleLogin, setUser_name, setPassword } = useAuth();

	return (
		<div className="w-screen h-screen grid sm:grid-cols-2 items-center">
			<div className="hidden sm:block h-screen col-span-1 overflow-hidden">
				<Image
					src="/images/auth.png"
					width="50vw"
					height="100vh"
					preview={false}
					alt=""
				/>
			</div>

			<div className="min-w-full rounded-r-lg col-span-1 relative">
				<div className="absolute right-5 -top-10">
					<Link href="/" passHref>
						<CloseCircleTwoTone className="text-2xl" />
					</Link>
				</div>
				<div className="mx-4 pt-7 lg:mx-16 p-3 border-2 border-gray-200 rounded-lg flex flex-col items-center">
					<form
						onSubmit={handleLogin}
						className="w-full lg:w-3/4 flex flex-col gap-3 sm:gap-2 lg:gap-3 font-semibold text-sm"
					>
						<label>
							User Name
							<input
								onChange={(e) => setUser_name(e.target.value)}
								type="user_name"
								required={true}
								placeholder="Enter your user_name"
								className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
							/>
						</label>
						<div>
							<label>Password</label>
							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								required={true}
								placeholder="Enter your password"
								className="w-full p-2 mb-2 border-2 border-gray-200 rounded-lg"
							/>
							<p className="mt-0 pt-0 text-gray-500 text-xs">
								Password must be minimum 8 characters.
							</p>
						</div>
						<div className="flex justify-between items-center">
							<div className="flex gap-1 items-center">
								<input type="checkbox" className="cursor-pointer rounded-lg" />
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
							{loading ? "Loading..." : "Login"}
						</button>
						{/* <div className="flex items-center border-2 border-gray-200  pl-8 gap-2 rounded-lg">
              <Image
                width="20"
                height="20"
                src="/images/icons/google.png"
                alt="google logo"
              />
              <p className="  cursor-pointer py-2 m-0">Log in with Google</p>
            </div>
            <div className="flex items-center border-2 border-gray-200  gap-2 pl-8 rounded-lg">
              <Image
                width="20"
                height="20"
                src="/images/icons/facebook.png"
                alt="facebook logo"
              />
              <p className=" cursor-pointer py-2 m-0">Log in with Facebook</p>
            </div> */}
						{/* <div className=" text-center border-2 border-gray-200 flex items-center pl-8 gap-2 rounded-lg">
              <img src='/images/icons/google.png' alt='google logo' />
            <p className="  cursor-pointer py-2">
              Log in with Google
            </p>
            </div>
            <div className="text-center border-2 border-gray-200 flex items-center gap-2 pl-8 rounded-lg">
            <img src='/images/icons/facebook.png' alt='facebook logo' />
            <p className=" cursor-pointer py-2">
              Log in with Facebook
            </p>
            </div> */}
					</form>

					<div className="flex flex-col  gap-2 mt-5 mb-3">
						<p className="mt-3 text-center">
							Don&#39;t have an account?{" "}
							<Link href="/auth/register">
								<a>
									<span className="text-sky-500 font-semibold cursor-pointer">
										Register
									</span>
								</a>
							</Link>
						</p>
					</div>
				</div>

				<div className="mt-10 flex gap-4 items-center justify-center">
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

export default Login;
