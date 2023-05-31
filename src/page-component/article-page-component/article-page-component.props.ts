import { ArticleType } from '@/interfaces/article.interface';

export interface ArticlePageComponentProps {
	artciles: ArticleType[];
}

export interface ArticleDetailedProps {
	article: ArticleType;
}