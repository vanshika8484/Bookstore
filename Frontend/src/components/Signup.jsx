import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify'; // Make sure you have react-toastify installed


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async(data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    };
    await axios.post("https://bookstore-backend-inlc.onrender.com/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("User Created successfully!");
        localStorage.setItem("user",JSON.stringify(res.data.user))
        navigate("/")
        setTimeout(()=>{
              
        window.location.reload();
             },3000);
      
      }
    }).catch((err)=>{
      console.log(err);
toast.error(err)})  
  };

  const switchToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white border border-gray-300 shadow-lg rounded-xl p-8 relative">
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute right-4 top-4 btn btn-sm btn-circle btn-ghost text-gray-500 hover:bg-gray-200"
        >
          ✕
        </button>

        <h3 className="font-bold text-2xl text-center mb-6 text-black">Create Account</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className='text-black'>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("fullname", { 
                required: "Full name is required",
                minLength: { value: 3, message: "Name must be at least 3 characters" }
              })}
            />
            {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname.message}</p>}
          </div>

          <div className='text-black'>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className='text-black'>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit button MUST be inside the form */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              type="submit"  // ← Critical: type="submit"
              className="w-full cursor-pointer bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-200 font-medium"
            >
              Signup
            </button>

            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                type="button" // prevent form submission
                onClick={switchToLogin}
                className="text-blue-600 underline font-medium hover:text-blue-800 cursor-pointer"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;