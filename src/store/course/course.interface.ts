import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import { CourseType } from '@/interfaces/course.interface';

export interface CourseIntialStateType {
	isLoading: boolean;
	error: string | null | unknown;

}

export interface CourseCreateBodyInterface extends SubmitValuesInterface {
	callback: () => void;
}