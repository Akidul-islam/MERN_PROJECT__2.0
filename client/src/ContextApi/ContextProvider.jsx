import { createContext, useContext, useEffect, useState } from 'react';
import { locatData } from '../uitilities/localStore';
import API from '../ContextApi/Api/apiCrudOperation'
const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(locatData('User'));
  // locatData('User')
  const [singleAdmin, setSingleAdmin] = useState({ sAdmin: [], loading: true })

  const [isEdited, setIsEdited] = useState(false);
  const ADMIN_URL = 'admin'



  // form editeable allow
  const readAndWrite = (edited) => {
    setIsEdited(edited);
  };
  // logout user
  const logOut = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    setUser(null)
  };

  const keepUser = (data) => setUser(data);

  // single Adim
  useEffect(() => {
    const findOne = async (id) => {
      if (user?.role.includes('admin')) {
        try {
          setSingleAdmin({ ...singleAdmin, loading: true })
          const { data: { admin } } = await API.getOne(`${ADMIN_URL}/${id}`)

          setSingleAdmin({ ...singleAdmin, loading: false, sAdmin: admin })
        } catch (error) {
          console.log(error.message)
          setSingleAdmin({ ...singleAdmin, loading: false })
        }
      }
    }
    findOne(user?.userId)
  }, [user?.userId])
  return (
    <authContext.Provider
      value={{ user, isEdited, readAndWrite, keepUser, logOut, singleAdmin, ADMIN_URL }}
    >
      {children}
    </authContext.Provider>
  );
};

const useUserContext = () => useContext(authContext);

export { useUserContext, ContextProvider };
