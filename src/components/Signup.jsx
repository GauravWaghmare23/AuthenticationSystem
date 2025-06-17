import React, { useState } from 'react';
import authService from '../appwrite/authService';
import { useDispatch } from 'react-redux';
import { login } from '../store/storeSlice';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Email validation helper
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignin = async (e) => {
        e.preventDefault();

        // Client-side email format validation
        if (!isValidEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        try {
            const account = await authService.createAccount({ email, password, name });

            if (account) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    dispatch(login({ userdata: userData }));
                    navigate("/home");
                }
            }
        } catch (err) {
            console.error("Signup error:", err);
            setError(err.message || "Signup failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Register to CryptoWall
                </h1>

                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}

                <p className="text-center mb-6">
                    Already registered?{" "}
                    <Link to="/login" className="text-pink-500 hover:underline">Login</Link>
                </p>

                <form onSubmit={handleSignin}>
                    <div className="mb-4">
                        <label className="block mb-1">Enter Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1">Enter Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-1">Enter Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 rounded bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-colors font-semibold"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
