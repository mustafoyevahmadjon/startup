import SectionTitle from '@/components/section-title/section-title';
import { Divider, useToast } from "@chakra-ui/react"
import { InstructorManageCourse } from '@/components';
import { useActions } from '@/hooks/useActions';
import { CourseType } from '@/interfaces/course.interface';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';



const CreateCourseComponent = () => {
  const { createCourse } = useActions()
  const toast = useToast()
  const router = useRouter()
  const { t } = useTranslation();

  const onSubmit = (data: CourseType) => {
    createCourse({
      ...data, callback: () => {
        toast({
          title: t('successfully_created_course', { ns: 'instructor' }),
          description: t('successfully_created_course_description', { ns: 'instructor' }),
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
        title={t('create_course_title', { ns: 'instructor' })}
        subtitle={t('create_course_description', { ns: 'instructor' })}
      />
      <Divider mt={5} />
      <InstructorManageCourse
        titleBtn={t('create_course_btn', { ns: 'instructor' })}
        submitHandler={onSubmit} />
    </>
  )
}

export default CreateCourseComponent
