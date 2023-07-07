import {
  Box,
  Button,
  Flex,
  FormLabel,
  Stack,
  Text,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { GiSave } from 'react-icons/gi';
import 'react-quill/dist/quill.snow.css';
import { courseCategory, courseLevel } from '@/config/constants';
import { editorModules } from '@/config/editor.config';
import { Form, Formik, FormikValues } from 'formik';
import TextField from '../text-filed/text-field';
import TextAreaField from '../text-area-field/text-area-field';
import SelectField from '../select-field/select-field';
import TagField from '../tag-field/tag-field';
import { CourseValidation, manageCourseValues } from '@/validations/course.validation';
import { InstructorManageCourseProps, SubmitValuesInterface } from './instructor-manage-course.props';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const InstructorManageCourse = ({ submitHandler, titleBtn }: InstructorManageCourseProps) => {
  const [learned, setLearned] = useState<string[]>();
  const [requirements, setRequirements] = useState<string[]>();
  const [tags, setTags] = useState<string[]>();
  const [file, setFile] = useState<File>();

  const handleChange = (file: File) => {
    setFile(file);
  };

  const onSubmit = (formData: FormikValues) => {
    const data = formData as SubmitValuesInterface
    submitHandler(data)
  }

  return (
    <>
      <Formik onSubmit={onSubmit} initialValues={manageCourseValues} validationSchema={CourseValidation.create}>
        {formik => (
          <Form>
            <Flex mt={12} gap={4}>
              <Box w={'70%'}>
                <Stack spacing={5}>
                  <TextField name='title' label='Title' placeholder='Courses Name' />
                  <TextAreaField name='excerpt' placeholder='Full about your course' height='150' label='Excerpt' />
                  <Flex gap={4}>
                    <TagField
                      label='What will students learn in your course?'
                      name='learn'
                      placeholder='Full project...'
                      formik={formik}
                      errorMessage={formik.errors.learn as string}
                    />
                    <TagField
                      label='Requirements'
                      name='requirements'
                      placeholder='Basic JavaScript...'
                      formik={formik}
                      errorMessage={formik.errors.requirements as string}
                    />
                  </Flex>
                  <Box>
                    <FormLabel mb={3}>
                      Description{' '}
                      <Box as={'span'} color={'red.300'}>
                        *
                      </Box>
                    </FormLabel>
                    <ReactQuill modules={editorModules} onChange={data => formik.setFieldValue("description", data)} value={formik.values.description} />
                    {formik.errors.description && formik.touched.description && (
                      <Text mt={2} fontSize='14px' color='red.500'>
                        {formik.errors.description as string}
                      </Text>
                    )}
                  </Box>
                  <Button w={'full'} h={14} colorScheme={'facebook'} rightIcon={<GiSave />} type='submit'>
                    {titleBtn}
                  </Button>
                </Stack>
              </Box>
              <Box w={'30%'}>
                <Stack spacing={5}>
                  <SelectField name='level' label='Level' placeholder='-' arrOptions={courseLevel} />
                  <SelectField name='category' label='Category' placeholder='-' arrOptions={courseCategory} />
                  <SelectField name='price' label='Price' placeholder='-' arrOptions={courseCategory} />
                  <TagField
                    label='Course tag'
                    name='tags'
                    placeholder='JavaScript...'
                    formik={formik}
                    errorMessage={formik.errors.tags as string}
                  />
                  <Box>
                    <FormLabel>
                      Course preview image{' '}
                      <Box as={'span'} color={'red.300'}>
                        *
                      </Box>
                    </FormLabel>
                    <FileUploader
                      handleChange={handleChange}
                      name='file'
                      types={['JPG', 'PNG', 'GIF']}
                      style={{ minWidth: '100%' }}
                    />
                  </Box>
                </Stack>
              </Box>
            </Flex>
          </Form>
        )}
      </Formik>

    </>
  )
}

export default InstructorManageCourse