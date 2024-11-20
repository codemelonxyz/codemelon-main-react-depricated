import React, { createContext, useContext, useState, useCallback } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const setAuthToken = useCallback((newToken) => {
    setToken(newToken);

    try {
      // Decode the token to extract user information
      const decoded = jwtDecode(newToken.token);

      setUser({
        email: decoded.email,
        exp: decoded.exp,
      });
    } catch (error) {
      console.error('Failed to decode token:', error);
      setUser(null);
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
  }, []);

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