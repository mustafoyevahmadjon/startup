import { userReducer } from './user/user.slice';
import { InstructorReducer } from "./instructor/instructor.slice"

export const reducer = {
    user: userReducer,
    instructor: InstructorReducer,
};