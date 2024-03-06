"use client"
import React, { createContext, useContext, useState, useEffect } from "react";

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginTime, setLoginTime] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("shalom_login") === "true";
    const storedLoginTime = localStorage.getItem("shalom_login_time");
    
    if (isLoggedIn && storedLoginTime) {
      const thirtyMinutesInMs = 30 * 60 * 1000; // 30 minutes in milliseconds
      const elapsedTime = Date.now() - parseInt(storedLoginTime, 10);
      
      if (elapsedTime < thirtyMinutesInMs) {
        setLoggedIn(true);
        setLoginTime(parseInt(storedLoginTime, 10));
      } else {
        // Logout user if login time has exceeded 30 minutes
        logout();
      }
    }
  }, []);

  const login = () => {
    setLoggedIn(true);
    setLoginTime(Date.now());
    localStorage.setItem("shalom_login", "true");
    localStorage.setItem("shalom_login_time", Date.now().toString());
  };

  const logout = () => {
    setLoggedIn(false);
    setLoginTime(null);
    localStorage.removeItem("shalom_login");
    localStorage.removeItem("shalom_login_time");
  };

  return (
    <LoginContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
