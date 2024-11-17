// Add a response interceptor
import axios from "axios";
import apiWithAuth from "./auth.interceptor.ts";

apiWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post(
          import.meta.env.VITE_PATH_TO_API + "authorization/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );
        const { token, refresh_token } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refresh_token);
        // Retry the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return axios(originalRequest);
      } catch (error) {
        // Handle refresh token error or redirect to login
      }
    }

    return Promise.reject(error);
  },
);
const api = apiWithAuth;
export default api;
