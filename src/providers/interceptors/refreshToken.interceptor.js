import axios from "axios";
import apiWithAuth from "./auth.interceptor.js";

function cleanUrl(url) {
  // Zamieniamy wszystkie '?' w parametrach na '&', ale pierwsze pozostawiamy jako '?'
  const cleanedParams = url.replaceAll(/\?/g, "&").replace("&", "?");
  return cleanedParams;
}

// Funkcja do dodania parametru `random` do adresu URL
const addRandomParamToUrl = (url) => {
  const randomValue = `random=${new Date().getTime()}`;
  if (url.includes("?")) {
    return url.endsWith("?") || url.endsWith("&")
      ? url + randomValue
      : url + "&" + randomValue;
  } else {
    return url + "?" + randomValue;
  }
};

// Dodanie interceptorów odpowiedzi
apiWithAuth.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Obsługa błędu 401: odświeżenie tokenu
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        const response = await axios.get(
          import.meta.env.VITE_APP_API + "/authorization/refresh",
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );
        const { token, refresh_token } = response.data;

        localStorage.setItem("token", token);
        localStorage.setItem("refresh_token", refresh_token);

        // Dodanie nowego tokenu do oryginalnego żądania
        originalRequest.headers.Authorization = `Bearer ${token}`;

        return axios(originalRequest);
      } catch (error) {
        console.log("refresh not authorizet");
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        // Obsługa błędów przy odświeżaniu tokenu
        // Można tutaj dodać przekierowanie do logowania, jeśli to konieczne
      }
    }

    return Promise.reject(error);
  },
);

apiWithAuth.interceptors.request.use((config) => {
  config.url = cleanUrl(config.url);
  return config;
});

const api = apiWithAuth;
export default api;
