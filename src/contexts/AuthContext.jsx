import React, { createContext, useState, useEffect, useContext } from 'react';
import AuthService from '../services/AuthService';
import { motion } from "framer-motion";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authCheckComplete, setAuthCheckComplete] = useState(false);

  const register = async (userData) => {
    try {
      setLoading(true);
      const response = await AuthService.register(userData);
      return response;
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await AuthService.login(credentials);
      
      if (!response.access || !response.refresh) {
        throw new Error("Access or Refresh token missing in response");
      }
  
      localStorage.setItem('accessToken', response.access);
      localStorage.setItem('refreshToken', response.refresh);
      await fetchAuthenticatedUser();
      return response;
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const fetchAuthenticatedUser = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      setAuthCheckComplete(true);
      setLoading(false);
      return;
    }
    
    try {
      const userData = await AuthService.getAuthenticatedUser();
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch authenticated user:', error.response?.data || error.message);
      logout();
    } finally {
      setAuthCheckComplete(true);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setUser(null);
  };

  useEffect(() => {
    fetchAuthenticatedUser();
  }, []);

  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-gray-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-white text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {authCheckComplete ? 'Authenticating...' : 'Loading...'}
        </motion.p>
        <motion.div
          className="mt-4 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      register, 
      login, 
      logout,
      authCheckComplete
    }}>
      {loading ? <LoadingSpinner /> : children}
    </AuthContext.Provider>
  );
};