import { useEffect, useState } from "react";
import API from "../ContextApi/Api/apiCrudOperation";
const useAppointment = (initialData, url) => {
  const [inputValue, setInputValue] = useState({ ...initialData });
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const [doctorData, setDoctorData] = useState({
    loading: false,
    docData: [],
  });
  const DOCTOR__URL = "doctors";
  const APPOINTMENT__URL = `appointments`;

  const changeHandler = (e) => {
    e.preventDefault();
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const appointHandler = async (e) => {
    e.preventDefault();
    console.log("true");
    const { patientName, doctorName, departmentName, symptoms, phone, date } =
      inputValue;
    if (
      !patientName ||
      !doctorName ||
      !departmentName ||
      !symptoms ||
      !phone ||
      !date
    )
      return setError(true);
    try {
      setError(false);
      setloading(true);
      console.log("eor");
      const res = await API.postData(APPOINTMENT__URL, inputValue);
      console.log(res);
      setInputValue({ ...initialData });
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getDoctorProfile = async () => {
      try {
        setDoctorData({ ...doctorData, loading: true });
        const {
          data: { dataList },
        } = await API.getAll(DOCTOR__URL);
        setDoctorData({ ...doctorData, docData: dataList });
      } catch (error) {
        console.log(error.message);
        setDoctorData({ ...doctorData, loading: false });
      }
    };

    getDoctorProfile();
    return () => {
      return getDoctorProfile();
    };
  }, []);
  return { inputValue, loading, changeHandler, doctorData, appointHandler };
};

export default useAppointment;
