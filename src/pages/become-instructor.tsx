import { withLayout } from "@/layouts/layout"
import Seo from "@/layouts/seo/seo"
import { BecomeInstructorPageComponent } from "@/page-component"
import { NextPage } from "next"

const BecomeInstructor: NextPage = () => {
  return (
    <Seo metaTitle="Become in instructor">
      <BecomeInstructorPageComponent />
    </Seo>
  )
}

export default withLayout(BecomeInstructor)