import {
	Box,
	Button,
	Checkbox,
	Heading,
	HStack,
	Icon,
	InputRightElement,
	Stack,
	Text,
	useColorModeValue,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { LoginProps } from './login.props';
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { Form, Formik } from 'formik';
import { AuthValidation } from '@/validations/auth.validation';
import ErrorAlert from '../error-alert/error-alert';
import TextField from '../text-filed/text-field';
import { InterfaceEmailAndPassword } from '@/store/user/user.interface';
import { useRouter } from 'next/router';

const Login = ({ onNavigateStateComponent }: LoginProps) => {
	const [show, setShow] = useState<boolean>(false);
	const { login } = useActions()
	const { error, isLoading } = useTypedSelector(state => state.user);
	const router = useRouter();
	const { t } = useTranslation();
	const toast = useToast();
	const toggleShow = () => setShow(prev => !prev);
	const onSubmit = (formData: InterfaceEmailAndPassword) => {
		login({
			email: formData.email, password: formData.password, callback: () => {
				router.push('/');
				toast({
					title: 'Successfully logged in',
					status: 'info',
					isClosable: true,
					position: 'top-right',
				});
			}
		});

	}


	return (
		<Stack spacing={4}>
			<Heading
				color={useColorModeValue('gray.900', 'gray.200')}
				lineHeight={1.1}
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
			>
				{t('login_title', { ns: 'global' })}
				<Text as={'span'} bgGradient='linear(to-r, gray.400,facebook.400)' bgClip='text'>
					!
				</Text>
			</Heading>
			<Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
				{t('login_description', { ns: 'global' })}
			</Text>
			<Formik
				onSubmit={onSubmit}
				initialValues={{ email: '', password: '' }}
				validationSchema={AuthValidation.login}
			>
				<Form>
					<>{error && <ErrorAlert title={error as string} />}</>
					<TextField
						name='email'
						type='text'
						label={t('login_input_email_label', { ns: 'global' })}
						placeholder={'info@sammi.ac'}
					/>
					<TextField
						name='password'
						label={t('login_input_password_label', { ns: 'global' })}
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
					<HStack my={4} justify={'space-between'}>
						<Checkbox colorScheme={'facebook'}>{t('auth_remember_me', { ns: 'global' })}</Checkbox>
						<Box
							as={'a'}
							onClick={() => onNavigateStateComponent('account-recovery')}
							cursor={'pointer'}
							color={'teal.500'}
							_hover={{ textDecoration: 'underline' }}
						>
							{t('auth_forgot_password', { ns: 'global' })}
						</Box>
					</HStack>
					<Button
						w={'full'}
						bgGradient='linear(to-r, facebook.400,gray.400)'
						color={'white'}
						_hover={{ bgGradient: 'linear(to-r, facebook.500,gray.500)', boxShadow: 'xl' }}
						h={14}
						type={'submit'}
						isLoading={isLoading}
						loadingText={'Loading...'}
					>
						{t('login_btn', { ns: 'global' })}
					</Button>
				</Form>
			</Formik>
			<Text>
				{t('login_not_account_yet', { ns: 'global' })}{' '}
				<Box
					as={'span'}
					onClick={() => onNavigateStateComponent('register')}
					color={'teal.500'}
					cursor={'pointer'}
					_hover={{ textDecoration: 'underline' }}
				>
					{t('login_redirect_to_register', { ns: 'global' })}
				</Box>
			</Text>
		</Stack>
	);
};
export default Login;