import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ name: "masoud" }}>
      {children}
    </AuthContext.Provider>
  );
};
