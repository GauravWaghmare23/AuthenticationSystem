import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6 mt-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        JustLogo
                    </h2>
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} JustLogo. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    <a
                        href="#"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="hover:text-pink-400 transition-colors duration-300"
                    >
                        Contact
                    </a>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
