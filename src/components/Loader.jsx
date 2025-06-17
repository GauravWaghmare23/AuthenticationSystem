import React from 'react';

function Loader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-b-transparent border-l-purple-600 border-r-pink-500 animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-gray-900"></div>
            </div>
        </div>
    );
}

export default Loader;
