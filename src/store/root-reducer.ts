import { courseReducer } from './course/course.slice';
import { InstructorReducer } from './instructor/instructor.slice';
import { userReducer } from './user/user.slice';

export const reducer = {
    user: userReducer,
    instructor: InstructorReducer,
    course: courseReducer,
};