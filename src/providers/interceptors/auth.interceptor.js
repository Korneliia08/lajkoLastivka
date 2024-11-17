import axios from "axios";

const apiWithAuth = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

// Add a request interceptor
apiWithAuth.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default apiWithAuth;
