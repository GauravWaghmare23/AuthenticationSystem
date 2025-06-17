import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import authService from '../appwrite/authService';
import { logout } from '../store/storeSlice';

function Header() {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();

    const handleLogout = useCallback(() => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate('/login');
        });
    }, [dispatch, navigate]);

    const itemList = [
        { name: "Signin", path: "/login", status: !authStatus },
        { name: "Signup", path: "/signup", status: !authStatus },
        { name: "Home", path: "/home", status: authStatus },
        { name: "Profile", path: "/profile", status: authStatus }
    ];

    return (
        <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg p-4 flex items-center justify-between">
            <div>
                <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    CryptoVault
                </Link>
            </div>
            <nav>
                <ul className="flex gap-6">
                    {itemList.map(item =>
                        item.status && (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className="text-gray-300 hover:text-white transition duration-300 font-medium"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    )}
                    {authStatus && (
                        <li>
                            <button
                                onClick={handleLogout}
                                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold px-4 py-2 rounded-lg shadow hover:opacity-90 transition duration-300"
                            >
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
