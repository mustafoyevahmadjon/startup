export const API_URL = `${process.env.NEXT_PUBLIC_API_SERVICE}/api`;
export const getAuthUrl = (url: string) => `/auth/${url}`;
export const getMailUrl = (url: string) => `/mail/${url}`
export const getUserUrl = (url: string) => `/user/${url}`
export const getInstructorUrl = (url: string) => `/instructor/${url}`
export const getFileUrl = (url: string) => `/file/${url}`
export const getCourseUrl = (url: string) => `/course/${url}`