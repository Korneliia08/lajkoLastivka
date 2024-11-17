import axios from "axios";
import api from "./interceptors/refreshToken.interceptor.ts";

export const getNewOrders = () => {
  return api("orders/free");
};
export const getMyOrders = () => {
  return api("orders/my");
};
export const postLogin = (email: string, password: string) => {
  return axios.post(import.meta.env.VITE_PATH_TO_API + "authorization/login", {
    email,
    password,
  });
};
export const postOrderSignIn = (orderId: number) => {
  return api.post("orders/signIn", {
    orderId: orderId,
  });
};
export const cleanerSign = (data: any) => {
  return api.post("cleaners/sign", {
    sign: data,
  });
};

export const cleanerSignInfo = () => {
  return api.get("cleaners/sign");
};
