import React from 'react'
import {BooksPageComponent} from "@/page-component";
import {withLayout} from "@/layouts/layout";
import Seo from "@/layouts/seo/seo";
import {useTranslation} from "react-i18next";

const Books = () => {
  const { t}  = useTranslation()
  return (
      <Seo
          metaTitle={
              `Sammi | ${t('books_page_title', { ns: 'seo' })}` || 'Sammi | Books'
          }
          metaDescription={
              `Sammi | ${t('books_page_description', { ns: 'seo' })}` ||
              'Sammi can advice books for you'
          }
      >
        <BooksPageComponent />
      </Seo>
  )
}

export default withLayout(Books)