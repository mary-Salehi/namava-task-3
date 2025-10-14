import { useState } from "react";
import apiService from "../services/apiService";

const END_POINT = "/v2.0/accounts/login";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSucceeded, setIsSucceeded] = useState(null);

  const sendUserData = async (userData) => {
    setError(null);
    setIsSucceeded(null);
    setIsLoading(true);

    try {
      const response = await apiService({
        endpoint: END_POINT,
        data: userData,
      });

      if (response.data.succeeded) {
        setIsSucceeded(true);
      } else {
        setIsSucceeded(false);
        setError(response.data?.error?.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }; 

  return {
    error,
    isLoading,
    sendUserData,
    isSucceeded,
  };
};
