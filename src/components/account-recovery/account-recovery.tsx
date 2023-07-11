import {
    Button,
    Center,
    Icon,
    InputRightElement,
    PinInput,
    PinInputField,
    Progress,
    Stack,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useShowPassword } from '@/hooks/useShowPassword';
import { AccountRecoveryProps } from './account-recovery.props';
import { Form, Formik } from 'formik';
import { AuthValidation } from '@/validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';
import TextField from '../text-filed/text-field';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const AccountRecovery = ({ onNavigateStateComponent }: AccountRecoveryProps) => {
    const [progress, setProgress] = useState<33.33 | 66.66 | 100>(33.33);
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [email, setEmail] = useState<string>('');

    const { sendVerificationCode, verifyVerificationCode, editProfilePassword, clearError } = useActions();
    const { error, isLoading } = useTypedSelector(state => state.user);
    const { show, toggleShow, showConfirm, toggleShowConfirm } = useShowPassword();
    const toast = useToast();
    const { t } = useTranslation();

    const onForm1Submit = (formData: { email: string }) => {
        sendVerificationCode({
            email: formData.email, isUser: true, callback: () => {
                setEmail(formData.email)
                setStep(2);
                setProgress(66.66);
            }
        })

    };

    const form1 = (
        <>
            <Heading
                color={useColorModeValue('gray.900', 'gray.200')}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
                {t('account_recovery_title_form1', { ns: 'global' })}
                <Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
                    !
                </Text>
            </Heading>
            <Text>{t('account_recovery_description_form1', { ns: 'global' })}</Text>
            <>{error && <ErrorAlert title={error as string} clearHandler={clearError} />}</>
            <Formik onSubmit={onForm1Submit} initialValues={{ email: "" }} validationSchema={AuthValidation.onlyEmail}>
                <Form>
                    <TextField type='text' placeholder='mustafayevaxmadjon@gmail.com' name='email' label={t('login_input_email_label', { ns: 'global' })}></TextField>
                    <Button
                        mt={4}
                        w={'full'}
                        bgGradient='linear(to-r, facebook.400,gray.400)'
                        color={'white'}
                        _hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
                        h={14}
                        type={'submit'}
                        isLoading={isLoading}
                        loadingText={`${t('loading', { ns: 'global' })}`}
                    >
                        {t('account_recovery_btn_form1', { ns: 'global' })}
                    </Button>
                </Form>
            </Formik>
        </>
    );

    const onForm2Submit = (formData: { otp: string }) => {
        verifyVerificationCode({
            email, otpVerification: formData.otp, callback: () => {
                setStep(3);
                setProgress(100);
            }
        });
    };

    const form2 = (
        <>
            <Heading
                color={useColorModeValue('gray.900', 'gray.200')}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
                {t('account_recovery_title_form2', { ns: 'global' })}
                <Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
                    !
                </Text>
            </Heading>
            <Text>{t('account_recovery_description_form2', { ns: 'global' })}</Text>
            <>{error && <ErrorAlert title={error as string} clearHandler={clearError} />}</>
            <Formik
                onSubmit={onForm2Submit}
                initialValues={{ otp: '' }}
                validationSchema={AuthValidation.otp}
            >
                {formik => (
                    <Form>
                        <Center>
                            <PinInput
                                onChange={val => formik.setFieldValue('otp', val)}
                                otp
                                size={'lg'}
                                colorScheme={'facebook'}
                                focusBorderColor={'facebook.500'}
                            >
                                {new Array(6).fill(1).map((_, idx) => (
                                    <PinInputField
                                        borderColor={
                                            formik.errors.otp && formik.touched.otp ? 'red.500' : 'facebook.500'
                                        }
                                        mx={1}
                                        key={idx}
                                    />
                                ))}
                            </PinInput>
                        </Center>
                        {formik.errors.otp && formik.touched.otp && (
                            <Text textAlign='center' mt={2} fontSize='14px' color='red.500'>
                                {formik.errors.otp as string}
                            </Text>
                        )}
                        <Button
                            mt={4}
                            w={'full'}
                            bgGradient='linear(to-r, facebook.400,gray.400)'
                            color={'white'}
                            _hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
                            h={14}
                            type={'submit'}
                            isLoading={isLoading}
                            loadingText={`${t('loading', { ns: 'global' })}`}
                        >
                            {t('account_recovery_btn_form2', { ns: 'global' })}
                        </Button>
                    </Form>
                )}
            </Formik>

        </>
    );

    const onForm3Submit = (formData: { password: string }) => {
        editProfilePassword({
            email, password: formData.password, callback: () => {
                onNavigateStateComponent('login');
                toast({
                    title: `${t('successfully_edited', { ns: 'global' })}`,
					description: `${t('login_with_new_password', { ns: 'global' })}`,
                    status: "success",
                    position: 'top-right',
                    isClosable: true,
                });
            }
        })

    };

    const form3 = (
        <>
            <Heading
                color={useColorModeValue('gray.900', 'gray.200')}
                lineHeight={1.1}
                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
            >
                {t('account_recovery_title_form3', { ns: 'global' })}
                <Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
                    !
                </Text>
            </Heading>
            <Text>{t('account_recovery_description_form3', { ns: 'global' })}</Text>
            <Formik onSubmit={onForm3Submit} initialValues={{ password: "", confirmPassword: "" }} validationSchema={AuthValidation.editPassword}>
                <Form>
                    <TextField
                        name='password'
                        label={t('account_recovery_title_form3', { ns: 'global' })}
                        type={!show ? 'password' : 'text'}
                        placeholder={'****'}
                    >
                        <InputRightElement pt={4}>
                            <Icon
                                as={!show ? AiOutlineEye : AiOutlineEyeInvisible}
                                cursor={'pointer'}
                                onClick={toggleShow}
                            />
                        </InputRightElement>
                    </TextField>
                    <TextField
                        name='confirmPassword'
                        label={t('register_input_confirm_password_label', { ns: 'global' })}
                        type={!showConfirm ? 'password' : 'text'}
                        placeholder={'****'}
                    >
                        <InputRightElement pt={4}>
                            <Icon
                                as={!showConfirm ? AiOutlineEye : AiOutlineEyeInvisible}
                                cursor={'pointer'}
                                onClick={toggleShowConfirm}
                            />
                        </InputRightElement>
                    </TextField>
                    <Button
                        mt={4}
                        w={'full'}
                        bgGradient='linear(to-r, facebook.400,gray.400)'
                        color={'white'}
                        _hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
                        h={14}
                        type={'submit'}
                        isLoading={isLoading}
                        loadingText={`${t('loading', { ns: 'global' })}`}
                    >
                        {t('account_recovery_btn_form3', { ns: 'global' })}
                    </Button>
                </Form>
            </Formik>
        </>
    );

    return (
        <>
            <Progress value={progress} colorScheme={'facebook'} hasStripe isAnimated />

            <Stack spacing={4}>
                {step == 1 && form1}
                {step == 2 && form2}
                {step == 3 && form3}
            </Stack>
        </>
    );
};

export default AccountRecovery;