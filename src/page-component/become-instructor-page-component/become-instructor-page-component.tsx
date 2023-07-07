import SectionTitle from '@/components/section-title/section-title'
import { Box, Button, Card, CardBody, Divider, Flex, Grid, HStack, Heading, Icon, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, useToast } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { teachValues } from '@/config/constants';
import { FC } from 'react';
import { LaunchCourseIcon, PlanCurriculumIcon, RecordVideoIcon } from '@/icons';
import { Form, Formik, FormikConfig } from 'formik';
import TextField from '@/components/text-filed/text-field';
import { GoVerified } from 'react-icons/go';
import { InstructorValidation } from '@/validations/instructor.validation';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { ErrorAlert } from '@/components';

const BecomeInstructorPageComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const { applyInstructor, clearInstructorError } = useActions()
  const toast = useToast();
  const { error, isLoading } = useTypedSelector(state => state.instructor)

  const onSubmit = formData => {
    applyInstructor({
      ...formData,
      callback: () => {
        toast({
          title: 'Successfully sent',
          description: "We'll contact with you coming soon",
          isClosable: true,
          position: 'top-right',
        });
        onClose();
      }
    })
  };


  return (
    <Stack spacing={16}>
      <Card>
        <CardBody p={0}>
          <HStack>
            <Stack px={5}>
              <SectionTitle
                textAlign={'center'}
                title={t('instructor_page_title', { ns: 'instructor' })}
                subtitle={t('instructor_page_description', { ns: 'instructor' })}
              />
              <Button onClick={onOpen} h={14} colorScheme={'facebook'}>
                {t('instructor_page_get_started', { ns: 'instructor' })}
              </Button>
            </Stack>
            <Image src='/images/instructor.png' alt='instructor' />
          </HStack>
        </CardBody>
      </Card>
      <Heading mt={10} textAlign={'center'}>
        {t('instructor_page_many_resaon', { ns: 'instructor' })}
      </Heading>
      <Grid gridTemplateColumns={'1fr 1fr 1fr'}>
        {teachValues.map((item, idx) => (
          <TeachValueCard idx={idx} item={item} />
        ))}
      </Grid>
      <Heading mt={10} textAlign={'center'}>
        {t('how_to_begin', { ns: 'instructor' })}
      </Heading>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>{t('how_to_begin_1', { ns: 'instructor' })}</Tab>
          <Tab>{t('how_to_begin_2', { ns: 'instructor' })}</Tab>
          <Tab>{t('how_to_begin_3', { ns: 'instructor' })}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HStack>
              <Stack w={'50%'}>
                <Text>{t('how_to_begin_1_text_1', { ns: 'instructor' })}</Text>
                <Text>{t('how_to_begin_1_text_2', { ns: 'instructor' })}</Text>
                <Text fontWeight={'bold'}>{t('how_we_help_you', { ns: 'instructor' })}</Text>
                <Text>{t('how_to_begin_1_text_3', { ns: 'instructor' })}</Text>
              </Stack>
              <Box w={'50%'}>
                <PlanCurriculumIcon />
              </Box>
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack>
              <Stack w={'50%'}>
                <Text>{t('how_to_begin_2_text_1', { ns: 'instructor' })}</Text>
                <Text>{t('how_to_begin_2_text_2', { ns: 'instructor' })}</Text>
                <Text fontWeight={'bold'}>{t('how_we_help_you', { ns: 'instructor' })}</Text>
                <Text>{t('how_to_begin_2_text_3', { ns: 'instructor' })}</Text>
              </Stack>
              <Box w={'50%'}>
                <RecordVideoIcon />
              </Box>
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack>
              <Stack w={'50%'}>
                <Text>{t('how_to_begin_3_text_1', { ns: 'instructor' })}</Text>
                <Text>{t('how_to_begin_3_text_2', { ns: 'instructor' })}</Text>
                <Text fontWeight={'bold'}>{t('how_we_help_you', { ns: 'instructor' })}</Text>
                <Text>{t('how_to_begin_3_text_3', { ns: 'instructor' })}</Text>
              </Stack>
              <Box w={'50%'}>
                <LaunchCourseIcon />
              </Box>
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Card>
        <CardBody>
          <Stack textAlign={'center'} w={'500px'} mx={'auto'}>
            <SectionTitle
              title={t('become_instructor_today', { ns: 'instructor' })}
              subtitle={t('become_instructor_today_descritpion', { ns: 'instructor' })}
            />
            <Button onClick={onOpen} w={'full'} h={14} colorScheme={'facebook'}>
              {t('instructor_page_get_started', { ns: 'instructor' })}
            </Button>
          </Stack>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size={'4xl'} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={'2xl'}>
            {t('become_instructor_today', { ns: 'instructor' })}
          </ModalHeader>
          <ModalCloseButton />
          <Divider />
          <Formik
            onSubmit={onSubmit} initialValues={InstructorValidation.applyInstructorValue}
            validationSchema={InstructorValidation.applyInstructorValidation}>
            <Form>
              <ModalBody>
                <Stack spacing={4}>
                  <>{error && <ErrorAlert title={error as string} clearHandler={clearInstructorError} />}</>
                  <Flex gap={4}>
                    <TextField
                      name={'firstName'}
                      label={t('first_name', { ns: 'global' })}
                      placeholder={'Ali'}
                      type={'text'}
                    />
                    <TextField
                      name={'lastName'}
                      label={t('last_name', { ns: 'global' })}
                      placeholder={'Osman'}
                      type={'text'}
                    />
                  </Flex>
                  <TextField
                    name={'email'}
                    label={t('login_input_email_label', { ns: 'global' })}
                    placeholder={'mustafayevaxmadjon@gmail.com'}
                    type={'text'}
                  />
                  <TextField
                    name={'socialMedia'}
                    label={`${t('social_media', { ns: 'global' })} (YouTube)`}
                    placeholder={'Link to your lesson'}
                    type={'text'}
                  />
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button
                  isLoading={isLoading}
                  loadingText={`${t('loading', { ns: 'global' })}`}
                  type='submit'
                  colorScheme={'facebook'}
                  h={14}
                  rightIcon={<GoVerified />}>
                  {t('send_to_verify_btn', { ns: 'global' })}
                </Button>
              </ModalFooter>
            </Form>

          </Formik>
        </ModalContent>
      </Modal>
    </Stack>
  )
}

interface TeachValueCardProps {
  idx: number;
  item: {
    title: string;
    description: string;
    icon: FC;
  };
}

const TeachValueCard = ({ item, idx }: TeachValueCardProps) => {
  const { t } = useTranslation();

  return (
    <Stack key={idx} align={'center'} textAlign={'center'} p={4}>
      <Icon as={item.icon} fontSize={100} />
      <Text fontWeight={'bold'} fontSize={20}>
        {t(item.title, { ns: 'instructor' })}
      </Text>
      <Text>{t(item.description, { ns: 'instructor' })}</Text>
    </Stack>
  );
};

export default BecomeInstructorPageComponent