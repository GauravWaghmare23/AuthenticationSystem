import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import authService from './appwrite/authService';
import { login } from './store/storeSlice';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login({ userdata: userData }));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.error("Error fetching user:", err);
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
