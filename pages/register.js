import {useState} from 'react'

const initialUserInfo = {
    username:'',
    email:'',
    passord1:'',
    password2:'',
    photoUrl:'',
    consumer:'',
    vendor:''
}

const Register = () => {
    const [inputs, setInputs] = useState(initialUserInfo)

const handleInput = e => {
    const field = e.target.name
    const value = e.target.value
    const newUser = {...inputs, [e.target.name]:e.target.value}
 setInputs(newUser)
}
    
    const handleRegister = e => {
        e.preventDefault()

       
    }
console.log(inputs)
    return(
        <div className='grid grid-cols-2'>
            <div>

                </div>
            <form onSubmit={handleRegister} className='flex flex-col gap-5 align-center justify-center font-semibold'>
                <h3 className='text-3xl text-indigo-500 ml-2 mb-3'>Register</h3>
                <input name='username' placeholder='Enter your name' className='p-2'  onChange={handleInput} />
                <input name='email' placeholder='Enter your email' className='p-2'  onChange={handleInput} />
                <input name='password1' placeholder='Enter your password' className='p-2'  onChange={handleInput} />
                <input name='password2' placeholder='Enter your password again' className='p-2'  onChange={handleInput} />
                <input name='photoUrl' placeholder='Enter your photoUrl' className='p-2' onChange={handleInput}  />
                <select className='cursor-pointer'>
                    <option value='consumer'>Consumer</option>
                    <option value='vendor'>Vendor</option>
                </select>
                <button className='px-10 py-2 mt-7 bg-red-500 text-white text-2xl'>Register</button>
            </form>
        </div>
    )
}

export default Register