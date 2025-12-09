
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Clock, Send, BookOpen, CheckCircle } from "lucide-react";
import Navbar from "./Navbar"; // Make sure this path is correct

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_zsbx6kn",        // Your Service ID
        "template_98d74qh",        // Your Template ID
        form.current,
        "Q7ZJk2boB4GL1naVB"        // Your Public Key
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Thank you! Your message has been sent. We'll get back to you soon ♡");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccess("Oops! Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
        {/* Header */}
        <div className="mt-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold ">
            We'd Love to Hear from You{" "}
           
          </h1>
          <p className="mt-6 text-lg  max-w-2xl mx-auto leading-relaxed">
            Whether you have a question, need a book recommendation, or just want to say hello — our inbox feels warm when you write.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
              <Send className="text-pink-500" size={28} />
              Send Us a Message
            </h2>

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-3">
                <CheckCircle size={20} />
                <span>{success}</span>
              </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-6 text-black">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition resize-none"
                  placeholder="Tell us what's on your mind..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition duration-300 ${
                  loading
                    ? "bg-pink-400 cursor-not-allowed"
                    : "bg-pink-500 hover:bg-pink-600 text-white"
                }`}
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="bg-pink-50 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                <BookOpen className="text-pink-600" />
                Visit Our Little Book Nook
              </h3>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-start gap-4">
                  <Mail className="text-pink-500 mt-1" size={24} />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:hello@bookhaven.com" className="text-pink-600 hover:underline">
                      hello@bookhaven.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-pink-500 mt-1" size={24} />
                  <div>
                    <p className="font-medium">Call or Text</p>
                    <p className="text-gray-600">+1 (555) 123-BOOK</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="text-pink-500 mt-1" size={24} />
                  <div>
                    <p className="font-medium">We're Open</p>
                    <p className="text-gray-600">
                      Mon–Fri: 9 AM – 7 PM<br />
                      Sat–Sun: 10 AM – 6 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 text-center shadow-md">
              <p className="text-lg italic text-gray-700 leading-relaxed">
                “We may sit in our library and yet be in all quarters of the earth.”
              </p>
              <p className="mt-4 text-pink-700 font-medium">— John Lubbock</p>
              <p className="mt-6 text-gray-700">
                Every message feels like a new chapter beginning. Thank you for writing to us.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <Link to="/">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-700 transition duration-300 text-lg font-medium shadow-md">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;