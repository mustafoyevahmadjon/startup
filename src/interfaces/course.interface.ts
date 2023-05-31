export interface CourseType {
    image: string;
    slug: string
    title: string;
    lessonCount: number;
    totalHour: number;
    level: string;
    price: number;
    reviewAvarage: number;
    reviewCount: number;
    author: AuthorType;
}

export interface AuthorType {
    firstName: string;
    lastName: string;
    avatar: string;
}