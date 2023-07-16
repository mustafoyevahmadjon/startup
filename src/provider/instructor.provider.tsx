import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { FC, ReactNode, useEffect } from 'react';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { CourseType } from '@/interfaces/course.interface';

interface Props {
  children: ReactNode;
  courses: CourseType[]
  course: CourseType
}

const InstructorProvider: FC<Props> = ({ children, course, courses }): JSX.Element => {
  const { instructorAllCourses, instructorDetailedCourse } = useActions();

  useEffect(() => {
    if(courses?.length) {
      instructorAllCourses(courses)
    }
    if(course) {
      instructorDetailedCourse(course)
    }
  }, [courses, course]);

  return <>{children}</>;
};

export default InstructorProvider;