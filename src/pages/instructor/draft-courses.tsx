import { CourseType } from '@/interfaces/course.interface'
import { withInstructorLayout } from '@/layouts/instructor'
import { DraftCourseComponent } from '@/page-component'
import { InstructorService } from '@/services/iInstructor.service'
import { GetServerSideProps, NextPage } from 'next'

const DraftCourses: NextPage = () => {
  return (
    <DraftCourseComponent />
  )
}

export default withInstructorLayout(DraftCourses)

export const getServerSideProps: GetServerSideProps<CoursesPageType> = async ({ req }) => {
  const courses = await InstructorService.getAllCourses(req.cookies.refresh);

  return {
    props: { courses },
  };
};

interface CoursesPageType extends Record<string, unknown> {
  courses: CourseType[];
}