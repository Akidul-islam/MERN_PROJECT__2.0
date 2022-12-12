import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = (initailValue, url, validate) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ ...initailValue });
  const [error, setError] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setError(validate(inputValue));
    const lowCasekey = {
      name: inputValue.Name,
      email: inputValue.Email,
      password: inputValue.Password,
      confirmPassword: inputValue.ConfirmPassword,
      role: inputValue.Role,
    };
    try {
      const respose = await axios.post(url, lowCasekey);
      console.log(respose);
      setInputValue({ ...initailValue });
    } catch (error) {
      console.log(error);
    }
  };

  const LoginHandler = async (e) => {
    e.preventDefault();
    const lowerCaseKey = {
      email: inputValue.email,
      password: inputValue.password,
    };
    setError(validate(inputValue));

    try {
      const respones = await axios.post(url, lowerCaseKey);
      const { token } = await respones.data;
      if (token) {
        navigate('/patient');
      }
      return respones;
    } catch (error) {
      console.log(error);
    }
  };

  const checkedFun = () => {
    setInputValue({ ...inputValue, CheckBox: !inputValue.CheckBox });
  };
  return {
    changeHandler,
    submitHandler,
    inputValue,
    checkedFun,
    error,
    LoginHandler,
  };
};

export default useAuth;
