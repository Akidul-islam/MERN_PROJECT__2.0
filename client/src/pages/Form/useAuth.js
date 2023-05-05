import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../ContextApi/Api/apiCrudOperation";
import { useUserContext } from "../../ContextApi/ContextProvider";

const useAuth = (initailValue, url, validate) => {
  const { keepUser } = useUserContext();
  const [inputValue, setInputValue] = useState({ ...initailValue });
  const [error, setError] = useState("");
  const [status, setStatus] = useState({
    loading: false,
    errors: "",
    welcome: "",
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  // regiserr submit function
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
      const res = await api.authPost(url, lowCasekey);
      setStatus({ ...status, welcome: res.data.username });
      setInputValue({ ...initailValue });
      setError("");
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.message);
      navigate("/signup");
    }
  };

  // user login process
  const LoginHandler = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true });
    const lowerCaseKey = {
      email: inputValue.email,
      password: inputValue.password,
    };
    try {
      // const respones = await axios.post(url, lowerCaseKey);
      const respones = await api.authPost(url, lowerCaseKey);
      const { token, results } = respones.data;
      if (token && results) {
        localStorage.setItem("Token", JSON.stringify(token));
        localStorage.setItem("User", JSON.stringify(results));
        keepUser(results);
        setStatus({ ...status, loading: false });
        results.role == "patient" && navigate("/patientinfo");
        results.role == "doctor" && navigate("/doctorinfo");
        results.role == "admin" && navigate("/admininfo");
      }
    } catch (error) {
      localStorage.removeItem("Token");
      setStatus({ ...status, loading: false, errors: "invalid enter" });
      console.log(error.message);
      navigate("/login");
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
    status,
  };
};

export default useAuth;
