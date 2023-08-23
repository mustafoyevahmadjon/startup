import { createAsyncThunk } from "@reduxjs/toolkit";
import { SectionBodyType } from "./section.interface";
import { SectionService } from "@/services/section.service";
import { errorCatch } from "@/helpers/api.helpers";
import { SectionType } from "@/interfaces/instructor.interface";

export const createSection = createAsyncThunk<"success", SectionBodyType>(
  'section/create',
  async (body, thunkApi) => {
    try {
      const response = await SectionService.createSection(body);
      body.callback()
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error));
    }
  },
);

export const deleteSection = createAsyncThunk<"success", SectionBodyType>(
  'section/delete',
  async (body, thunkApi) => {
    try {
      const response = await SectionService.deleteSection(body);
      body.callback()
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error));
    }
  },
);

export const editSection = createAsyncThunk<"success", SectionBodyType>(
  'section/edit',
  async (body, thunkApi) => {
    try {
      const response = await SectionService.editSection(body);
      body.callback()
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error));
    }
  },
);

export const getSection = createAsyncThunk<SectionType[], SectionBodyType>(
  'section/get',
  async (body, thunkApi) => {
    try {
      const response = await SectionService.getSection(body);
      body.callback()
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error));
    }
  },
);
