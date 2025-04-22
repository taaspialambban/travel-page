import Navbar from '../Shares/Navbar';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { AuthContext } from '../Provider/AuthProvider';
import { useContext, useState } from 'react';


const Register = () => {
    const {CreateLogin} = useContext(AuthContext);

    // Show password state 
    const [showPassword , setShowPassword] = useState(false)

    const handleRegister = e =>{
        e.preventDefault ();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email , password);
        CreateLogin (email , password)
        .then (result =>{
            console.log('user create login' , result.user)
        }) 
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className='bg-[#E5E5E5] min-h-screen space-y-10'>
        <Navbar></Navbar>
        <div className="hero bg-[#E5E5E5]">
<div className="card border border-[#ABABAB] w-full max-w-sm shrink-0 shadow-2xl">
 <form onSubmit={handleRegister}>
 <div className="card-body">
    <h2 className='text-2xl font-bold text-black'>Register</h2>
    <fieldset className="fieldset">
      <label className="label text-black">Email</label>
      <input type="email" name='email' required className="input" placeholder="Username or Email" />
      <label className="label text-black">Password</label>
      

      {/* Show PassWord Input */}
      <p className='flex'>
      <input type={ showPassword ? 'text' : 'password'} name='password' required className="input" placeholder="Password" />

      {/* Show Password Icon */}
      <span onClick={()=> setShowPassword (!showPassword)} className='text-red-500'> <IoEyeSharp /> </span>
      </p>


      <div className='space-x-5 flex'>
       <p> <input className='w-7' type="checkbox" name=""  id="" /> <span className='text-black'>Remember Me</span></p>
        <a className="link link-hover text-black">Forgot password?</a>
        </div>
      <button className="btn bg-amber-600 border-none mt-4">Register</button>
    </fieldset>
  </div>
 </form>
 <p className='text-black'>Already have an account?  <Link to='/login' className='text-orange-400'>Login</Link> </p>
 
</div>
</div>
<div className='text-center text-black mx-auto'>
    <p>or</p>
<hr className='border mx-auto border-[#AAAAAA] w-[130px]' />
<button className='flex mx-auto font-medium mt-4 justify-around rounded-full items-center w-[261px] h-[51px] p-4 border border-[#AAAAAA]'><FaFacebookF className='text-white bg-blue-400 border w-[37px] rounded-full h-[27px] border-[#AAAAAA]' /> Continue with Facebook</button>
<button className='flex mx-auto font-medium mt-4 justify-around rounded-full items-center w-[261px] h-[51px] p-4 border border-[#AAAAAA]'><FaGoogle className='text-lime-400 border w-[37px] rounded-full h-[27px] border-[#AAAAAA]' /> Continue with Google</button>
</div>

</div>
    );
};

export default Register;