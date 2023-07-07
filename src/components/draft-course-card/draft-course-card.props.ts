import { CourseType } from '@/interfaces/course.interface';

export interface DraftCourseCardProps {
  item: CourseType;
  status: 'Active' | 'Draft';
}