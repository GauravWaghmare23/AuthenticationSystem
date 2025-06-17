import React from 'react';

function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">

            {/* Hero Section */}
            <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
                    Welcome to CryptoVault
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl">
                    Your trusted platform for managing digital assets securely and efficiently.
                </p>
                <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 transition duration-300 font-semibold shadow-lg">
                    Get Started
                </button>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-xl bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Secure Wallet</h2>
                        <p className="text-gray-400">Military-grade encryption to safeguard your funds at all times.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Real-Time Analytics</h2>
                        <p className="text-gray-400">Track your portfolio with live charts and insights.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-2">Decentralized Access</h2>
                        <p className="text-gray-400">Access your assets anytime, anywhere — no central authority.</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-black via-gray-900 to-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        About CryptoVault
                    </h2>
                    <p className="text-gray-400 text-lg">
                        CryptoVault is built with security, privacy, and performance in mind. Our mission is to empower individuals to take full control of their digital wealth in a decentralized world. Join thousands of users who trust us.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 px-6 bg-gradient-to-r from-blue-900 via-purple-900 to-black text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-gray-300 mb-6">Join the revolution and take charge of your crypto journey today.</p>
                <button className="px-10 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition duration-300 font-semibold shadow-lg">
                    Sign Up Now
                </button>
            </section>

        </div>
    );
}

export default Home;
