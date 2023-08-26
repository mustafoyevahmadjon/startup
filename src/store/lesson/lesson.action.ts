import { createAsyncThunk } from "@reduxjs/toolkit";
import { LessonBodyType } from "./lesson.interface";
import { errorCatch } from "@/helpers/api.helpers";
import { LessonService } from "@/services/lesson.service";
import { LessonType } from "@/interfaces/instructor.interface";

export const createLesson = createAsyncThunk<'success', LessonBodyType>(
    'lesson/create',
    async (body, thunkApi) => {
        try {
            const response = await LessonService.createLesson(body);
            body.callback();
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(errorCatch(error));
        }
    }
);

export const deleteLesson = createAsyncThunk<'success', LessonBodyType>(
    'lesson/delete',
    async (body, thunkApi) => {
      try {
        const response = await LessonService.deleteLesson(body);
        body.callback();
        return response;
      } catch (error) {
        return thunkApi.rejectWithValue(errorCatch(error));
      }
    }
  );
  
  export const editLesson = createAsyncThunk<'success', LessonBodyType>(
    'lesson/edit',
    async (body, thunkApi) => {
      try {
        const response = await LessonService.editLesson(body);
        body.callback();
        return response;
      } catch (error) {
        return thunkApi.rejectWithValue(errorCatch(error));
      }
    }
  );
  
  export const getlesson = createAsyncThunk<LessonType[], LessonBodyType>(
    'lesson/get',
    async (body, thunkApi) => {
      try {
        const response = await LessonService.getLesson(body);
        body.callback();
        return response;
      } catch (error) {
        return thunkApi.rejectWithValue(errorCatch(error));
      }
    }
  );