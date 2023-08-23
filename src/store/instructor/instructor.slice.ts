import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InstructorInitialState } from "./instructor.interface";
import { applyInstructor } from "./instructor.action";
import { CourseType } from "@/interfaces/course.interface";

const initialState: InstructorInitialState = {
  isLoading: false,
  error: null,
  courses: [],
  course: null,
}

export const instructorSlice = createSlice({
  name: "instructor",
  initialState,
  reducers: {
    clearInstructorError: state => {
      state.error = null
    },
    instructorAllCourses: (state, action: PayloadAction<CourseType[]>) => {
      state.courses = action.payload
    },
    instructorDetailedCourse: (state, action: PayloadAction<CourseType>) => {
      state.course = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(applyInstructor.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
      .addCase(applyInstructor.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(applyInstructor.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
  }
})

export const InstructorReducer = instructorSlice.reducer;
export const InstructorSliceAction = instructorSlice.actions;