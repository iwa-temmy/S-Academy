import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/https";

const initialState = {
  courses: [],
  status: {
    fetching: "",
  },
  error: {},
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    // Just make the async request here, and return the response.
    // This will automatically dispatch a `pending` action first,
    // and then `fulfilled` or `rejected` actions based on the promise.
    // as needed based on the
    const res = await axiosInstance().get(`/lms/courses/`);
    return res?.data;
  }
);
export const adminCourseSlice = createSlice({
  name: "adminCourseSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status.fetching = "loading";
      })
      // Pass the generated action creators to `.addCase()`
      .addCase(fetchCourses.fulfilled, (state, action) => {
        // Same "mutating" update syntax thanks to Immer
        state.status.fetching = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status.fetching = "failed";
        state.error = action.error;
      });
  },
});

export default adminCourseSlice.reducer;
