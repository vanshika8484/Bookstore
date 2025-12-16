import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Make sure you have react-toastify installed

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
     const userInfo = {
      email: data.email,
      password: data.password
    };
    
    await axios.post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success("user logged in  successfully");
         navigate('/');  // Navigate to home
             setTimeout(()=>{
              
        window.location.reload();
             },3000);
      }
     localStorage.setItem("user", JSON.stringify(res.data.user));

    })
.catch((err)=>{
  if(err.response){
console.log(err);
toast.error("invalid username or password")
  }
})
    } 

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white border border-gray-300 shadow-xl rounded-xl p-8 relative">
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute right-4 top-4 text-2xl text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center transition"
        >
          ✕
        </button>

        <h3 className="font-bold text-3xl text-center mb-8 text-black">Welcome Back</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className='text-black'>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email"
                }
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className='text-black'
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 cursor-pointer rounded-lg font-semibold text-white transition ${
              isSubmitting
                ? 'bg-pink-400 cursor-not-allowed'
                : 'bg-pink-500 hover:bg-pink-600 active:scale-95'
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate('/signup')}
            className="text-pink-600 cursor-pointer font-bold underline hover:text-pink-800"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;