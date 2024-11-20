import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => {
    const savedToken = Cookies.get('authToken');
    return savedToken ? JSON.parse(savedToken) : null;
  });
  const [user, setUser] = useState(() => {
    const savedUser = Cookies.get('authUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const setAuthToken = useCallback((newToken) => {
    setToken(newToken);
    Cookies.set('authToken', JSON.stringify(newToken), { expires: 7, secure: true, sameSite: 'Strict' });

    try {
      // Decode the token to extract user information
      const decoded = jwtDecode(newToken.token);

      const userData = {
        email: decoded.email,
        exp: decoded.exp,
      };
      setUser(userData);
      Cookies.set('authUser', JSON.stringify(userData), { expires: 7, secure: true, sameSite: 'Strict' });
    } catch (error) {
      console.error('Failed to decode token:', error);
      setUser(null);
      Cookies.remove('authUser');
    }
  }, []);

  const isTokenExpired = useCallback(() => {
    if (user && user.exp) {
      // Check if the token is expired
      const currentTime = Date.now() / 1000;
      return user.exp < currentTime;
    }
    return true;
  }, [user]);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    Cookies.remove('authToken');
    Cookies.remove('authUser');
  }, []);

  useEffect(() => {
    if (token && isTokenExpired()) {
      logout();
    }
  }, [token, isTokenExpired, logout]);

  const value = {
    token,
    user,
    setAuthToken,
    logout,
    isAuthenticated: !!token && !isTokenExpired(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}