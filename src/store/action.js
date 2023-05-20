import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// async login action
export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/auth/login", data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// async logout action
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axios.post("http://localhost:3001/auth/login");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

// async update profile action
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (data) => {
    try {
      const response = await axios.put(
        "http://localhost:3001/user/profile",
        data
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// async register action
export const register = createAsyncThunk("auth/register", async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/auth/signup",
      data
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
