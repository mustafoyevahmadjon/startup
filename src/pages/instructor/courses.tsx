import { withInstructorLayout } from '@/layouts/instructor'
import { InstructorStudentsPageComponent } from '@/page-component'
import { NextPage } from 'next'
import React from 'react'

const Courses: NextPage = () => {
  return (
    <InstructorStudentsPageComponent />
  )
}

export default withInstructorLayout(Courses)