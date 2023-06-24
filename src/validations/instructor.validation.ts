import * as Yup from 'yup';

export const InstructorValidation = {
	applyInstructorValue() {
		return {
			firstName: '',
			lastName: '',
			email: '',
			socialMedia: '',
		};
	},
	applyInstructorValidation() {
		return Yup.object({
			email: Yup.string().email('email_is_invalid').required('email_is_required'),
			firstName: Yup.string().required('first_name_required'),
			lastName: Yup.string().required('last_name_required'),
			socialMedia: Yup.string().required('social_media_required'),
		});
	},
};