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

const CoursesPageComponent = () => {
	const { courses } = useTypedSelector(state => state.instructor)
	return (
		<>
			<Card>
				<CardBody p={0}>
					<HStack justify={'center'}>
						<Stack>
							<SectionTitle
								title='All courses'
								subtitle='Manage your courses and refactoring any time'
							/>
						</Stack>
						<Image width={480} height={480} src='/images/manage.png' alt='instructor' />
					</HStack>
				</CardBody>
			</Card>

			<Tabs isFitted variant='enclosed' mt={10}>
				<TabList mb='1em'>
					<Tab>All courses</Tab>
					<Tab>Active courses</Tab>
					<Tab>Draft courses</Tab>
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