import React, { useEffect, useState } from 'react';
import authService from '../appwrite/authService';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function Profile() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await authService.getCurrentUser();
                if (!user) {
                    throw new Error("No user found");
                }
                setUserData(user);
            } catch (err) {
                console.error("Error:", err);
                setError(err);
            }
        };

        fetchUser();
    }, [navigate]);

    useEffect(() => {
        if (error) {
            navigate('/login');
        }
    }, [error, navigate]);

    if (!userData && !error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
                <Loader />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md">
                <h1 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Your Profile
                </h1>

                <div className="mb-4">
                    <span className="font-semibold">ID:</span> {userData.$id}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Name:</span> {userData.name}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Email:</span> {userData.email}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Email Verified:</span> {userData.emailVerification ? "Yes" : "No"}
                </div>
            </div>
        </div>
    );
}

export default Profile;
