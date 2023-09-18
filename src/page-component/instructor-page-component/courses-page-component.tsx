import {
	Card,
	CardBody,
	HStack,
	Image,
	Stack,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from '@chakra-ui/react';
import { InstructorCoursesCard } from '@/components';
import SectionTitle from '@/components/section-title/section-title';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useTranslation } from 'react-i18next';

const CoursesPageComponent = () => {
	const { courses } = useTypedSelector(state => state.instructor)
	const { t } = useTranslation();
	return (
		<>
			<Card>
				<CardBody p={0}>
					<HStack justify={'center'}>
						<Stack>
							<SectionTitle
								title={t('all_courses_title', { ns: 'instructor' })}
								subtitle={t('all_courses_description', { ns: 'instructor' })}
							/>
						</Stack>
						<Image width={480} height={480} src='/images/manage.png' alt='instructor' />
					</HStack>
				</CardBody>
			</Card>

			<Tabs isFitted variant='enclosed' mt={10}>
				<TabList mb='1em'>
					<Tab>{t('all_courses_title', { ns: 'instructor' })}</Tab>
					<Tab>{t('active_courses', { ns: 'instructor' })}</Tab>
					<Tab>{t('draft_courses', { ns: 'instructor' })}</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						{courses.map(item => (
							<InstructorCoursesCard key={item.slug} item={item} />
						))}
					</TabPanel>
					<TabPanel>
						{courses
							.filter(c => c.isActive)
							.map(item => <InstructorCoursesCard key={item.slug} item={item} />)
						}
					</TabPanel>
					<TabPanel>
						{courses
							.filter(c => !c.isActive)
							.map(item => <InstructorCoursesCard key={item.slug} item={item} />)
						}
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default CoursesPageComponent;