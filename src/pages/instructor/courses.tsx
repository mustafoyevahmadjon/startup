import { CourseType } from '@/interfaces/course.interface'
import { withInstructorLayout } from '@/layouts/instructor'
import { InstructorStudentsPageComponent } from '@/page-component'
import { InstructorService } from '@/services/iInstructor.service'
import { GetServerSideProps, NextPage } from 'next'

const Courses: NextPage<CoursesPageType> = () => {
  return (
    <InstructorStudentsPageComponent />
  )
}

export default withInstructorLayout(Courses)

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const courses = await InstructorService.getAllCourses(req.cookies.refresh)
  return {
    props: { courses },
  }
}

interface CoursesPageType extends Record<string, unknown> {
  courses: CourseType[]
}