import { NextPage } from 'next';
import { withInstructorLayout } from '@/layouts/instructor';
import { InstructorStudentsPageComponent } from '@/page-component';

const Students: NextPage = () => {
	return <InstructorStudentsPageComponent />;
};

export default withInstructorLayout(Students);