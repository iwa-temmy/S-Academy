import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/https";

export const adminCourseSlice = createSlice({
  name: "adminCourseSlice",
  initialState: {
    all_courses: [],
  },
  reducers: {
    getAllCourses: (state, action) => {
      state.all_courses = action.payload;
    },
  },
});

export const { getAllCourses } = adminCourseSlice.actions;

// export function GetAllCourses() {
//   return async (dispatch) => {
//     try {
//       const response = await axiosInstance().get(`/lms/courses/`);
//       dispatch(getAllCourses(response));
//       return {
//         success: true,
//         message: "Successful",
//       };
//     } catch (error) {
//       return { success: false, message: error.message };
//     }
//   };
// }

export const GetAllCourses = () => async (dispatch) => {
  try {
    const res = await axiosInstance().get(`/lms/courses/`);
    if (res?.status?.toLowerCase() !== "success") throw new Error(res?.message);
    dispatch(getAllCourses(res?.data));
  } catch (err) {
    return { success: false, message: err.message };
  }
};

export default adminCourseSlice.reducer;
