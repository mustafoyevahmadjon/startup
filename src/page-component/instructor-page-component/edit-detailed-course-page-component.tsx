import {
  Divider, useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import SectionTitle from '@/components/section-title/section-title';
import { InstructorManageCourse } from '@/components';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import { CourseType } from '@/interfaces/course.interface';
import { useTranslation } from 'react-i18next';


const EditDetailedCoursePageComponent = () => {
  const { editCourse } = useActions()
  const toast = useToast()
  const { course } = useTypedSelector(state => state.instructor)
  const router = useRouter();
  const { t } = useTranslation();

  const onSubmit = (data: CourseType) => {
    editCourse({
      ...data, callback() {
        toast({
          title: t('successfully_edited', { ns: 'instructor' }),
          position: "top-right",
          isClosable: true,
        })
        router.push("/instructor/edit-courses")
      },
    })
  }

  return (
    <>
      <SectionTitle
        title={`${t('edit_course_title', { ns: 'instructor' })} ${router.query.slug}`}
        subtitle={''}
      />
      <Divider mt={5} />
      <InstructorManageCourse
        courseValues={course}
        titleBtn={t('edit_course_title', { ns: 'instructor' })}
        submitHandler={onSubmit}
      />
    </>
  )
}

export default EditDetailedCoursePageComponent