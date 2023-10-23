import { combineReducers } from "redux";
import userSlice from "./slices/userSlice";
import adminCourseSlice from "./slices/adminCourseSlice";

const rootReducer = combineReducers({
  users: userSlice,
  courses: adminCourseSlice,
});

export default rootReducer;
