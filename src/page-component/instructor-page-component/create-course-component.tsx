import SectionTitle from '@/components/section-title/section-title';
import { Divider } from "@chakra-ui/react"
import { InstructorManageCourse } from '@/components';



const CreateCourseComponent = () => {
  const onSubmit = (data) => { }
  return (
    <>
      <SectionTitle
        title='Create course'
        subtitle="Note that when you're creating course it will be draft"
      />
      <Divider mt={5} />
      <InstructorManageCourse titleBtn='Create Course' submitHandler={onSubmit} />
    </>
  )
}

export default CreateCourseComponent
