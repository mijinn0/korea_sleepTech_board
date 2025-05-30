import { AxiosError } from "axios";
import { axiosInstance } from "../axiosConfig";
import { ResponseDto } from "@/dtos/response";
import { UPLOAD_FILE_URL } from "../constants";
import { responseErrorHandler, responseSuccessHandler } from "../axiosConfig";

export const uploadFile = async (formData: FormData): Promise<ResponseDto<string>> => {
  try {
    const response = await axiosInstance.post(UPLOAD_FILE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
}


// await uploadFile(formData, UPLOAD_PRFILE_URL)
// await uploadFile(formData, UPLOAD_BOARD_IMAGE_URL)