import {
  Divider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SectionTitle from '@/components/section-title/section-title';
import { InstructorManageCourse } from '@/components';
import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import { FormikValues } from 'formik';
import { useTypedSelector } from '@/hooks/useTypedSelector';


const EditDetailedCoursePageComponent = () => {
  const { course } = useTypedSelector(state => state.instructor)
  const router = useRouter();
  const onSubmit = (formData: FormikValues) => {
    const data = formData as SubmitValuesInterface
    console.log(data);
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