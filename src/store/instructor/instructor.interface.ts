export interface InstructorInitialState {
  isLoading: boolean
  error: string | null | unknown
}

export interface InstructorApplyBody {
  firstName: string
  lastName: string
  email: string
  socialMedia: string
  callback: () => void
}