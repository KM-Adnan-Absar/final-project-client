import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  // Request Interceptor
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token'); // Corrected the token retrieval
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      console.log('Request Interceptor:', config);
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Response Interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      console.log('Error in Response:', error);

      // Check if `response` exists to avoid accessing `status` of undefined
      if (error.response) {
        const status = error.response.status;

        if (status === 401 || status === 403) {
          await logOut();
          navigate('/login');
        }
      } else {
        console.error('Network or unexpected error:', error.message);
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
