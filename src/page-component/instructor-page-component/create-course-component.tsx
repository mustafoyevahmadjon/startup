import SectionTitle from '@/components/section-title/section-title';
import { Divider, useToast } from "@chakra-ui/react"
import { InstructorManageCourse } from '@/components';
import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import { useActions } from '@/hooks/useActions';



const CreateCourseComponent = () => {
  const { createCourse } = useActions()
  const toast = useToast()
  const onSubmit = (data: SubmitValuesInterface) => {
    createCourse({
      ...data, callback: () => {
        toast({
          title: "successfully created created",
          description: "You can customize your curriculum for you course",
          position: "top-right",
          isClosable: true,
        })
      }
    });
  }
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
