import { useState } from "react";
// context.api
import { useUserContext } from "../ContextApi/ContextProvider";
// api
import api from "../ContextApi/Api/apiCrudOperation";
import { Form } from "react-router-dom";

export const useGigs = (initialValue, URL) => {
  const [inputValue, setValue] = useState({ ...initialValue });
  const [isSucess, setIsSucess] = useState({
    loading: false,
    error: false,
  });

  // formControll later add custom hook
  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (e.target.type === "file") {
      setValue({ ...inputValue, [name]: e.target.files[0] });
    }
    setValue({ ...inputValue, [name]: value });
  };
  // profile save
  const gigCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Image", inputValue.Image);
    formData.append("title", inputValue.title);
    formData.append("category", inputValue.category);
    formData.append("price", inputValue.price);
    formData.append("details", inputValue.details);
    try {
      setIsSucess({ ...isSucess, loading: true });
      await api.postData(URL, formData);
      setIsSucess({
        ...isSucess,
        loading: false,
        error: false,
      });
      setValue({ ...initialValue });
    } catch (error) {
      setIsSucess({
        ...isSucess,
        loading: false,
        error: true,
      });
      console.log(error.message);
    }
  };

  // getSingel users data
  const updateHandler = async () => {
    try {
      setIsSucess({ ...isSucess, loading: true });
      // update data
      const updateData = {};
      await api.patchUpdate(`${urlEndPoint}/${user.userId}`, updateData);
      setIsSucess({ ...isSucess, loading: false });
      setValue({ ...inputValue });
    } catch (error) {
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
    gigCreate,
    inputValue,
    isSucess,
  };
};
