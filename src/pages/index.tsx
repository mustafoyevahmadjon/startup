import { withLayout } from '@/layouts/layout'
import { HomePageComponent } from '@/page-component'
import Seo from '@/layouts/seo/seo';
import {useTranslation} from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	return (
		<Seo
			metaTitle={`Sammi | ${t('main_page_title', { ns: 'seo' })}`}
			metaDescription={`${t('main_page_description', { ns: 'seo' })}`}
		>
			<HomePageComponent />
		</Seo>
	)
}

export default withLayout(Home)