import { withInstructorLayout } from '@/layouts/instructor'
import { DraftCourseComponent } from '@/page-component'
import { NextPage } from 'next'

const DraftCourses: NextPage = () => {
  return (
    <DraftCourseComponent />
  )
}

export default withInstructorLayout(DraftCourses)