import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Center,
  Collapse,
  Flex,
  Icon,
  List,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import ErrorAlert from '../error-alert/error-alert';
import LessonAccordionItem from '../lesson-accordion-item/lesson-accordion-item';
import LessonForm from '../lesson-form/lesson-form';
import { SectionAccordionProps } from './section-accordion.props';
import { manageLessonValues } from '@/validations/course.validation';
import { LessonType } from '@/interfaces/instructor.interface';
import { DragEvent } from 'react';

const SectionAccordion = ({ section, setSectionTitle, onOpen, sectionIdx }: SectionAccordionProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const { deleteSection, clearSectionError, getSection, dragSection } = useActions();
  const { error, isLoading, sections } = useTypedSelector(state => state.section);
  const { course } = useTypedSelector(state => state.instructor);
  const toast = useToast();

  const onDelete = () => {
    const isAgree = confirm('Are you sure?');

    if (isAgree) {
      deleteSection({
        sectionId: section._id,
        courseId: course?._id,
        callback: () => {
          toast({ title: 'Successfully deleted section', position: 'top-right', isClosable: true });
          getSection({
            courseId: course?._id,
            callback: () => { },
          });
        },
      });
    }
  };

  const onEditSection = () => {
    onOpen();
    setSectionTitle({ title: section.title, id: section._id });
  };

  const onDragStartSection = (e: DragEvent<HTMLButtonElement>) => {
    e.dataTransfer.setData("sectionIdx", String(sectionIdx))
  }

  const onDropSection = (e: DragEvent<HTMLButtonElement>) => {
    const movingSectionIndex = Number(e.dataTransfer.getData("sectionIdx"))
    const allSections = [...sections]
    const movingItem = allSections[movingSectionIndex]
    const editedIdx = allSections.map(c => c._id)
    allSections.splice(movingSectionIndex, 1)
    allSections.splice(sectionIdx, 0, movingItem)
    dragSection({
      sections: editedIdx, courseId: course?._id, callback() {
        getSection({
          courseId: course?._id,
          callback: () => { },
        });
      },
    })
  }


  return (
    <AccordionItem>
      <>{error && <ErrorAlert title={error as string} clearHandler={clearSectionError} />}</>

      <AccordionButton h={14} p={2} fontWeight={'bold'} cursor={isLoading ? 'progress' : 'pointer'} draggable={true} onDragStart={onDragStartSection} onDrop={onDropSection}>
        <Flex w={'100%'} align={'center'} justify={'space-between'}>
          <Flex align={'center'} gap={2}>
            <Icon as={AiOutlineMenu} w={5} h={5} />
            {section.title}
          </Flex>
          <Flex fontSize={'15px'} align={'center'} gap={3}>
            <Icon as={MdEdit} w={5} h={5} onClick={onEditSection} />
            <Icon as={MdDelete} w={5} h={5} onClick={onDelete} />
            <AccordionIcon />
          </Flex>
        </Flex>
      </AccordionButton>
      <AccordionPanel pb={4}>
        <List onDragOver={e => e.preventDefault()}>
          {section.lessons.map((lesson, idx) => (
            <LessonAccordionItem key={lesson._id} lessonIdx={idx} lesson={lesson} sectionId={section._id} />
          ))}
        </List>
        <Center>
          <Button
            variant={'unstyled'}
            color={'facebook.200'}
            _hover={{ textDecoration: 'underline' }}
            onClick={onToggle}
          >
            {isOpen ? 'Close form' : 'Create lesson'}
          </Button>
        </Center>
        <Collapse in={isOpen} animateOpacity>
          <LessonForm sectionId={section._id} values={manageLessonValues as LessonType} />
        </Collapse>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SectionAccordion;