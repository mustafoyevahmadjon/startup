import SectionTitle from "@/components/section-title/section-title"
import { courseusers } from "@/config/constants"
import { Box, Button, Card, CardBody, Heading, Input, Stack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { CategoryScale } from "chart.js"
import Chart from "chart.js/auto"
import { useState } from "react"
import { Line } from "react-chartjs-2"
import { useTranslation } from "react-i18next"
import { AiOutlineFieldNumber, AiOutlineReload } from "react-icons/ai"

Chart.register(CategoryScale)
const StudentsPageComponent = () => {
  const [chartData, setChartData] = useState({
    labels: courseusers.map(data => data.year),
    datasets: [
      {
        label: 'Users Gained ',
        data: courseusers.map(data => data.userGain),
        backgroundColor: ['rgba(75,192,192,1)', '#50AF95', '#f3ba2f', '#2a71d0'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  const { t } = useTranslation();
  return (
    <>
      <Card>
        <CardBody>
          <Stack>
            <SectionTitle title="Students" subtitle="Enrolled users to your courses and analytics" />
            <Box className="chart-container">
              <Line
                data={chartData}
                options={{
                  plugins: {
                    title: { display: false },
                    legend: { display: false },
                  },
                }}
              />
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Box mt={10}>
        <Heading>All users</Heading>
        <Box pos={'relative'} mt={5}>
          <Input
            h={14}
            w={'full'}
            bg={'white'}
            color={'gray.900'}
            placeholder={t('search_input_placeholder', { ns: 'courses' }) || ''}
            _placeholder={{ color: 'gray.500' }}
          />
          <Button pos={'absolute'} right={2} top={2} colorScheme={'facebook'} zIndex={999}>
            {t('search_input_btn', { ns: 'courses' })}
          </Button>
        </Box>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>
              <Button colorScheme={'facebook'} variant={'outline'} rightIcon={<AiOutlineReload />}>
                more...
              </Button>
            </TableCaption>
            <Thead>
              <Tr>
                <Th isNumeric>
                  <AiOutlineFieldNumber fontSize={20} />
                </Th>
                <Th>Email</Th>
                <Th>FullName</Th>
                <Th>Courses</Th>
                <Th>Enrolled date</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courseusers.map((user, idx) => (
                <Tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.fullName}</Td>
                  <Td>{2 * idx + 3}</Td>
                  <Td>{user.year}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}

export default StudentsPageComponent