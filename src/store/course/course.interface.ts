import { CourseType } from '@/interfaces/course.interface';

export interface CourseIntialStateType {
	isLoading: boolean;
	error: string | null | unknown;

}

export interface CourseCreateBodyInterface extends CourseType {
	callback: () => void;
}

export interface ByIdBodyinterface {
	courseId: string | undefined;
	callback: () => void;
}