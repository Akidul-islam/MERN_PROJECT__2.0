import { useState } from 'react';
const useAppointment = (initialData, validate) => {
  const [appData, setAppData] = useState({ ...initialData });

  const changeHandler = (e) => {
    e.preventDefault();
    setAppData({ ...appData, [e.target.name]: e.target.value });
  };

  const appointHandler = (e) => {
    e.preventDefault();
  };

  return { appData, changeHandler, appointHandler };
};

export default useAppointment;
