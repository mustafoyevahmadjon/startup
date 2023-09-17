import { Box, Button, Flex, FormLabel, Icon, Stack, Text, Image } from '@chakra-ui/react';
import { Form, Formik, FormikValues } from 'formik';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { GiSave } from 'react-icons/gi';
import 'react-quill/dist/quill.snow.css';
import { courseCategory, courseLevel, coursePrice } from '@/config/constants';
import { editorModules } from '@/config/editor.config';
import { FIleService } from '@/services/file.service';
import { CourseValidation, manageCourseValues } from '@/validations/course.validation';
import SelectField from '../select-field/select-field';
import TagField from '../tag-field/tag-field';
import TextAreaField from '../text-area-field/text-area-field';
import TextFiled from '../text-field/text-field';
import {
  InstructorManageCourseProps,
} from './instructor-manage-course.props';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';
import ErrorAlert from '../error-alert/error-alert';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
import { loadImage } from '@/helpers/image.helper';
import { FaTimes } from 'react-icons/fa';
import { CourseType } from '@/interfaces/course.interface';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const InstructorManageCourse = ({ submitHandler, titleBtn, courseValues }: InstructorManageCourseProps) => {
  const [file, setFile] = useState<File | string | null>();
  const [errorFIle, seterrorFIle] = useState("")
  const [initialValues, setinitialValues] = useState(manageCourseValues)

  const { error, isLoading } = useTypedSelector(state => state.course)
  const { t } = useTranslation()
  const { clearCourseError, startLoading } = useActions()
  const router = useRouter()

  const handleChange = (file: File) => {
    setFile(file);
  };

  const onSubmit = async (formValues: FormikValues) => {
    if (!file) {
      seterrorFIle("preview Image is required")
      return
    }
    let imageUrl = file
    if (typeof file !== "string") {
      startLoading()
      const formData = new FormData();
      formData.append('image', file as File);
      const response = await FIleService.fileUpload(formData, 'preview-image');
      imageUrl = response.url
    }
    const data = { ...formValues, image: imageUrl } as CourseType;
    submitHandler(data);
    router.push("/instructor/courses")
  };

  useEffect(() => {
    if (courseValues) {
      setinitialValues(courseValues)
      setFile(courseValues.image)
    }
  }, [courseValues])

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={CourseValidation.create}
        enableReinitialize
      >
        {formik => (
          <Form>
            <Flex mt={12} gap={4}>
              <Box w={'70%'}>
                <Stack spacing={5}>
                  <TextFiled name='title' label='Title' placeholder='JavaScript from 0 to hero' />
                  <TextAreaField
                    name='exerpt'
                    placeholder='Full course about JavaScript'
                    height={'150px'}
                    label={'Exerpt'}
                  />
                  <Flex gap={4}>
                    <TagField
                      label='What will students learn in your course?'
                      name='learn'
                      placeholder='Full project...'
                      formik={formik}
                      values={formik.values.learn}
                      errorMessage={formik.touched.learn ? (formik.errors.learn as string) : ''}
                    />
                    <TagField
                      label='Requirements'
                      name='requirements'
                      placeholder='Basic JavaScript...'
                      formik={formik}
                      values={formik.values.requirements}
                      errorMessage={
                        formik.touched.requirements ? (formik.errors.requirements as string) : ''
                      }
                    />
                  </Flex>
                  <Box>
                    <FormLabel mb={3}>
                      Description{' '}
                      <Box as={'span'} color={'red.300'}>
                        *
                      </Box>
                    </FormLabel>
                    <ReactQuill
                      modules={editorModules}
                      onChange={data => formik.setFieldValue('description', data)}
                      value={formik.values.description}
                    />
                    {formik.errors.description && formik.touched.description && (
                      <Text mt={2} fontSize='14px' color='red.500'>
                        {formik.errors.description as string}
                      </Text>
                    )}
                  </Box>
                  <>
                    {error && (
                      <ErrorAlert title={error as string} clearHandler={clearCourseError} />
                    )}
                  </>

                  <Button
                    w={'full'}
                    type={'submit'}
                    h={14}
                    colorScheme={'facebook'}
                    rightIcon={<GiSave />}
                    isLoading={isLoading}
                    loadingText={`${t('loading', { ns: 'global' })}`}
                  >
                    {titleBtn}
                  </Button>
                </Stack>
              </Box>
              <Box w={'30%'}>
                <Stack spacing={5}>
                  <SelectField
                    name='level'
                    label='Level'
                    placeholder='-'
                    arrOptions={courseLevel}
                  />
                  <SelectField
                    name='category'
                    label='Category'
                    placeholder='-'
                    arrOptions={courseCategory}
                  />
                  <SelectField
                    name='price'
                    label='Price'
                    placeholder='-'
                    arrOptions={coursePrice}
                  />
                  <TagField
                    label='Course tags'
                    name='tags'
                    placeholder='JavaScript...'
                    formik={formik}
                    values={formik.values.tags}
                    errorMessage={formik.touched.tags ? (formik.errors.tags as string) : ''}
                  />
                  <FormLabel>
                    Course preview image{' '}
                    <Box as={'span'} color={'red.300'}>
                      *
                    </Box>
                  </FormLabel>
                  {file ? (
                    <Box pos={"relative"} w={"full"} h={200}>
                      <Image
                        src={
                          typeof file === 'string'
                            ? loadImage(file as string)
                            : URL.createObjectURL(file)
                        }
                        alt={'preview image'}
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                      />
                      <Icon
                        as={FaTimes}
                        fontSize={20}
                        pos={'absolute'}
                        right={2}
                        top={2}
                        cursor={'pointer'}
                        onClick={() => setFile(null)}
                        color={"white"}
                      />
                    </Box>
                  ) : (
                    <Box>

                      <FileUploader
                        handleChange={handleChange}
                        name='file'
                        types={['JPG', 'PNG', 'GIF']}
                        style={{ minWidth: '100%' }}
                      />
                      {errorFIle && (
                        <Text mt={2} fontSize='14px' color='red.500'>
                          {errorFIle}
                        </Text>
                      )}
                    </Box>
                  )}

                </Stack>
              </Box>
            </Flex>
          </Form >
        )}
      </Formik >
    </>
  );
};
export default InstructorManageCourse;