import { useState } from 'react';
// context.api
import { useUserContext } from '../ContextApi/ContextProvider';
// get token and user from local stroage
// api
import api from '../ContextApi/Api/apiCrudOperation';

export const useProfile = (initialValue) => {
  const { user } = useUserContext();
  const [singleData, setSingleData] = useState();
  const [inputValue, setValue] = useState({ ...initialValue });
  const [error, setError] = useState();
  const [isSucess, setIsSucess] = useState({
    loading: false,
    id: '',
    successText: '',
    completed: false,
  });

  // endPoint
  const urlEndPoint =
    user.role == 'patient'
      ? 'patients'
      : user.role == 'doctor'
      ? 'doctors'
      : 'admin';
  // formControll later add custom hook
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValue({ ...inputValue, [name]: value });
  };
  // profile save
  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      fullName: inputValue.Name,
      phone: inputValue.Phone,
      address: inputValue.Address,
      Age: 18,
      isCompleted: true,
    };
    try {
      setIsSucess({ ...isSucess, loading: true });
      await api.postData(urlEndPoint, userData);
      setIsSucess({
        ...isSucess,
        loading: false,
        successText: 'sucsss',
        completed: true,
      });
      setValue({ ...initialValue });
    } catch (error) {
      setIsSucess({
        ...isSucess,
        loading: false,
        successText: '',
      });
      setValue({ ...inputValue, Email: user.email });
      console.log(error.message);
    }
  };

  // getSingel users data
  const updateHandler = async () => {
    const userData = {};
    const res = await api.patchUpdate(
      `${urlEndPoint}/${user.userId}`,
      userData
    );
    setValue({ ...inputValue, Email: user.email });
  };

  const getSingleData = async () => {
    try {
      const getData = await api.getOne(`${urlEndPoint}/${user.userId}`);
      if (getData.data) {
        // setSingleData(getData.data);
        const {
          data: { fullName, address, age, phone },
        } = getData.data;
        setValue({
          Name: fullName,
          Email: user.email,
          Age: age,
          Address: address,
          Phone: phone,
        });
        setIsSucess({
          ...isSucess,
          completed: true,
        });
      }
    } catch (error) {
      console.log(error.message);
      setValue({ ...inputValue, Email: user.email });
    }
  };

  return {
    changeHandler,
    submitHandler,
    inputValue,
    updateHandler,
    isSucess,
    getSingleData,
  };
};
