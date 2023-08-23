import * as courseActions from './course/course.action';
import { courseSliceAction } from './course/course.slice';
import * as instructorActions from './instructor/instructor.action';
import { InstructorSliceAction } from './instructor/instructor.slice';
import * as userActions from './user/user.action';
import { userSliceAction } from './user/user.slice';
import * as sectionActions from "./section/section.action"
import { sectionSliceAction } from './section/section.slice';


export const allActions = {
	...userSliceAction,
	...userActions,
	...InstructorSliceAction,
	...instructorActions,
	...courseActions,
	...courseSliceAction,
	...sectionActions,
	...sectionSliceAction
};