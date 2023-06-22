import axios from 'axios';
import Cookies from 'js-cookie';
import { API_URL } from '@/config/api.config';
import { errorCatch } from '@/helpers/api.helpers';
import { removeTokensCookie } from '@/helpers/auth.helpers';
import { AuthService } from '@/services/auth.service';

const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

$axios.interceptors.request.use(config => {
	const accessToken = Cookies.get('access');
	if (config && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
});

$axios.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;
		if (
			(error.response.status == 401 ||
				errorCatch(error) == 'jwt expired' ||
				errorCatch(error) == 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await AuthService.getNewTokens();

				return $axios.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeTokensCookie();
			}
		}
	}
);

export default $axios;