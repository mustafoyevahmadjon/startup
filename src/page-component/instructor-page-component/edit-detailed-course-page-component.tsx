import {
  Divider, useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SectionTitle from '@/components/section-title/section-title';
import { InstructorManageCourse } from '@/components';
import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { CourseType } from '@/interfaces/course.interface';


const EditDetailedCoursePageComponent = () => {
  const { editCourse } = useActions()
  const toast = useToast()
  const { course } = useTypedSelector(state => state.instructor)
  const router = useRouter();


  const onSubmit = (data: CourseType) => {
    editCourse({
      ...data, callback() {
        toast({
          title: "successfully edited",
          position: "top-right",
          isClosable: true,
        })
        router.push("/instructor/edit-courses")
      },
    })
  }

  return (
    <>
      <SectionTitle title={`Edit course ${router.query.slug}`} subtitle={''} />
      <Divider mt={5} />
      <InstructorManageCourse courseValues={course} titleBtn='Create Course' submitHandler={onSubmit} />
    </>
  )
}

export default EditDetailedCoursePageComponent