import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../config";
import { endSession } from "../../utils";
import axiosInstance from "../../utils/https";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    assets: [],
    token: "",
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const LoginUser = async (credentials) => {
  try {
    const res = await axios.post(`${baseUrl}/users/login/`, credentials);
    if (res?.data?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    return {
      success: true,
      message: res?.data?.message,
      data: res?.data,
    };
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export const RegisterUser = async (credentials) => {
  try {
    const res = await axios.post(`${baseUrl}/users/registration/`, credentials);
    if (res?.data?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    return {
      success: true,
      message: res?.data?.message,
      data: res?.data?.data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data.message };
  }
};

export const ForgetPassword = async (credentials) => {
  try {
    const res = await axios.post(
      `${baseUrl}/users/forget_password/`,
      credentials
    );
    if (res?.data?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    return {
      success: true,
      message: res?.data?.message,
      data: res?.data?.data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data.message };
  }
};
export const ResetPassword = async (credentials, user_id, confirmation_token) => {
  try {
    const res = await axios.post(
      `${baseUrl}/users/password_reset/?user_id=${user_id}&confirmation_token=${confirmation_token}`,
      credentials
    );
    if (res?.data?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    return {
      success: true,
      message: res?.data?.message,
      data: res?.data?.data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data.message };
  }
};

export const VerifyLoggedInUser = async (credentials) => {
  try {
    const res = await axios.post(`${baseUrl}/users/verification/`, credentials);
    if (res?.data?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    return {
      success: true,
      message: res?.data?.message,
      data: res?.data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data.message };
  }
};


export const ResendOtp = async (credentials) => {
  try {
    const res = await axios.post(`${baseUrl}/users/resend_emailotp/`, credentials);
    if (res?.data?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    return {
      success: true,
      message: res?.data?.message,
      data: res?.data?.data,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data.message };
  }
};

export const Logout = async () => {
  try {
    const res = await axiosInstance().post(`${baseUrl}/users/logout/`);
    if (res?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    endSession();
    return {
      success: true,
      message: res?.data?.message,
    };
  } catch (err) {
    return { success: false, message: err?.response?.data.message };
  }
};

export const GoogleLogin = async (credentials) => {
  try {
    const res = await axios.post(`${baseUrl}/users/googlelogin/`, credentials);
    if (res?.data?.status?.toLowerCase() !== "success")
      throw new Error(data?.message);
    return {
      success: true,
      message: res?.data?.message,
      data: res?.data,
    };
  } catch (err) {
    console.log({ err });
    return { success: false, message: err?.response?.data?.message };
  }
};

export const { removeUser, getUser } = userSlice.actions;
export default userSlice.reducer;
