import { useState } from "react";
import apiService from "../services/apiService";
import toast from "react-hot-toast";

const END_POINT = "/v2.0/accounts/login";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isSucceeded, setIsSucceeded] = useState(null)

  const sendUserData = async (userData) => {
    setError(null);
    setIsSucceeded(null);
    setIsLoading(true)

    try {
      const response = await apiService({
        endpoint: END_POINT,
        data: userData,
      });

      if (response.data.succeeded) {
        setIsSucceeded(true)
      }
      else {
        setIsSucceeded(false)
        if (response.data.error) {
        toast.error('نام کاربری یا رمز ورودی صحیح نیست')
      }
      }
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  };

  return {
    error,
    isLoading,
    sendUserData,
    isSucceeded
  }
};
