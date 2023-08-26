import { Box, Button, Flex, Stack, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import { Form, Formik, FormikValues } from 'formik'
import TextField from '../text-filed/text-field';
import TextAreaField from '../text-area-field/text-area-field';
import dynamic from 'next/dynamic';
import { editLessonModules } from '@/config/editor.config';
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from 'react';
import { CourseValidation, manageLessonValues } from '@/validations/course.validation';
import { useActions } from '@/hooks/useActions';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { LessonType } from '@/interfaces/instructor.interface';
import { LessonFormProps } from './lesson-form.props';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const LessonForm = ({ values, sectionId }: LessonFormProps) => {
  const [initialValues, setInitialValues] = useState(manageLessonValues);
  const { createLesson, getSection, clearlessonError, editLesson } = useActions();
  const { course } = useTypedSelector(state => state.instructor);
  const { isLoading, error } = useTypedSelector(state => state.lesson);
  const { t } = useTranslation();
  const toast = useToast();

  const onSubmit = (formValues: FormikValues) => {
    const data = formValues as LessonType;
    if (values) {
      editLesson({
        lessonId: values._id,
        ...data,
        callback: () => {
          toast({
            title: 'Successfully edited lesson',
            position: 'top-right',
            isClosable: true,
          });
          getSection({ courseId: course?._id, callback: () => { } });
        },
      });
    } else {
      createLesson({
        ...data,
        sectionId,
        callback: () => {
          toast({
            title: 'Successfully created new lesson',
            position: 'top-right',
            isClosable: true,
          });
          getSection({ courseId: course?._id, callback: () => { } });
        },
      });
    }
  };

  useEffect(() => {
    if (values?._id) {
      setInitialValues(values)
    }
  }, [values])

  return (
    <Box
      p={5}
      mt='4'
      border={'1px'}
      borderRadius={'lg'}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
    >
      <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={CourseValidation.lesson} enableReinitialize>
        {formik => (
          <Form>
            <Stack spacing={5}>
              <TextField name='name' label='name' />
              <TextAreaField name='embedVideo' label='embed video' />
              <Flex>
                <TextAreaField name='hour' label='Hour' type='number' />
                <TextAreaField name='minute' label='Minute' type='number' />
                <TextAreaField name='second' label='Second' type='number' />
              </Flex>
              <Box>
                <ReactQuill
                  modules={editLessonModules}
                  onChange={data => formik.setFieldValue('material', data)}
                  value={formik.values?.material}
                />
                {formik.errors.material && formik.touched.material && (
                  <Text mt={2} fontSize='14px' color='red.500'>
                    {formik.errors.material as string}
                  </Text>
                )}
              </Box>
              <Button
                isLoading={isLoading}
                loadingText={`${t('loading', { ns: 'global' })}`}
                h={14}
                mt={4}
                w={'full'}
                colorScheme={'facebook'}
                type={'submit'}>
                Submit
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default LessonForm