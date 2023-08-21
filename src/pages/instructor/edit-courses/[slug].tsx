import { CourseType } from '@/interfaces/course.interface'
import { withInstructorLayout } from '@/layouts/instructor'
import { EditDetailedCoursePage } from '@/page-component'
import { InstructorService } from '@/services/iInstructor.service'
import { GetServerSideProps, NextPage } from 'next'

const EditDetailedCourses: NextPage = () => {
  return (
    <EditDetailedCoursePage />
  )
}

export default withInstructorLayout(EditDetailedCourses)

export const getServerSideProps: GetServerSideProps<CoursePageType> = async ({ req, query }) => {
  const course = await InstructorService.getDetailedCourse(req.cookies.refresh, query.slug as string)
  return {
    props: { course }
  }
}

interface CoursePageType extends Record<string, unknown> {
  course: CourseType
}