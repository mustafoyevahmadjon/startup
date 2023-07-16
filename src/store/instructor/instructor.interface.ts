import { CourseType } from "@/interfaces/course.interface"

export interface InstructorInitialState {
  isLoading: boolean
  error: string | null | unknown
  courses: CourseType[]
	course: CourseType| null
}

export interface InstructorApplyBody {
  firstName: string
  lastName: string
  email: string
  socialMedia: string
  callback: () => void
}