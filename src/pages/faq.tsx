import { withLayout } from "@/layouts/layout"
import {FaqPageComponent} from "@/page-component";
import Seo from "@/layouts/seo/seo";
import {useTranslation} from "react-i18next";

const FaqPage = () => {
  const { t } = useTranslation()
  return (
      <Seo
          metaTitle={
              `Sammi | ${t('faq_page_title', { ns: 'seo' })}` || 'Sammi | FAQ'
          }
          metaDescription={
              `Sammi | ${t('faq_page_description', { ns: 'seo' })}` ||
              'More users in sammi platform frequently asked question'
          }
      >
        <FaqPageComponent />
      </Seo>
  )
}

export default withLayout(FaqPage)