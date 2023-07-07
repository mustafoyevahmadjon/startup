import { withInstructorLayout } from '@/layouts/instructor'
import { CreateCourseComponent } from '@/page-component'
import { NextPage } from 'next'

const CreateCourse: NextPage = () => {
  return (
    <CreateCourseComponent />
  )
}

export default withInstructorLayout(CreateCourse)