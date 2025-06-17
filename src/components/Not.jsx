import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Not() {
    const authStatus = useSelector((state) => state.auth.status);

    return authStatus ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate-pulse">
                    Welcome to CryptoVault
                </h1>

                <p className="mt-4 text-lg text-gray-400">
                    Your assets, your control. Secure. Private. Powerful. 🔒🚀
                </p>

                <p className="mt-2 text-sm text-gray-500">
                    Explore your dashboard to manage wallets, transactions, and portfolios.
                </p>

                <div className="mt-6 flex justify-center">
                    <Link
                        to="/profile"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition-colors duration-300 font-semibold shadow-lg"
                    >
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-pulse">
                    Welcome to CryptoVault
                </h1>

                <p className="mt-4 text-lg text-gray-400">
                    Your secure gateway to the decentralized future. Manage, track, and grow your assets. 🚀
                </p>

                <p className="mt-2 text-sm text-gray-500">
                    Please <span className="text-pink-400 font-semibold">login</span> or <span className="text-pink-400 font-semibold">signup</span> to explore the platform.
                </p>

                <div className="mt-6 flex justify-center gap-4">
                    <Link
                        to="/login"
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 transition-colors duration-300 font-semibold shadow-lg"
                    >
                        Login
                    </Link>

                    <Link
                        to="/signup"
                        className="px-6 py-2 rounded-full border border-pink-500 hover:bg-pink-600 hover:text-white transition-colors duration-300 font-semibold shadow-lg"
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Not;
