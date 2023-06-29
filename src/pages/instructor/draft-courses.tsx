import { withInstructorLayout } from '@/layouts/instructor'
import { NextPage } from 'next'
import React from 'react'

const DraftCourses: NextPage = () => {
  return (
    <div>DraftCourses</div>
  )
}

export default withInstructorLayout(DraftCourses)