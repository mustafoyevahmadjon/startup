import SectionTitle from "@/components/section-title/section-title"
import { Grid } from "@chakra-ui/react"
import { InstructorEditCourseCard } from '@/components';
import { useTypedSelector } from "@/hooks/useTypedSelector";

const EditCoursePageComponent = () => {
  const { courses } = useTypedSelector(state => state.instructor)
  return (
    <>
      <SectionTitle
        title='Edit courses'
        subtitle='Managing courses and create curriculum for your courses'
      />
      <Grid gridTemplateColumns={'1fr 1fr'} gap={4}>
        {courses.map(item => (
          <InstructorEditCourseCard key={item.slug} item={item} />
        ))}
      </Grid>
    </>
  )
}

export default EditCoursePageComponent