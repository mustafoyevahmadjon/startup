import SectionTitle from '@/components/section-title/section-title';
import { Divider, useToast } from "@chakra-ui/react"
import { InstructorManageCourse } from '@/components';
import { useActions } from '@/hooks/useActions';
import { CourseType } from '@/interfaces/course.interface';
import { useRouter } from 'next/router';



const CreateCourseComponent = () => {
  const { createCourse } = useActions()
  const toast = useToast()
  const router = useRouter()

  const onSubmit = (data: CourseType) => {
    createCourse({
      ...data, callback: () => {
        toast({
          title: "successfully created created",
          description: "You can customize your curriculum for you course",
          position: "top-right",
          isClosable: true,
        })
        router.push("/instructor/courses")
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
