import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from '@/helpers/api.helpers';
import { CourseService } from '@/services/course.service';
import { CourseCreateBodyInterface, DeleteBodyInterface } from './course.interface';

export const createCourse = createAsyncThunk<'success', CourseCreateBodyInterface>(
	'course/create',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.createCourse(body);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const editCourse = createAsyncThunk<'success', CourseCreateBodyInterface>(
	'course/edit',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.editCourse(body, body._id);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteCourse = createAsyncThunk<'success', DeleteBodyInterface>(
	'course/edit',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.deleteCourse(body.courseId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);