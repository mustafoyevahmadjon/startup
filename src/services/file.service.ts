import { API_URL, getFileUrl } from "@/config/api.config"
import axios from "axios"

export const FIleService = {
  async fileUpload(formData: FormData, folder: string = "default") {
    const response = await axios.post<{ url: string }>(`${API_URL}${getFileUrl("save")}?folder=${folder}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    return response.data
  }
}