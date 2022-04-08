import { useState } from "react";
import Link from 'next/link'
import {GoogleOutlined, FacebookFilled} from '@ant-design/icons'
import axios from 'axios'
import useAuth from "../../components/hooks/useAuth";

const Register = () => {
  const [user_name, setUser_name] = useState('')
  const [email, setEmail] = useState('')
  const [business_name, setBusiness_name] = useState('')
  const [password, setPassword] = useState('')
  const [isVendor, setIsVendor] = useState(false)
  const [isCustomer, setIsCustomer] = useState(true)

  const { signupHandler } = useAuth()

const handleCustomer = e => {
if(e.target.name == 'vendor') {
  setIsCustomer(false)
  setIsVendor(true)
} else{
  setIsCustomer(true)
  setIsVendor(false)
}
}
console.log(user_name, email, password, isCustomer, isVendor, business_name)
  // calling API after data input
   // useEffect(() => {
   //     signupHandler(user_name, email, password);
   // }, [user_name, email, password]);

  const handleRegister = async(e) => {
    e.preventDefault();
    
    signupHandler(user_name, email, password, isCustomer, isVendor, business_name)
  };
  
  return (
    <div className="w-screen h-screen grid sm:grid-cols-2 items-center">
      <div className="hidden sm:block">
        {/* <Image src='/images/login.jpg' width={600} heigth={700} alt='' /> */}
        <img src="/images/register.jpg" alt="" className="h-screen w-full" />
      </div>
      
      <div className='min-w-full'>
        <div className="mx-16 p-4 border-2 border-gray-200">
          <form onSubmit={handleRegister} className="flex flex-col gap-2 font-semibold text-sm">
            <div className="mb-2 flex gap-4">
              <label className={isCustomer ? "text-sky-500 cursor-pointer" : "text-gray-500  cursor-pointer" }> Sign up as Customer
              <input name='customer' onClick={(e)=>handleCustomer(e)} className="hidden"
               
              />
              { isCustomer && <div className='w-10 h-0.5 rounded bg-sky-500'></div>}
              </label>
<label className={isVendor ? "text-sky-500 cursor-pointer" : "text-gray-500 cursor-pointer" }>Sign up as Seller
              <input name='vendor' onClick={(e)=>handleCustomer(e)} className="hidden" />
              { isVendor && <div className='w-10 h-0.5 rounded bg-sky-500'></div>}
</label>
            </div>
            
                <label>User Name</label>
                <input onChange={(e)=>setUser_name(e.target.value)}
                required={true}
                  placeholder="Enter user name"
                  className="p-2 mb-2 border-2 border-gray-200 "
                />
             
              
           
            <label>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type='email' required={true}
              placeholder="Enter your email"
              className="p-2 mb-2 border-2 border-gray-200"
            />
{ isVendor && <>
            <label>Business Name </label>
                <input onChange={(e)=>setBusiness_name(e.target.value)}
                required={true}
                placeholder="Enter business name"
                className="p-2 mb-2 border-2 border-gray-200 "
                />
                </>
              }
            <label>Password</label>
            <div>
              <input onChange={(e)=>setPassword(e.target.value)} type='password' required={true}
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
            <button type='submit' className="bg-sky-500 py-1 mt-2 text-white">Register</button>
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
              <Link href='/auth/login'>
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
