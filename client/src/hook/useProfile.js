import { useState } from "react";
// context.api
import { useUserContext } from "../ContextApi/ContextProvider";
// api
import api from "../ContextApi/Api/apiCrudOperation";

export const useProfile = (initialValue) => {
  const { user, readAndWrite } = useUserContext();
  const [inputValue, setValue] = useState({ ...initialValue });
  const [appoinment, setAppointment] = useState([]);
  const [isSucess, setIsSucess] = useState({
    loading: false,
    successText: "",
    completed: false,
    error: false,
  });

  //role ways endPoint
  const urlEndPoint =
    user.role == "patient"
      ? "patients"
      : user.role == "doctor"
      ? "doctors"
      : "admin";
  // formControll later add custom hook
  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      setValue({ ...inputValue, [name]: e.target.files[0] });
    }
    setValue({ ...inputValue, [name]: value });
  };
  // profile save
  const profileCreate = async (e) => {
    e.preventDefault();
    const userData = {
      fullName: inputValue.Name,
      phone: inputValue.Phone,
      address: inputValue.Address,
      age: inputValue.Age,
      dmscId: inputValue.Dmsc,
      isCompleted: true,
    };
    try {
      setIsSucess({ ...isSucess, loading: true });
      const postData = await api.postData(urlEndPoint, userData);
      const {
        data: { fullName, address, age, phone, dmscId },
      } = postData.data;
      setIsSucess({
        ...isSucess,
        loading: false,
        successText: "sucsss",
        completed: true,
        error: false,
      });
      readAndWrite(false);
      setValue({
        Name: fullName,
        Email: user.email,
        Age: age,
        Address: address,
        Phone: phone,
        Dmsc: dmscId,
      });
    } catch (error) {
      setIsSucess({
        ...isSucess,
        loading: false,
        successText: "",
        error: true,
      });
      setValue({ ...inputValue, Email: user.email });
      console.log(error.message);
    }
  };

  // getSingel users data
  const updateHandler = async () => {
    try {
      setValue({ ...inputValue, Email: user.email });
      setIsSucess({ ...isSucess, loading: true });
      // update data
      const userData = {
        fullName: "" || inputValue.Name,
        phone: "" || inputValue.Phone,
        address: "" || inputValue.Address,
        age: "" || inputValue.Age,
        dmscId: "" || inputValue.Dmsc,
      };
      await api.patchUpdate(`${urlEndPoint}/${user.userId}`, userData);
      readAndWrite(false);
      setIsSucess({ ...isSucess, loading: false });
      setValue({ ...inputValue, Email: user.email });
    } catch (error) {
      setValue({ ...inputValue, Email: user.email });
      readAndWrite(true);
      console.log(error.message);
    }
  };
  // get data by id
  const getSingleData = async (id) => {
    try {
      const getData = await api.getOne(`${urlEndPoint}/${id}`);
      if (getData.data) {
        // setSingleData(getData.data);
        const {
          data: { fullName, address, age, phone, dmscId },
        } = getData.data;
        setValue({
          Name: fullName,
          Email: user.email,
          Age: age,
          Address: address,
          Phone: phone,
          Dmsc: dmscId,
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
    profileCreate,
    inputValue,
    updateHandler,
    isSucess,
    getSingleData,
    appoinment,
  };
};
