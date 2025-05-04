import React, { createContext, useContext, useState } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Get user info using the access token
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });

        const userData = {
          name: res.data.name,
          email: res.data.email,
          avatar: res.data.picture,
          token: tokenResponse.access_token,
        };

        setUser(userData);
        console.log("✅ Google login success", userData);
      } catch (err) {
        console.error("❌ Failed to fetch user info:", err);
      }
    },
    onError: (err) => {
      console.error("❌ Google Login Failed:", err);
    },
    flow: 'implicit', // remains as frontend-only auth
  });

  const logout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
