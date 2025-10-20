import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../componenets/Navbar";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <div className="flex justify-center items-center pt-15">
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-md shadow-sm p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>

                    {/* Username or Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1 text-sm">
                            Email
                        </label>
                        <input
                            type="text"
                            className="w-full border-b border-gray-300 focus:border-primary outline-none py-2"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            className="w-full border-b border-gray-300 focus:border-primary  outline-none py-2"
                        />
                    </div>

                    {/* Remember me + Forgot Password */}
                    <div className="flex justify-between items-center mb-6">
                        <label className="flex items-center text-sm text-gray-700">
                            <input type="checkbox" className="mr-2" />
                            Remember Me
                        </label>
                        <a
                            href="#"
                            className="text-sm text-primary  hover:underline font-medium"
                        >
                            Forgot Password
                        </a>
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-primary  text-black py-2 rounded-sm font-medium hover:bg-orange-400 transition">
                        Login
                    </button>

                    {/* Create account */}
                    <p className="text-center text-sm text-gray-700 mt-4">
                        Don’t have an account?{" "}
                        <Link to={"/signup"} className="text-primary  hover:underline font-medium">
                            Create an account
                        </Link>
                    </p>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-1 h-px bg-gray-300"></div>
                        <p className="mx-2 text-sm text-gray-500">Or</p>
                        <div className="flex-1 h-px bg-gray-300"></div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-3">
                        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition">
                            <FaFacebookF className="text-blue-600 text-lg" />
                            <span className="text-sm font-medium text-gray-700">
                                Continue with Facebook
                            </span>
                        </button>

                        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-full py-2 hover:bg-gray-100 transition">
                            <FcGoogle className="text-lg" />
                            <span className="text-sm font-medium text-gray-700">
                                Continue with Google
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
