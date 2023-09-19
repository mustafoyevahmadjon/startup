export interface CourseType {
    slug: string;
    title: string;
    lessonCount: number;
    totalHour: number;
    level: string;
    price: number;
    reviewAvarage: number;
    reviewCount: number;
    author: AuthorType;
    tags: string[];
    requirements: string[];
    learn: string[];
    exerpt: string;
    image: string
    description: string;
    category: string;
    _id: string;
    language: string
    isActive: boolean
}
export interface AuthorType {
    firstName: string;
    lastName: string;
    avatar: string;
}