import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CourseType } from '@/interfaces/course.interface'
import { withInstructorLayout } from '@/layouts/instructor'
import { EditCoursePageComponent } from '@/page-component'
import { InstructorService } from '@/services/iInstructor.service'
import { GetServerSideProps, NextPage } from 'next'

const EditCourses: NextPage = () => {
  const { courses } = useTypedSelector(state => state.instructor)
  return (
    <EditCoursePageComponent />
  )
}

export default withInstructorLayout(EditCourses)
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const courses = await InstructorService.getAllCourses(req.cookies.refresh)
  return {
    props: { courses },
  }
}

interface CoursesPageType extends Record<string, unknown> {
  courses: CourseType[]
}