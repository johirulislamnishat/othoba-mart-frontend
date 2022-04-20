import { Image } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Reset = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const router = useRouter();
	// const { signinHandler } = useAuth();

	const handleReset = async (e) => {
		e.preventDefault();

		// signinHandler(email, password);
	};

	return (
		<div className="w-screen h-screen grid sm:grid-cols-2 items-center">
			<div className="hidden sm:block">
				{/* <Image src='/images/login.jpg' width={600} heigth={700} alt='' /> */}
				<Image
					preview={false}
					src="/images/login.jpg"
					alt=""
					className="h-screen w-full"
				/>
			</div>

			<div className="min-w-full">
				<div className="mx-4 sm:mx-16 p-4 border-2 border-gray-200">
					<h3 className="text-center text-2xl font-semi-bold mb-7">
						Reset Password
					</h3>
					<form
						onSubmit={handleReset}
						className="flex flex-col gap-2 font-semibold text-sm"
					>
						<label>Email</label>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="password"
							required={true}
							placeholder="Enter your password"
							className="w-full p-2 mb-2 border-2 border-gray-200"
						/>
						<div>
							<label>New Password</label>
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
								placeholder="Enter your password"
								className="w-full p-2 mb-2 border-2 border-gray-200"
							/>
							<p className="mt-0 pt-0 text-gray-500 text-xs">
								Password must be minimum 8 characters.
							</p>
						</div>

						<button
							className="bg-sky-500 py-1 mt-2 text-white"
							type="submit"
						>
							Reset Password
						</button>
					</form>
					<div className="flex flex-col items-center gap-2 mt-5">
						<Link href="/auth/login">
							<a>
								<span className="text-sky-300 font-semibold cursor-pointer">
									Go back to{" "}
									<span className="text-sky-500"> Login</span>{" "}
									page
								</span>
							</a>
						</Link>
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

export default Reset;
