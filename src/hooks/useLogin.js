import { useState } from "react";
import apiService from "../services/apiService";
import { setCookie } from "../utils/handleCookie";
import { useNavigate } from "react-router-dom";

const END_POINT = "/v2.0/accounts/login";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (userData) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await apiService({
        endpoint: END_POINT,
        data: userData,
      });

      if (response.data.succeeded) {
        navigate("/");
        setCookie("token", response.data.result.token);
      } else {
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
    login,
  };
};
