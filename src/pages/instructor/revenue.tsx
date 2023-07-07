import { withInstructorLayout } from '@/layouts/instructor'
import { RevenuPageComponent } from '@/page-component'
import { NextPage } from 'next'

const Revenue: NextPage = () => {
  return (
    <RevenuPageComponent />
  )
}

export default withInstructorLayout(Revenue)