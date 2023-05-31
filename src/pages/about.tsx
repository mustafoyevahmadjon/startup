import { withLayout } from '@/layouts/layout'
import { AboutPageComponent } from '@/page-component'
import React from 'react'
import Seo from "@/layouts/seo/seo";
import {useTranslation} from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
      <Seo
          metaTitle={
              `Sammi | ${t('about_page_title', { ns: 'seo' })}` || 'Sammi | About us'
          }
          metaDescription={
              `Sammi | ${t('about_page_description', { ns: 'seo' })}` ||
              'Main information about sammi platform'
          }
      >
        <AboutPageComponent />
      </Seo>
  );
}

export default withLayout(AboutPage)