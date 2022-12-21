import { createContext, useContext, useState } from 'react';
import { locatData } from '../uitilities/localStore';
const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(locatData('User'));
  const logOut = () => {
    localStorage.removeItem('User');
    localStorage.removeItem('Token');
    setUser(null);
  };

  const keepUser = (data) => setUser(data);

  return (
    <authContext.Provider value={{ user, keepUser, logOut }}>
      {children}
    </authContext.Provider>
  );
};

const useUserContext = () => useContext(authContext);

export { useUserContext, ContextProvider };
