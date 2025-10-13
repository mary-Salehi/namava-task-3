import axios from "axios";
export const API_BASE = "https://www.namava.ir/api";

const apiService = async ({ endpoint, data }) => {
  const response = await axios.post(`${API_BASE}${endpoint}`, data );

  return response;
};

export default apiService;
