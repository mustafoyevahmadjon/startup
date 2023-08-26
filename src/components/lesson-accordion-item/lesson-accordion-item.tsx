import { Collapse, Flex, Icon, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi';
import LessonForm from '../lesson-form/lesson-form';
import { LessonAccordionItemProps } from './lesson-accordion-item.props';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { getSection } from '@/store/section/section.action';

const LessonAccordionItem = ({ lesson, sectionId }: LessonAccordionItemProps) => {
	const { isOpen, onToggle } = useDisclosure();
	const { deleteLesson } = useActions()
	const { isLoading } = useTypedSelector(state => state.lesson)
	const { course } = useTypedSelector(state => state.instructor);


	const onDeleteLesson = () => {
		const isAgree = confirm('Are you sure?');

		if (isAgree) {
			deleteLesson({
				lessonId: lesson._id,
				sectionId: sectionId,
				callback: () => {
					getSection({ courseId: course?._id, callback: () => { } });
				},
			});
		}
	};

	return (
		<>
			<Flex
				py={3}
				w={'full'}
				cursor={'pointer'}
				justify={'space-between'}
				align={'center'}
				borderColor={useColorModeValue('gray.200', 'gray.600')}
			>
				<Flex align={'center'} gap={2} w={'80%'}>
					<Icon as={FaEdit} onClick={onToggle} />
					<Text>{lesson.name}</Text>
				</Flex>
				<Flex gap={3}>
					<Icon as={FiDelete} cursor={'pointer'} onClick={onDeleteLesson} />
				</Flex>
			</Flex>
			<Collapse in={isOpen} animateOpacity>
				<LessonForm values={lesson} />
			</Collapse>
		</>
	);
};

export default LessonAccordionItem;