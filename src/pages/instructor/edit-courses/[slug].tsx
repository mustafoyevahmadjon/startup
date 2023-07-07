import { withInstructorLayout } from '@/layouts/instructor'
import { EditDetailedCoursePage } from '@/page-component'
import { NextPage } from 'next'

const EditDetailedCourses: NextPage = () => {
  return (
    <EditDetailedCoursePage />
  )
}

export default withInstructorLayout(EditDetailedCourses)