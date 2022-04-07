import { useState } from "react";
import Link from 'next/link'
import {GoogleOutlined, FacebookFilled} from '@ant-design/icons'
// const initialUserInfo = {
//   username: "",
//   email: "",
//   passord1: "",
//   password2: "",
//   photoUrl: "",
//   consumer: "",
//   vendor: "",
// };

const Register = () => {
  const [user_name, setUser_name] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isVendor, setIsVendor] = useState(false)
  const [isCustomer, setIsCustomer] = useState(false)

  // const handleInput = (e) => {
  //   const field = e.target.name;
  //   const value = e.target.value;
  //   const newUser = { ...inputs, [e.target.name]: e.target.value };
  //   setInputs(newUser);
  // };

  const handleRegister = (e) => {
    e.preventDefault();
  };
  
  return (
    <div className="w-screen h-screen grid sm:grid-cols-2 place-content-center items-center">
      <div className="hidden sm:block">
        {/* <Image src='/images/login.jpg' width={600} heigth={700} alt='' /> */}
        <img src="/images/register.jpg" alt="" className="h-screen w-full" />
      </div>
      <div>
        <div className="mx-4 sm:mx-16 p-4 border-2 border-gray-200">
          <form className="flex flex-col gap-2 font-semibold text-sm">
            <div className="flex gap-4 border-b-gray-400">
              <p onClick={()=>setIsCustomer(true)} className="text-gray-500 cursor-pointer">
                Sign up as Customer
              </p>
              <p onClick={()=>setIsVendor(true)} className="text-gray-500 cursor-pointer">Sign up as Seller</p>
            </div>
            <div className="flex">
              <div clasName="flex flex-col gap-2">
                <label>First Name</label>
                <input onClick={()=>setIsVendor(true)}
                  placeholder="Enter first name"
                  className="p-2 mb-2 border-2 border-gray-200 "
                />
              </div>
              <div clasName="flex flex-col gap-2">
                <label>Last Name</label>
                <input onClick={()=>setIsVendor(true)}
                  placeholder="Enter last name"
                  className="p-2 mb-2 border-2 border-gray-200 "
                />
              </div>
            </div>
            <label>Email</label>
            <input onClick={()=>setIsVendor(true)}
              placeholder="Enter your email"
              className="p-2 mb-2 border-2 border-gray-200"
            />

            <label>Password</label>
            <div>
              <input onClick={()=>setIsVendor(true)}
                placeholder="Enter your password"
                className="w-full p-2 mb-2 border-2 border-gray-200"
              />
              <p className="mt-0 pt-0 text-gray-500 text-xs">
                Password must be minimum 8 characters.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="cursor-pointer" />
                <span className=" min-w-max">Remember me</span>
              </div>
              <span className="text-blue min-w-max cursor-pointer">
                Forgot Password?
              </span>
            </div>
            <button className="bg-blue py-1 mt-2 text-white">Register</button>
          </form>
          <div className="flex flex-col items-center gap-2 mt-5">
            <p className="text-center border-2 border-gray-200 cursor-pointer flex items-center justify-center gap-2 w-full py-2"><GoogleOutlined style={{ color:'green'}}/>
              Log in with Google
            </p>
            <p className="text-center border-2 border-gray-200 cursor-pointer flex items-center justify-center gap-2 w-full py-2"><FacebookFilled style={{ color:'blue'}} />
              {" "}
              Log in with Facebook
            </p>
            <p className="mt-3 text-center">
              Have an account?{" "}
              <Link href='/login'>
                <a>
              <span className="text-blue font-semibold cursor-pointer">
                Log In
              </span>
              </a>
              </Link>      
            </p>
          </div>
        </div>
        <div className="mt-10 flex gap-4 items-center justify-center">
          <span className="underline text-gray-500 cursor-pointer">
            Terms of use
          </span>
          <span className="underline text-gray-500 cursor-pointer">
            Privacy Policy
          </span>
          <span className="underline text-gray-500 cursor-pointer">
            Support
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
