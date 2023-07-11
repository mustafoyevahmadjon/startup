import $axios from "@/api/axios";
import { SubmitValuesInterface } from "@/components/instructor-manage-course/instructor-manage-course.props";
import { getCourseUrl } from "@/config/api.config";

export const CourseService = {
  async createCourse(body: SubmitValuesInterface) {
    const response = await $axios.post(`${getCourseUrl("create")}`, body)
    return response.data
  }
}