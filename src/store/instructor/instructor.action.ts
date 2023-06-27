import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorCatch } from "@/helpers/api.helpers";
import { InstructorApplyBody } from "./instructor.interface";
import { InstructorService } from "@/services/iInstructor.service";

export const applyInstructor = createAsyncThunk<"success", InstructorApplyBody>(
  'instructor/apply',
  async (body, thunkApi) => {
    try {
      const response = await InstructorService.applyInstructor(body);
      body.callback()
      return response
    } catch (error) {
      return thunkApi.rejectWithValue(errorCatch(error));
    }
  }
);