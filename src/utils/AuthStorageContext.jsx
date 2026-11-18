import { createContext, useContext } from 'react';

export const AuthStorageContext = createContext();

export const AuthStorageContextProvider = ({ authStorage, children }) => (
  <AuthStorageContext.Provider value={authStorage}>
    {children}
  </AuthStorageContext.Provider>
);

export const useAuthStorage = () => useContext(AuthStorageContext);
