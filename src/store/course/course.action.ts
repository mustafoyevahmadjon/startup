import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from '@/helpers/api.helpers';
import { CourseService } from '@/services/course.service';
import { CourseCreateBodyInterface, ByIdBodyinterface } from './course.interface';

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
			const response = await CourseService.editCourse(body, body._id as string);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const deleteCourse = createAsyncThunk<'success', ByIdBodyinterface>(
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

export const activateCourse = createAsyncThunk<'success', ByIdBodyinterface>(
	'course/activate',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.activateCourse(body.courseId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const draftCourse = createAsyncThunk<'success', ByIdBodyinterface>(
	'course/draft',
	async (body, thunkApi) => {
		try {
			const response = await CourseService.draftCourse(body.courseId);
			body.callback();
			return response;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);