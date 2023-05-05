import { useState, useEffect } from "react";
import API from "../ContextApi/Api/apiCrudOperation";

const useFetchData = (url, id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await API.getAll(url);
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, id]);

  return [data, isLoading, error];
};

export default useFetchData;
