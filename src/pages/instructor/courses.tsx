import { withInstructorLayout } from '@/layouts/instructor'
import { InstructorStudentsPageComponent } from '@/page-component'
import { NextPage } from 'next'

const Courses: NextPage = () => {
  return (
    <InstructorStudentsPageComponent />
  )
}

export default withInstructorLayout(Courses)