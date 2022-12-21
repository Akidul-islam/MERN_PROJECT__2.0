import { createContext, useContext, useState } from 'react';
import { locatData } from '../uitilities/localStore';
const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(locatData('User'));
  const [isEdited, setIsEdited] = useState(false);

  // form editeable allow
  const readAndWrite = (edited) => {
    setIsEdited(edited);
  };
  // logout user
  const logOut = () => {
    localStorage.removeItem('User');
    localStorage.removeItem('Token');
    setUser(null);
  };

  const keepUser = (data) => setUser(data);

  return (
    <authContext.Provider
      value={{ user, isEdited, readAndWrite, keepUser, logOut }}
    >
      {children}
    </authContext.Provider>
  );
};

const useUserContext = () => useContext(authContext);

export { useUserContext, ContextProvider };
