import React from "react";
import Home from "./Home/Home.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "./context/AuthProvider.jsx";
const App = () => {
  const {authUser}=useAuth()
  console.log("auth",authUser)
  return (
    <>
     <ToastContainer 
        position="top-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </>
  );
};

export default App;
