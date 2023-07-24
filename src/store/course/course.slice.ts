import { createSlice } from '@reduxjs/toolkit';
import { activateCourse, createCourse, deleteCourse, draftCourse, editCourse } from './course.action';
import { CourseIntialStateType } from './course.interface';
import { CourseType } from '@/interfaces/course.interface';

const initialState: CourseIntialStateType = {
	isLoading: false,
	error: null,
};

export const courseSlice = createSlice({
	name: 'course',
	initialState,
	reducers: {
		startLoading: state => {
			state.isLoading = true;
		},
		clearCourseError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder

			.addCase(createCourse.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createCourse.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(createCourse.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

			.addCase(deleteCourse.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteCourse.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(deleteCourse.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

			.addCase(activateCourse.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(activateCourse.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(activateCourse.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

			.addCase(draftCourse.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(draftCourse.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(draftCourse.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})

	},
});

export const courseReducer = courseSlice.reducer;
export const courseSliceAction = courseSlice.actions;