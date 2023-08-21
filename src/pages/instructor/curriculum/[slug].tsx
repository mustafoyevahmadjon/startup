import { useTypedSelector } from "@/hooks/useTypedSelector"
import { CourseType } from "@/interfaces/course.interface"
import { withInstructorLayout } from "@/layouts/instructor"
import { CurriculumPageComponent } from "@/page-component"
import { InstructorService } from "@/services/iInstructor.service"
import { GetServerSideProps } from "next"

const CurriculumPage = () => {

  const { course } = useTypedSelector(state => state.instructor)
  return (
    <CurriculumPageComponent />
  )
}

export default withInstructorLayout(CurriculumPage)

export const getServerSideProps: GetServerSideProps<CoursesPageType> = async ({ req, query }) => {
  const course = await InstructorService.getDetailedCourse(
    req.cookies.refresh,
    query.slug as string
  );

  return {
    props: { course },
  };
};

interface CoursesPageType extends Record<string, unknown> {
  course: CourseType;
}