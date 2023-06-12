import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from '@/helpers/api.helpers';
import { AuthService } from '@/services/auth.service';
import { AuthUserResponse, InterfaceEmailAndPassword, InterfaceEmailAndOtp } from './user.interface';

export const register = createAsyncThunk<AuthUserResponse, InterfaceEmailAndPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const login = createAsyncThunk<AuthUserResponse, InterfaceEmailAndPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const sendVerificationCode = createAsyncThunk<'success', { email: string }>(
	'auth/verification-code',
	async ({ email }, thunkApi) => {
		try {
			const response = await AuthService.sendOtp(email);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const verifyVerificationCode = createAsyncThunk<'success', InterfaceEmailAndOtp>(
	'auth/verify-code',
	async ({ email, otpVerification }, thunkApi) => {
		try {
			const response = await AuthService.verifyOtp(email, otpVerification);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const logout = createAsyncThunk('auth/logout', () => {
	AuthService.logout();
});

export const checkAuth = createAsyncThunk<AuthUserResponse>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens();
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);