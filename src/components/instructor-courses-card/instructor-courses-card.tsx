import { Box, Button, Divider, Flex, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CiViewList } from 'react-icons/ci';
import { SiGoogleanalytics } from 'react-icons/si';
import { VscOpenPreview } from 'react-icons/vsc';
import { InstructoCoursesCardProps } from './instructor-courses-card.props';
import { loadImage } from '@/helpers/image.helper';

const InstructorCoursesCard: FC<InstructoCoursesCardProps> = ({ item }): JSX.Element => {
  return (
    <HStack key={item.title} p={5} boxShadow={'dark-lg'} mt={5} borderRadius={'lg'}>
      <Stack spacing={5} w={'70%'}>
        <Text fontSize={'20px'} color={'facebook.500'} fontWeight={'bold'}>
          {item.level}
        </Text>
        <Heading>{item.title}</Heading>
        <HStack>
          <Flex align={'center'} gap={1}>
            <Icon as={CiViewList} />
            <Text>{item.lessonCount} lesson</Text>
          </Flex>
          <Flex align={'center'} gap={1}>
            <Icon as={AiOutlineClockCircle} />
            <Text>{item.totalHour} hours</Text>
          </Flex>
          <Flex align={'center'} gap={1}>
            <Icon as={SiGoogleanalytics} />
            <Text>{item.level}</Text>
          </Flex>
        </HStack>
        <Divider />
        <HStack>
          <Button rightIcon={<VscOpenPreview />} w={"full"} h={16} colorScheme='facebook'>Preview</Button>
        </HStack>
      </Stack>
      <Box w={'30%'} h={'300px'} position={'relative'}>
        <Image
          fill
          src={loadImage(item.image)}
          alt={item.title}
          style={{ objectFit: 'cover', borderRadius: '10px' }}
        />
      </Box>
    </HStack>
  );
};

export default InstructorCoursesCard;