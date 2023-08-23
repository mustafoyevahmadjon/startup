import { SectionType } from "@/interfaces/instructor.interface"

export interface SectionInitialStateType {
  isLoading: boolean
  error: string | null | unknown
  sections: SectionType[]
  pendingSection: boolean
}

export interface SectionBodyType {
  title?: string
  courseId?: string
  sectionId?: string
  callback: () => void
}