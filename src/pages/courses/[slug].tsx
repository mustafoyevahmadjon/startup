import { useRouter } from 'next/router';
import { withLayout } from '@/layouts/layout';
import Seo from '@/layouts/seo/seo';
import { DetailedCourseComponent } from '@/page-component';

const DetailedCoursePage = () => {
  const router = useRouter();

  return (
      <Seo metaTitle={`Sammi course | ${router.query.slug}`}>
        <DetailedCourseComponent />
      </Seo>
  );
};

export default withLayout(DetailedCoursePage);