import { InstructorSliceAction } from './instructor/instructor.slice';
import * as userActions from './user/user.action';
import { userSliceAction } from './user/user.slice';
import * as instructorAction from "./instructor/instructor.action"

export const allActions = { ...userSliceAction, ...userActions, ...InstructorSliceAction, ...instructorAction };