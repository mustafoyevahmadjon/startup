import {
  Divider,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SectionTitle from '@/components/section-title/section-title';
import { InstructorManageCourse } from '@/components';
import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import { FormikValues } from 'formik';


const EditDetailedCoursePageComponent = () => {

  const router = useRouter();
  const onSubmit = (formData: FormikValues) => {
    const data = formData as SubmitValuesInterface
  }

  return (
    <>
      <SectionTitle title={`Edit course ${router.query.slug}`} subtitle={''} />
      <Divider mt={5} />
      <InstructorManageCourse titleBtn='Create Course' submitHandler={onSubmit} />
    </>
  )
}

export default EditDetailedCoursePageComponent